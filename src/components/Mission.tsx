import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <section id="mission" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-blue/10 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-prancheta19 bg-contain bg-no-repeat bg-left opacity-20" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center uppercase">
          MISSÃO, VISÃO E VALORES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary-dark mb-4 font-hoss">Missão</h3>
              <p className="text-neutral-dark font-como">
                Cuidar com carinho e competência para que toda criança se sinta capaz de alcançar seus objetivos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary-dark mb-4 font-hoss">Visão</h3>
              <p className="text-neutral-dark font-como">
                Criar um futuro de possibilidades, onde nossos pacientes, famílias e profissionais cresçam juntos com um único propósito: Transformar a jornada e garantir que cada criança tenha acesso a oportunidades que favoreçam seu crescimento.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary-dark mb-4 font-hoss">Valores</h3>
              <p className="text-neutral-dark font-como">
                Proporcionar um ambiente acolhedor e transformador para as crianças, suas famílias e nossos profissionais.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;