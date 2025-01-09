import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Structure = () => {
  const images = [
    "https://source.unsplash.com/random/800x600/?clinic",
    "https://source.unsplash.com/random/800x600/?hospital",
    "https://source.unsplash.com/random/800x600/?therapy",
  ];

  return (
    <section id="structure" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center uppercase">
          NOSSA ESTRUTURA
        </h2>
        <div className="text-center mb-12 max-w-4xl mx-auto bg-accent-blue/10 p-8 rounded-lg shadow-lg">
          <p className="text-lg text-neutral-dark font-como mb-4">
            Um ambiente onde o lúdico encontra a responsabilidade e o respeito com o próximo.
          </p>
          <p className="text-lg text-neutral-dark font-como mb-4">
            Onde as formas e cores se moldam tornando o espaço um palco da vida.
          </p>
          <p className="text-lg text-neutral-dark font-como mb-4">
            Onde a arte e o cuidado andam juntos com um mesmo propósito: transformar a jornada.
          </p>
          <p className="text-lg text-neutral-dark font-como mb-4">
            Onde suas vitórias são celebradas, e cada pequeno passo é uma grande conquista.
          </p>
          <p className="text-lg text-neutral-dark font-como mb-4">
            Onde cada dia é um capítulo de uma história de força e amor.
          </p>
          <p className="text-lg text-neutral-dark font-como">
            Conheça a Clínica Faz de conta, o nosso espaço em prol do desenvolvimento infanto-juvenil.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-0">
                    <img
                      src={image}
                      alt={`Estrutura ${index + 1}`}
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Structure;