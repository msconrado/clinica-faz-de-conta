import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Structure = () => {
  // Imagens placeholder para o carrossel
  const images = [
    "https://source.unsplash.com/random/800x600/?clinic",
    "https://source.unsplash.com/random/800x600/?hospital",
    "https://source.unsplash.com/random/800x600/?therapy",
  ];

  return (
    <section id="structure" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-blue/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center">
          Nossa Estrutura
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card>
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