import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  images: string[];
  selectedIndex: number;
  onNavigate: (direction: "prev" | "next") => void;
}

const ImageModal = ({
  isOpen,
  onOpenChange,
  images,
  selectedIndex,
  onNavigate,
}: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
        <DialogTitle className="sr-only">Galeria de Imagens</DialogTitle>
        <DialogDescription className="sr-only">
          Navegue pelas imagens usando as setas
        </DialogDescription>

        <Carousel
          className="w-full"
          opts={{
            startIndex: selectedIndex,
            loop: true,
            align: "center",
            containScroll: false,
            dragFree: false
          }}
        >
          <CarouselContent>
            {images.map((modalImage, modalIndex) => (
              <CarouselItem key={modalIndex} className="flex items-center justify-center">
                <img
                  src={modalImage}
                  alt={`Estrutura ${modalIndex + 1}`}
                  className="max-h-[80vh] w-auto object-contain"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate("prev");
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors duration-200"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate("next");
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors duration-200"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;