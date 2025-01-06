import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const team = [
    {
      name: "Dra. Mylena Tabelini",
      role: "Fisioterapeuta",
      position: "Responsável técnica",
      image: "/lovable-uploads/352624de-41cb-4fad-8575-694ce529900a.png",
    }
  ];

  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center uppercase">
          CONHEÇA NOSSA EQUIPE
        </h2>
        <div className="flex justify-center">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden bg-transparent border-none shadow-none max-w-md">
              <CardContent className="p-0 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary-dark mb-2 font-hoss">
                    {member.name}
                  </h3>
                  <p className="text-neutral-dark font-como">{member.role}</p>
                  {member.position && (
                    <p className="text-neutral-dark font-como">{member.position}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;