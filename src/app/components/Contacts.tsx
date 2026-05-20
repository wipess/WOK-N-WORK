import { MapPin, Clock } from 'lucide-react';

interface ContactsProps {
  translations: any;
}

export function Contacts({ translations }: ContactsProps) {
  return (
    <section id="contacts" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-accent text-center mb-12">
          {translations.contacts.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-accent/20">
              <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-accent mb-2">{translations.contacts.address}</h3>
                <p className="text-foreground">г. Иркутск, ул. Лермонтова, 102</p>
                <p className="text-muted-foreground text-sm">Рядом с институтом</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-accent/20">
              <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-accent mb-2">{translations.contacts.hours}</h3>
                <p className="text-foreground">{translations.contacts.hoursValue}</p>
                <p className="text-muted-foreground text-sm">Ежедневно</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg overflow-hidden border border-accent/20 h-[300px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=104.296700,52.289600&z=16&l=map"
              width="100%"
              height="100%"
              frameBorder="0"
              className="grayscale hover:grayscale-0 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
