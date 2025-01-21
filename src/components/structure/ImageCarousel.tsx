import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
  onImageClick: (index: number) => void;
}

const ImageCarousel = ({ images, onImageClick }: ImageCarouselProps) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
        className="w-full touch-pan-y"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div 
                className="relative aspect-square"
                onClick={() => onImageClick(index)}
              >
                <img
                  src={image}
                  alt={`Estrutura ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  loading="lazy"
                />
              </div>
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