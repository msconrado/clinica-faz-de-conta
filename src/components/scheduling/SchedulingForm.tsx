import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";

interface SchedulingFormProps {
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  service: string | undefined;
  setService: (service: string) => void;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  time: string | undefined;
  setTime: (time: string) => void;
  availableTimes: string[];
  services: string[];
}

const SchedulingForm = ({
  name,
  setName,
  phone,
  setPhone,
  service,
  setService,
  date,
  setDate,
  time,
  setTime,
  availableTimes,
  services,
}: SchedulingFormProps) => {
  return (
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
          className="w-full bg-white border-gray-300"
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
          className="w-full bg-white border-gray-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Serviço
        </label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className="bg-white border-gray-300">
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
          className="rounded-md border bg-white"
          disabled={(date) => date < new Date() || date.getDay() === 0}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Horário
        </label>
        <Select value={time} onValueChange={setTime}>
          <SelectTrigger className="bg-white border-gray-300">
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
  );
};

export default SchedulingForm;