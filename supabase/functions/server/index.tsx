import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-e72c237a/health", (c) => {
  return c.json({ status: "ok" });
});

// Create order endpoint
app.post("/make-server-e72c237a/orders", async (c) => {
  try {
    const body = await c.req.json();
    const { orderNumber, customerName, phone, pickupType, time, payment, items, total } = body;

    if (!orderNumber || !customerName || !phone || !items || !total) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const order = {
      orderNumber,
      customerName,
      phone,
      pickupType,
      time,
      payment,
      items,
      total,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    await kv.set(`order:${orderNumber}`, order);

    console.log(`New order created: ${orderNumber} - ${customerName} - Total: ${total}`);

    return c.json({ success: true, orderNumber });
  } catch (error) {
    console.error(`Error creating order: ${error}`);
    return c.json({ error: "Failed to create order", details: error.message }, 500);
  }
});

// Get order by number
app.get("/make-server-e72c237a/orders/:orderNumber", async (c) => {
  try {
    const orderNumber = c.req.param("orderNumber");
    const order = await kv.get(`order:${orderNumber}`);

    if (!order) {
      return c.json({ error: "Order not found" }, 404);
    }

    return c.json({ success: true, order });
  } catch (error) {
    console.error(`Error fetching order: ${error}`);
    return c.json({ error: "Failed to fetch order", details: error.message }, 500);
  }
});

// Get all orders
app.get("/make-server-e72c237a/orders", async (c) => {
  try {
    const orders = await kv.getByPrefix("order:");
    return c.json({ success: true, orders });
  } catch (error) {
    console.error(`Error fetching orders: ${error}`);
    return c.json({ error: "Failed to fetch orders", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);