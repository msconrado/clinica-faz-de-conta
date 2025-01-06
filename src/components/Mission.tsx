import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <section id="mission" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-blue/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center">
          Missão, Visão e Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary-dark mb-4 font-hoss">Missão</h3>
              <p className="text-neutral-dark font-como">
                Proporcionar desenvolvimento infantil de qualidade com atendimento humanizado e personalizado.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary-dark mb-4 font-hoss">Visão</h3>
              <p className="text-neutral-dark font-como">
                Ser referência em desenvolvimento infantil em Belo Horizonte.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary-dark mb-4 font-hoss">Valores</h3>
              <p className="text-neutral-dark font-como">
                Comprometimento, Ética, Humanização, Excelência e Inovação.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;