import { useState } from "react";
import IntroText from "./structure/IntroText";
import ImageCarousel from "./structure/ImageCarousel";
import ImageModal from "./structure/ImageModal";

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

  const handleNavigate = (direction: "prev" | "next") => {
    setSelectedImageIndex((prev) => {
      if (direction === "prev") {
        return prev > 0 ? prev - 1 : images.length - 1;
      } else {
        return prev < images.length - 1 ? prev + 1 : 0;
      }
    });
  };

  return (
    <section id="structure" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center uppercase">
          NOSSA ESTRUTURA
        </h2>
        
        <IntroText />

        <ImageCarousel 
          images={images}
          onImageClick={(index) => {
            setSelectedImageIndex(index);
            setIsModalOpen(true);
          }}
        />

        <ImageModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          images={images}
          selectedIndex={selectedImageIndex}
          onNavigate={handleNavigate}
        />
      </div>
    </section>
  );
};

export default Structure;