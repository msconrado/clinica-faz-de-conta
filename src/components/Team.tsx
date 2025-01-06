import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const team = [
    {
      name: "Dra. Mylena Tabelini",
      role: "Fisioterapeuta",
      position: "Responsável técnica",
      image: "https://source.unsplash.com/random/400x400/?therapist",
    },
    {
      name: "Dra. Eduarda",
      role: "Fisioterapeuta",
      image: "https://source.unsplash.com/random/400x400/?doctor",
    },
  ];

  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center">
          Conheça Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
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