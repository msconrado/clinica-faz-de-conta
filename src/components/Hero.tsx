import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="animate-float absolute top-10 left-10">
              <div className="w-3 h-3 bg-accent-yellow rounded-full" />
            </div>
            <div className="animate-float absolute top-20 right-20">
              <div className="w-4 h-4 bg-accent-pink rounded-full" />
            </div>
            <div className="animate-float absolute bottom-10 left-1/4">
              <div className="w-3 h-3 bg-accent-orange rounded-full" />
            </div>
          </div>

          <div className="text-center">
            <img
              src="/lovable-uploads/65e9e25a-023c-4f0a-b28c-0b69fd40577f.png"
              alt="Faz de Conta Logo"
              className="mx-auto mb-8 w-64 sm:w-96"
            />
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-dark mb-6">
              Clínica de Desenvolvimento Infantil
            </h1>
            <p className="text-lg sm:text-xl text-neutral-dark mb-8 max-w-2xl mx-auto">
              Cuidando do desenvolvimento do seu filho com carinho e profissionalismo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6"
                onClick={() => window.location.href = "#contact"}
              >
                Agende uma Consulta
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
                onClick={() => window.location.href = "#services"}
              >
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;