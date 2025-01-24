import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "A Importância do Brincar no Desenvolvimento Infantil",
    excerpt: "Descubra como as brincadeiras contribuem para o desenvolvimento cognitivo, motor e social das crianças.",
    date: "23/01/2024",
    category: "Desenvolvimento Infantil"
  },
  {
    id: 2,
    title: "Sinais de Alerta no Desenvolvimento da Fala",
    excerpt: "Aprenda a identificar os principais sinais que podem indicar atrasos no desenvolvimento da fala.",
    date: "22/01/2024",
    category: "Fonoaudiologia"
  },
  {
    id: 3,
    title: "Exercícios Respiratórios para Crianças",
    excerpt: "Conheça exercícios simples que podem ajudar na respiração do seu filho.",
    date: "21/01/2024",
    category: "Fisioterapia Respiratória"
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold text-primary">Blog Faz de Conta</h1>
        </div>

        <input
          type="text"
          placeholder="Pesquisar artigos..."
          className="w-full max-w-md px-4 py-2 mb-8 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {post.date} • {post.category}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <Button variant="link" className="mt-4 p-0">
                  Ler mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;