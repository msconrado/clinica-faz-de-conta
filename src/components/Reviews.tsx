const Reviews = () => {
  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-blue/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center uppercase">
          NOSSA LOCALIZAÇÃO
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.965086475418!2d-43.96618062398341!3d-19.925876038181674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6977ca36cf489%3A0xb5efa1bd4be4eff0!2sCl%C3%ADnica%20Faz%20de%20Conta!5e0!3m2!1spt-BR!2sus!4v1736452018652!5m2!1spt-BR!2sus"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '0.5rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-lg max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;