import LinkTree from "./LinkTree";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <img
          src="/lovable-uploads/73603ab0-7e58-4602-aff0-f654a4fe2b8d.png"
          alt="Faz de Conta Logo"
          className="w-48 h-48 mx-auto mb-8"
        />
        <LinkTree />
      </div>
    </section>
  );
};

export default Hero;