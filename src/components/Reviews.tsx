import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  // Placeholder data - replace with actual Google Maps reviews
  const reviews = [
    {
      author: "Cliente Exemplo",
      rating: 5,
      text: "Excelente atendimento! Profissionais muito dedicados.",
    },
    // Add more reviews as needed
  ];

  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-blue/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center uppercase">
          O QUE NOSSOS CLIENTES FALAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-dark mb-4 font-como">{review.text}</p>
                <p className="text-primary-dark font-bold font-como">{review.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;