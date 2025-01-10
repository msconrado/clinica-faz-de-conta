import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-8 px-4 sm:px-6 lg:px-8 bg-accent-blue/20 relative">
      <div className="absolute right-0 top-0 w-full h-full bg-formas bg-contain bg-no-repeat bg-right opacity-20 sm:w-1/3" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-6 font-hoss text-center uppercase">
          SOBRE NÓS
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Card className="bg-white shadow-lg md:w-1/2">
            <CardContent className="p-6">
              <div className="space-y-4 text-lg text-neutral-dark font-como text-justify">
                <p className="indent-8">
                  Aqui, a imaginação ganha asas.
                </p>
                <p className="indent-8">
                  Somos uma Clínica multidisciplinar, especializada em atendimentos pediátricos, 
                  localizada em Belo Horizonte/ MG, em um bairro de fácil acesso. A Clínica Faz 
                  de Conta é um espaço lúdico, onde as crianças transformam a realidade ao seu 
                  redor, a partir de sua imaginação.
                </p>
                <p className="indent-8">
                  O nosso Faz de Conta valoriza a magia da imaginação e a criação de ambientes 
                  onde cada criança se sinta livre para explorar, aprender e crescer. Aqui, 
                  acreditamos que estimular brincando é uma forma poderosa de aprender sobre o 
                  mundo e sobre si mesma.
                </p>
                <p className="indent-8">
                  Agora imagine, sonhe e celebre, pois é assim que encontramos a essência do que 
                  significa acreditar, e o verdadeiro poder da criação com fé e cor.
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="md:w-1/2">
            <img
              src="/lovable-uploads/90873e2f-c383-4025-9573-a7003165d809.png"
              alt="Varinha mágica"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;