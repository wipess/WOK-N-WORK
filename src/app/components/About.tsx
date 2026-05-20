interface AboutProps {
  translations: any;
}

export function About({ translations }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-accent text-center mb-12">
          {translations.about.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-foreground leading-relaxed">
              {translations.about.text}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-foreground">
                  {translations.about.feature1}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-foreground">
                  {translations.about.feature2}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-foreground">
                  {translations.about.feature3}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-foreground">
                  {translations.about.feature4}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-lg blur-2xl"></div>
            <img
              src={import.meta.env.BASE_URL + 'WOK.png'}
              alt="logo"
              className="relative rounded-lg shadow-2xl border-2 border-accent/30 w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg border-2 border-accent/50">
              <p className="font-bold text-lg">Wok'n'work Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
