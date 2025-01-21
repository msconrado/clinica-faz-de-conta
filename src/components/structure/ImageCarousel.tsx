import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface ImageCarouselProps {
  images: string[];
  onImageClick: (index: number) => void;
}

const ImageCarousel = ({ images, onImageClick }: ImageCarouselProps) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel
        opts={{
          loop: true,
          align: "center",
          containScroll: false,
          dragFree: false
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
              <Card 
                className="border-none shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => onImageClick(index)}
              >
                <CardContent className="p-0">
                  <img
                    src={image}
                    alt={`Estrutura ${index + 1}`}
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2">
          <CarouselPrevious className="hidden md:flex" />
        </div>
        <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2">
          <CarouselNext className="hidden md:flex" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;