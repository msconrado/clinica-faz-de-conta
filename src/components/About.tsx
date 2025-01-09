import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-6 font-hoss text-center uppercase">
          SOBRE NÓS
        </h2>
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-4 text-lg text-neutral-dark font-como">
              <p>Aqui, a imaginação ganha asas.</p>
              <p>
                Somos uma Clínica multidisciplinar, especializada em atendimentos pediátricos, 
                localizada em Belo Horizonte/ MG, em um bairro de fácil acesso. A Clínica Faz 
                de Conta é um espaço lúdico, onde as crianças transformam a realidade ao seu 
                redor, a partir de sua imaginação.
              </p>
              <p>
                O nosso Faz de Conta valoriza a magia da imaginação e a criação de ambientes 
                onde cada criança se sinta livre para explorar, aprender e crescer. Aqui, 
                acreditamos que estimular brincando é uma forma poderosa de aprender sobre o 
                mundo e sobre si mesma.
              </p>
              <p>
                Agora imagine, sonhe e celebre, pois é assim que encontramos a essência do que 
                significa acreditar, e o verdadeiro poder da criação com fé e cor.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;