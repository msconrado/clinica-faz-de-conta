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
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Structure = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        {/* Carrossel Principal */}
        <Carousel
          className="w-full max-w-4xl mx-auto"
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Dialog open={isModalOpen && selectedImageIndex === index} onOpenChange={(open) => {
                  setIsModalOpen(open);
                  if (open) setSelectedImageIndex(index);
                }}>
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

                  {/* Modal com Carrossel */}
                  <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
                    <DialogTitle className="sr-only">Galeria de Imagens</DialogTitle>
                    <DialogDescription className="sr-only">
                      Navegue pelas imagens usando as setas
                    </DialogDescription>
                    
                    <Carousel
                      className="w-full"
                      defaultIndex={selectedImageIndex}
                      onSelect={(index) => setSelectedImageIndex(index)}
                    >
                      <CarouselContent>
                        {images.map((modalImage, modalIndex) => (
                          <CarouselItem key={modalIndex} className="flex items-center justify-center">
                            <img
                              src={modalImage}
                              alt={`Estrutura ${modalIndex + 1}`}
                              className="max-h-[80vh] object-contain"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors duration-200"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors duration-200"
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </Carousel>
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