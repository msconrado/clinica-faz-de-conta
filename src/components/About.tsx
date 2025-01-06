import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center">
          Sobre Nós
        </h2>
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <p className="text-lg text-neutral-dark font-como">
              {/* Campo editável para o texto sobre a clínica */}
              Nossa clínica é especializada no desenvolvimento infantil, oferecendo atendimento personalizado e multidisciplinar para cada paciente.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;