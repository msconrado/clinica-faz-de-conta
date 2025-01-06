import { Card, CardContent } from "@/components/ui/card";

const Pillars = () => {
  const pillars = [
    "Humanização",
    "Respeito",
    "Ética",
    "Inclusão"
  ];

  return (
    <section id="pillars" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center uppercase">
          PILARES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary-dark font-hoss">{pillar}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;