export type MenuCategory = 'classic' | 'spicy' | 'vegetarian' | 'appetizers' | 'drinks';

export interface MenuItem {
  id: string;
  name: {
    ru: string;
    en: string;
    cn: string;
  };
  description: {
    ru: string;
    en: string;
    cn: string;
  };
  category: MenuCategory;
  price: number;
  image: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'wok-1',
    name: {
      ru: 'Классический Wok с курицей',
      en: 'Classic Chicken Wok',
      cn: '经典鸡肉炒菜',
    },
    description: {
      ru: 'Лапша удон, сочная курица, свежие овощи',
      en: 'Udon noodles, juicy chicken, fresh vegetables',
      cn: '乌冬面、多汁鸡肉、新鲜蔬菜',
    },
    category: 'classic',
    price: 350,
    image: 'https://images.unsplash.com/photo-1649749078660-52ffbf617f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwd29rJTIwbm9vZGxlcyUyMGNvb2tpbmclMjBhc2lhbiUyMGZvb2R8ZW58MXx8fHwxNzc4NzI1OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'wok-2',
    name: {
      ru: 'Острый Wok со свининой',
      en: 'Spicy Pork Wok',
      cn: '香辣猪肉炒菜',
    },
    description: {
      ru: 'Рисовая лапша, свинина, перец чили, острый соус',
      en: 'Rice noodles, pork, chili pepper, spicy sauce',
      cn: '米粉、猪肉、辣椒、辣酱',
    },
    category: 'spicy',
    price: 380,
    image: 'https://images.unsplash.com/photo-1751151497803-baad38515fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjaGluZXNlJTIwd29rJTIwbm9vZGxlcyUyMGNvb2tpbmclMjBhc2lhbiUyMGZvb2R8ZW58MXx8fHwxNzc4NzI1OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    isSpicy: true,
  },
  {
    id: 'wok-3',
    name: {
      ru: 'Вегетарианский Wok с тофу',
      en: 'Vegetarian Tofu Wok',
      cn: '素食豆腐炒菜',
    },
    description: {
      ru: 'Соба, тофу, брокколи, морковь, кунжутный соус',
      en: 'Soba, tofu, broccoli, carrot, sesame sauce',
      cn: '荞麦面、豆腐、西兰花、胡萝卜、芝麻酱',
    },
    category: 'vegetarian',
    price: 320,
    image: 'https://images.unsplash.com/photo-1769690507359-98ad7820b1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjaGluZXNlJTIwd29rJTIwbm9vZGxlcyUyMGNvb2tpbmclMjBhc2lhbiUyMGZvb2R8ZW58MXx8fHwxNzc4NzI1OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    isVegetarian: true,
  },
  {
    id: 'wok-4',
    name: {
      ru: 'Морской Wok с креветками',
      en: 'Seafood Shrimp Wok',
      cn: '海鲜虾仁炒菜',
    },
    description: {
      ru: 'Удон, королевские креветки, болгарский перец',
      en: 'Udon, king prawns, bell pepper',
      cn: '乌冬面、大虾、甜椒',
    },
    category: 'classic',
    price: 450,
    image: 'https://images.unsplash.com/photo-1772004839629-61d8f10ccebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxjaGluZXNlJTIwd29rJTIwbm9vZGxlcyUyMGNvb2tpbmclMjBhc2lhbiUyMGZvb2R8ZW58MXx8fHwxNzc4NzI1OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'wok-5',
    name: {
      ru: 'Огненный Wok с говядиной',
      en: 'Fiery Beef Wok',
      cn: '火辣牛肉炒菜',
    },
    description: {
      ru: 'Говядина, острый перец, пекинская капуста',
      en: 'Beef, hot pepper, Chinese cabbage',
      cn: '牛肉、辣椒、大白菜',
    },
    category: 'spicy',
    price: 420,
    image: 'https://images.unsplash.com/photo-1565355857989-333dff0b3dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjaGluZXNlJTIwd29rJTIwbm9vZGxlcyUyMGNvb2tpbmclMjBhc2lhbiUyMGZvb2R8ZW58MXx8fHwxNzc4NzI1OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    isSpicy: true,
  },
  {
    id: 'wok-6',
    name: {
      ru: 'Овощной Wok',
      en: 'Vegetable Wok',
      cn: '蔬菜炒菜',
    },
    description: {
      ru: 'Микс свежих овощей, рисовая лапша, соевый соус',
      en: 'Mix of fresh vegetables, rice noodles, soy sauce',
      cn: '新鲜蔬菜、米粉、酱油',
    },
    category: 'vegetarian',
    price: 280,
    image: 'https://images.unsplash.com/photo-1767324672583-8818531f650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjaGluZXNlJTIwd29rJTIwbm9vZGxlcyUyMGNvb2tpbmclMjBhc2lhbiUyMGZvb2R8ZW58MXx8fHwxNzc4NzI1OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    isVegetarian: true,
  },
  {
    id: 'app-1',
    name: {
      ru: 'Спринг-роллы с курицей',
      en: 'Chicken Spring Rolls',
      cn: '鸡肉春卷',
    },
    description: {
      ru: '4 шт, хрустящие роллы с курицей и овощами',
      en: '4 pcs, crispy rolls with chicken and vegetables',
      cn: '4个，鸡肉蔬菜春卷',
    },
    category: 'appetizers',
    price: 180,
    image: 'https://images.unsplash.com/photo-1645292821217-fb77e7fa7269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxjaGluZXNlJTIwd29rJTIwbm9vZGxlcyUyMGNvb2tpbmclMjBhc2lhbiUyMGZvb2R8ZW58MXx8fHwxNzc4NzI1OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'app-2',
    name: {
      ru: 'Овощные спринг-роллы',
      en: 'Vegetable Spring Rolls',
      cn: '蔬菜春卷',
    },
    description: {
      ru: '4 шт, вегетарианские роллы',
      en: '4 pcs, vegetarian rolls',
      cn: '4个，素食春卷',
    },
    category: 'appetizers',
    price: 150,
    image: 'https://images.unsplash.com/photo-1768806470347-0d336287d6b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxjaGluZXNlJTIwd29rJTIwbm9vZGxlcyUyMGNvb2tpbmclMjBhc2lhbiUyMGZvb2R8ZW58MXx8fHwxNzc4NzI1OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    isVegetarian: true,
  },
  {
    id: 'drink-1',
    name: {
      ru: 'Зеленый чай',
      en: 'Green Tea',
      cn: '绿茶',
    },
    description: {
      ru: 'Классический китайский зеленый чай',
      en: 'Classic Chinese green tea',
      cn: '经典中国绿茶',
    },
    category: 'drinks',
    price: 80,
    image: 'https://images.unsplash.com/photo-1600680731610-0744c3ffa3db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx0ZWElMjBsZW1vbmFkZSUyMGRyaW5rcyUyMGJldmVyYWdlcyUyMGFzaWFufGVufDF8fHx8MTc3OTI3Mzk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'drink-2',
    name: {
      ru: 'Лимонад',
      en: 'Lemonade',
      cn: '柠檬水',
    },
    description: {
      ru: 'Освежающий домашний лимонад',
      en: 'Refreshing homemade lemonade',
      cn: '清爽自制柠檬水',
    },
    category: 'drinks',
    price: 100,
    image: 'https://images.unsplash.com/photo-1723083560217-0a85ebd60e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWElMjBsZW1vbmFkZSUyMGRyaW5rcyUyMGJldmVyYWdlcyUyMGFzaWFufGVufDF8fHx8MTc3OTI3Mzk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];
