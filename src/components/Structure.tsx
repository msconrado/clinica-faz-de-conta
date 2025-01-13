import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Structure = () => {
  const images = [
    "/lovable-uploads/925f94b7-5d81-440a-820c-d59bdb4f9417.png",
    "/lovable-uploads/3c8debd0-aef0-4038-ac12-3dc43e9db27d.png",
    "/lovable-uploads/30ba239b-33ad-4de6-beba-aa291f6b3234.png",
    "/lovable-uploads/5be317ec-0e33-450c-a7d5-6c55c5fc70fc.png",
    "/lovable-uploads/48ab805f-f334-4849-9dfb-188c27b7fa6b.png",
    "/lovable-uploads/5ff76e65-4dac-42fd-bf80-053c0f23437a.png"
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
            Conheça a Clínica Faz de Conta, o nosso espaço em prol do desenvolvimento infanto-juvenil.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="border-none shadow-lg cursor-pointer hover:opacity-90 transition-opacity">
                      <CardContent className="p-0">
                        <img
                          src={image}
                          alt={`Estrutura ${index + 1}`}
                          className="w-full h-[400px] object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
                    <img
                      src={image}
                      alt={`Estrutura ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
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