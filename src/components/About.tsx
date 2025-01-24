import { Card, CardContent } from "@/components/ui/card";
import { SEO_KEYWORDS } from "@/constants";

const About = () => {
  return (
    <section id="about" className="py-8 px-4 sm:px-6 lg:px-8 bg-accent-blue/20 relative">
      <div className="absolute right-0 top-0 w-full h-full sm:w-1/3" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-6 font-hoss text-center uppercase">
          SOBRE NÓS
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Card className="bg-white shadow-lg md:w-1/2">
            <CardContent className="p-6">
              <div className="space-y-4 text-lg text-neutral-dark font-como text-justify">
                <p className="indent-8">
                  Bem-vindo à Clínica Faz de Conta, onde a imaginação ganha asas e o desenvolvimento infantil encontra seu espaço ideal em Belo Horizonte.
                </p>
                <p className="indent-8">
                  Somos uma clínica multidisciplinar especializada em atendimentos pediátricos, localizada no bairro Prado, em Belo Horizonte/MG. Nossa equipe é composta por profissionais especializados em fisioterapia pediátrica, terapia ocupacional, fonoaudiologia e desenvolvimento infantil.
                </p>
                <p className="indent-8">
                  O nosso Faz de Conta valoriza a magia da imaginação e a criação de ambientes onde cada criança se sinta livre para explorar, aprender e crescer. Aqui, acreditamos que estimular brincando é uma forma poderosa de aprender sobre o Mundo e sobre si mesma.
                </p>
                <p className="indent-8">
                  Agora imagine, sonhe e celebre, pois é assim que encontramos a essência do que significa acreditar, e o verdadeiro poder da criação com fé e cor.
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="hidden md:block md:w-1/2">
            <img
              src="/lovable-uploads/90873e2f-c383-4025-9573-a7003165d809.png"
              alt="Varinha mágica"
              className="w-full h-auto max-w-md mx-auto"
              loading="lazy"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;