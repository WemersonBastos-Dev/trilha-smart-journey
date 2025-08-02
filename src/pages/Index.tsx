import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Target,
  Star,
  ChevronRight,
  Award,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: "Trilhas Personalizadas",
      description: "Crie trilhas de aprendizagem baseadas na BNCC que se adaptam ao ritmo de cada aluno"
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento Inteligente", 
      description: "Monitore o progresso em tempo real com relatórios detalhados e sugestões de IA"
    },
    {
      icon: Award,
      title: "Gamificação Educativa",
      description: "Motive os alunos com sistema de pontos, medalhas e conquistas personalizadas"
    },
    {
      icon: BookOpen,
      title: "Baseado na BNCC",
      description: "Todas as atividades são alinhadas com as competências da Base Nacional Comum Curricular"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mb-8">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              TrilhaSmart
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Plataforma educacional inteligente para criar e acompanhar 
            <span className="font-semibold text-foreground"> trilhas de aprendizagem personalizadas</span> 
            baseadas na BNCC
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
            >
              Começar Agora
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 hover:bg-muted"
            >
              Conheça a Plataforma
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src={heroImage} 
            alt="Estudantes e professores colaborando com trilhas de aprendizagem digitais"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme a Educação na Sua Escola
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de educadores que já estão revolucionando 
            o ensino com trilhas de aprendizagem inteligentes e personalizadas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3 bg-white/10 rounded-lg px-6 py-4">
              <Users className="w-8 h-8" />
              <div className="text-left">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Professores</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-lg px-6 py-4">
              <Star className="w-8 h-8" />
              <div className="text-left">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm text-white/80">Alunos Ativos</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-lg px-6 py-4">
              <BookOpen className="w-8 h-8" />
              <div className="text-left">
                <div className="text-2xl font-bold">1.2K+</div>
                <div className="text-sm text-white/80">Trilhas Criadas</div>
              </div>
            </div>
          </div>

          <Button 
            size="lg"
            variant="secondary"
            onClick={() => navigate("/login")}
            className="mt-8 bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
          >
            Experimente Gratuitamente
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
