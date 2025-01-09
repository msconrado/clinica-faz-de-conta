import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      author: "Mariana Alves",
      rating: 5,
      text: "Excelente atendimento! A Dra. Mylena é uma profissional extremamente dedicada e competente. Minha filha adora as sessões.",
      date: "2 meses atrás"
    },
    {
      author: "Fernanda Costa",
      rating: 5,
      text: "Ambiente acolhedor e profissionais muito preparados. Recomendo!",
      date: "3 meses atrás"
    },
    {
      author: "Patricia Santos",
      rating: 5,
      text: "Clínica maravilhosa! Estrutura excelente e atendimento humanizado.",
      date: "1 mês atrás"
    }
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
                <div className="flex justify-between items-center">
                  <p className="text-primary-dark font-bold font-como">{review.author}</p>
                  <p className="text-neutral text-sm font-como">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;