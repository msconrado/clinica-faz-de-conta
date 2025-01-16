import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

interface ImageCarouselProps {
  images: string[];
  onImageClick: (index: number) => void;
}

const ImageCarousel = ({ images, onImageClick }: ImageCarouselProps) => {
  return (
    <Carousel
      className="w-full max-w-4xl mx-auto"
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        loop: true,
        dragFree: false,
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card 
              className="border-none shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onImageClick(index)}
            >
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
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default ImageCarousel;