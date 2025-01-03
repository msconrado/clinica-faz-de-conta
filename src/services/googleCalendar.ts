import { format } from "date-fns";

export const addToGoogleCalendar = (
  name: string,
  service: string,
  date: Date,
  time: string
) => {
  const eventTitle = `Consulta: ${name} - ${service}`;
  const [hours, minutes] = time.split(":");
  
  const startDate = new Date(date);
  startDate.setHours(parseInt(hours), parseInt(minutes), 0);
  
  const endDate = new Date(startDate);
  endDate.setHours(startDate.getHours() + 1);
  
  const formattedStart = format(startDate, "yyyyMMdd'T'HHmmss");
  const formattedEnd = format(endDate, "yyyyMMdd'T'HHmmss");
  
  const location = "Rua Safira, Nº 370, Bairro Prado, Belo Horizonte/MG";
  const details = `Paciente: ${name}\nServiço: ${service}\nData: ${format(date, "dd/MM/yyyy")}\nHorário: ${time}`;
  
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${formattedStart}/${formattedEnd}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  
  window.open(url, '_blank');
};