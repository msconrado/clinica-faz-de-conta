import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

const Scheduling = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [service, setService] = useState<string>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const availableTimes = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const services = [
    "Fisioterapia Ortopédica",
    "Fisioterapia Neurológica",
    "Fisioterapia Respiratória",
    "Fisioterapia Pediátrica",
    "Pilates",
  ];

  const sendWhatsAppMessage = async (phoneNumber: string) => {
    // Remove caracteres não numéricos do telefone
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    
    // Formata a data para exibição
    const formattedDate = date ? format(date, "dd/MM/yyyy") : "";
    
    // Monta a mensagem
    const message = `Olá ${name}! Seu agendamento foi confirmado para ${formattedDate} às ${time}. Serviço: ${service}. Aguardamos você! - Clínica Faz de Conta`;
    
    // URL do WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(message)}`;
    
    // Abre o WhatsApp em uma nova janela
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !service || !name || !phone) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    try {
      // Envia a mensagem do WhatsApp
      await sendWhatsAppMessage(phone);
      
      toast.success("Agendamento realizado com sucesso! Verifique seu WhatsApp.");
      
      // Limpa o formulário
      setDate(undefined);
      setTime(undefined);
      setService(undefined);
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast.error("Erro ao enviar mensagem de confirmação. Por favor, tente novamente.");
    }
  };

  return (
    <section id="scheduling" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Agende sua Consulta
          </h2>
          <p className="text-lg text-neutral-dark">
            Escolha a data e horário que melhor se adequam à sua agenda
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome completo"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefone
              </label>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(00) 00000-0000"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Serviço
              </label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data
              </label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={ptBR}
                className="rounded-md border"
                disabled={(date) => date < new Date() || date.getDay() === 0}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horário
              </label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o horário" />
                </SelectTrigger>
                <SelectContent>
                  {availableTimes.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Agendar Consulta
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Scheduling;