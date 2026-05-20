import { MousePointer, CreditCard, Package } from 'lucide-react';

interface HowItWorksProps {
  translations: any;
}

export function HowItWorks({ translations }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-accent text-center mb-16">
          {translations.howItWorks.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-accent/30">
                <MousePointer className="w-10 h-10 text-white" />
              </div>
              <div className="absolute top-8 left-1/2 w-full h-0.5 bg-accent/30 hidden md:block" style={{ width: 'calc(100% + 2rem)' }} />
              <h3 className="text-2xl font-bold text-accent mb-3">
                {translations.howItWorks.step1}
              </h3>
              <p className="text-foreground">
                {translations.howItWorks.step1desc}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-accent/30 relative z-10">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <div className="absolute top-8 left-1/2 w-full h-0.5 bg-accent/30 hidden md:block" style={{ width: 'calc(100% + 2rem)' }} />
              <h3 className="text-2xl font-bold text-accent mb-3">
                {translations.howItWorks.step2}
              </h3>
              <p className="text-foreground">
                {translations.howItWorks.step2desc}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-accent/30 relative z-10">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-3">
                {translations.howItWorks.step3}
              </h3>
              <p className="text-foreground">
                {translations.howItWorks.step3desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
