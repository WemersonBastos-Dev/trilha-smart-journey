import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Play, 
  Star, 
  Target,
  Book,
  Zap,
  Award,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StudentLayout from "@/components/layout/StudentLayout";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const studentData = {
    nome: "Ana Silva",
    nivel: "Intermediário",
    pontos: 1250,
    medalhas: 8,
    sequencia: 5
  };

  const trilhaAtiva = {
    nome: "Operações com Frações",
    progresso: 42,
    proximaAtividade: "Quiz: Comparando Frações",
    tempoEstimado: "15 min",
    etapasCompletas: 3,
    etapasTotal: 8
  };

  const conquistas = [
    { nome: "Primeira Medalha", icone: "🏆", desbloqueada: true },
    { nome: "Sequência de 5 dias", icone: "🔥", desbloqueada: true },
    { nome: "Expert em Frações", icone: "🧮", desbloqueada: false },
    { nome: "Quiz Master", icone: "🎯", desbloqueada: true }
  ];

  const atividadesRecentes = [
    { nome: "Vídeo: Introdução às Frações", tipo: "video", pontos: 50, concluida: true },
    { nome: "Quiz: Frações Básicas", tipo: "quiz", pontos: 100, concluida: true },
    { nome: "Desafio: Pizza das Frações", tipo: "game", pontos: 150, concluida: true }
  ];

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Saudação Personalizada */}
        <div className="bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Olá, {studentData.nome}! 👋</h1>
              <p className="text-white/90 text-lg">
                Pronto para continuar sua jornada de aprendizagem?
              </p>
              <div className="flex items-center gap-4 mt-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  Nível {studentData.nivel}
                </Badge>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  <span>{studentData.pontos} pontos</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-1">
                  <Trophy className="w-6 h-6" />
                </div>
                <p className="text-sm">{studentData.medalhas} medalhas</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-1">
                  <Target className="w-6 h-6" />
                </div>
                <p className="text-sm">{studentData.sequencia} dias seguidos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Trilha Ativa */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  Minha Trilha Atual
                </CardTitle>
                <CardDescription>Continue de onde parou</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{trilhaAtiva.nome}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Progresso geral
                      </span>
                      <span className="text-sm font-medium">
                        {trilhaAtiva.etapasCompletas}/{trilhaAtiva.etapasTotal} etapas
                      </span>
                    </div>
                    <Progress value={trilhaAtiva.progresso} className="h-3" />
                    <p className="text-sm text-muted-foreground">
                      {trilhaAtiva.progresso}% concluído
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Próxima Atividade:</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {trilhaAtiva.proximaAtividade}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      ⏱️ {trilhaAtiva.tempoEstimado}
                    </span>
                    <Button 
                      onClick={() => navigate("/student/trail")}
                      className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Continuar Trilha
                    </Button>
                  </div>
                </div>

                {/* Mapa da Jornada Preview */}
                <div className="space-y-3">
                  <h4 className="font-medium">Jornada da Trilha:</h4>
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {Array.from({ length: trilhaAtiva.etapasTotal }, (_, i) => (
                      <div key={i} className="flex items-center gap-2 flex-shrink-0">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            i < trilhaAtiva.etapasCompletas 
                              ? 'bg-success text-success-foreground' 
                              : i === trilhaAtiva.etapasCompletas
                              ? 'bg-primary text-primary-foreground animate-pulse'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {i < trilhaAtiva.etapasCompletas ? '✓' : i + 1}
                        </div>
                        {i < trilhaAtiva.etapasTotal - 1 && (
                          <div className={`w-6 h-0.5 ${
                            i < trilhaAtiva.etapasCompletas - 1 ? 'bg-success' : 'bg-muted'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conquistas */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Conquistas
                </CardTitle>
                <CardDescription>Suas medalhas e troféus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {conquistas.map((conquista, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-2 rounded-lg transition-all ${
                      conquista.desbloqueada 
                        ? 'bg-success-light hover:bg-success-light/80' 
                        : 'bg-muted opacity-60'
                    }`}
                  >
                    <div className="text-2xl">{conquista.icone}</div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${
                        conquista.desbloqueada ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {conquista.nome}
                      </p>
                    </div>
                    {conquista.desbloqueada && (
                      <Star className="w-4 h-4 text-warning fill-current" />
                    )}
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  className="w-full mt-3"
                  onClick={() => navigate("/student/achievements")}
                >
                  Ver Todas as Conquistas
                </Button>
              </CardContent>
            </Card>

            {/* Estatísticas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Seu Progresso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pontos Totais</span>
                  <span className="font-bold">{studentData.pontos.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sequência Atual</span>
                  <span className="font-bold">{studentData.sequencia} dias</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Medalhas</span>
                  <span className="font-bold">{studentData.medalhas}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Nível</span>
                  <Badge>{studentData.nivel}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Atividades Recentes */}
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>Suas últimas conquistas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {atividadesRecentes.map((atividade, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      atividade.tipo === 'video' ? 'bg-red-100 text-red-600' :
                      atividade.tipo === 'quiz' ? 'bg-blue-100 text-blue-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {atividade.tipo === 'video' && '▶️'}
                      {atividade.tipo === 'quiz' && '❓'}
                      {atividade.tipo === 'game' && '🎮'}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{atividade.nome}</p>
                      <p className="text-xs text-muted-foreground">
                        +{atividade.pontos} pontos
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Concluída ✓
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;