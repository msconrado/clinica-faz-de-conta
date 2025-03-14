import { Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
    const handleMapClick = () => {
        window.open('https://maps.app.goo.gl/r7Z3iuuS248cmyY59', '_blank');
    };

    return (
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4 font-hoss uppercase">ENTRE EM CONTATO</h2>
                    <p className="text-lg text-neutral-dark max-w-2xl mx-auto font-como">Estamos aqui para ajudar no desenvolvimento do seu filho</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <MessageCircle className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-dark mb-2 font-hoss">WhatsApp</h3>
                        <a
                            href="https://whatsapp.faleconosco.chat/redirect/d99778db0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-dark hover:text-primary transition-colors font-como">
                            (31) 99530-0370
                        </a>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-dark mb-2 font-hoss">E-mail</h3>
                        <a href="mailto:clinicafazdeconta@gmail.com" className="text-neutral-dark hover:text-primary transition-colors font-como">
                            clinicafazdeconta@gmail.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-dark mb-2 font-hoss">Endereço</h3>
                        <address
                            className="text-neutral-dark text-center not-italic font-como cursor-pointer hover:text-primary transition-colors"
                            onClick={() => handleMapClick()}>
                            Rua Safira, Nº 370, Bairro Prado
                            <br />
                            Belo Horizonte/MG, CEP 30.411.127
                        </address>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
