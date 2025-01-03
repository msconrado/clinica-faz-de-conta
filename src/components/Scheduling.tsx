import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { format } from "date-fns";
import SchedulingForm from "./scheduling/SchedulingForm";
import { addToGoogleCalendar } from "@/services/googleCalendar";

const Scheduling = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [service, setService] = useState<string>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bookedSlots, setBookedSlots] = useState<{[key: string]: string[]}>({});

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

  const isTimeAvailable = (selectedTime: string) => {
    if (!date) return true;
    const dateKey = format(date, "yyyy-MM-dd");
    return !bookedSlots[dateKey]?.includes(selectedTime);
  };

  const getAvailableTimesForDate = () => {
    return availableTimes.filter(time => isTimeAvailable(time));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !service || !name || !phone) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    try {
      // Adiciona ao Google Calendar
      addToGoogleCalendar(name, service, date, time);
      
      // Atualiza slots ocupados
      const dateKey = format(date, "yyyy-MM-dd");
      const updatedBookings = {
        ...bookedSlots,
        [dateKey]: [...(bookedSlots[dateKey] || []), time]
      };
      setBookedSlots(updatedBookings);
      
      // Envia mensagem para WhatsApp da clínica
      const message = `Olá! Gostaria de agendar uma consulta para ${format(date, "dd/MM/yyyy")} às ${time}. Serviço: ${service}. Nome: ${name}`;
      const clinicPhone = "553198172503"; // Substitua pelo número da clínica
      const whatsappUrl = `https://wa.me/${clinicPhone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      
      toast.success("Solicitação de agendamento enviada! Aguarde a confirmação da clínica.");
      
      // Limpa o formulário
      setDate(undefined);
      setTime(undefined);
      setService(undefined);
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Erro ao agendar:", error);
      toast.error("Erro ao enviar agendamento. Por favor, tente novamente.");
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
          <SchedulingForm
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            service={service}
            setService={setService}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            availableTimes={getAvailableTimesForDate()}
            services={services}
          />

          <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white">
            Solicitar Agendamento
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Scheduling;
