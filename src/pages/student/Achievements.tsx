import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Star, 
  Target, 
  Zap,
  Award,
  Medal,
  Crown,
  Gem
} from "lucide-react";
import StudentLayout from "@/components/layout/StudentLayout";

const StudentAchievements = () => {
  const playerStats = {
    totalPontos: 1250,
    medalhasDesbloqueadas: 8,
    medalhasTotal: 15,
    nivelAtual: "Intermediário",
    proximoNivel: "Avançado",
    progressoNivel: 65,
    sequenciaDias: 5,
    melhorSequencia: 12
  };

  const medalhas = [
    {
      id: 1,
      nome: "Primeira Conquista",
      descricao: "Complete sua primeira atividade",
      icone: "🏆",
      categoria: "Iniciante",
      desbloqueada: true,
      dataConquista: "2024-01-15",
      pontos: 50,
      raridade: "Comum"
    },
    {
      id: 2,
      nome: "Expert em Frações",
      descricao: "Complete a trilha de frações com 90% ou mais",
      icone: "🧮",
      categoria: "Matemática",
      desbloqueada: false,
      dataConquista: null,
      pontos: 200,
      raridade: "Raro",
      progresso: 42
    },
    {
      id: 3,
      nome: "Sequência de Fogo",
      descricao: "Estude por 7 dias consecutivos",
      icone: "🔥",
      categoria: "Disciplina",
      desbloqueada: false,
      dataConquista: null,
      pontos: 150,
      raridade: "Incomum",
      progresso: 71
    },
    {
      id: 4,
      nome: "Quiz Master",
      descricao: "Acerte 10 quizzes seguidos",
      icone: "🎯",
      categoria: "Quiz",
      desbloqueada: true,
      dataConquista: "2024-01-18",
      pontos: 100,
      raridade: "Comum"
    },
    {
      id: 5,
      nome: "Velocidade da Luz",
      descricao: "Complete uma atividade em menos de 2 minutos",
      icone: "⚡",
      categoria: "Velocidade",
      desbloqueada: true,
      dataConquista: "2024-01-16",
      pontos: 75,
      raridade: "Comum"
    },
    {
      id: 6,
      nome: "Perfeccionista",
      descricao: "Obtenha 100% em 5 atividades diferentes",
      icone: "💎",
      categoria: "Excelência",
      desbloqueada: false,
      dataConquista: null,
      pontos: 300,
      raridade: "Épico",
      progresso: 60
    },
    {
      id: 7,
      nome: "Explorador",
      descricao: "Complete atividades de 3 matérias diferentes",
      icone: "🗺️",
      categoria: "Diversidade",
      desbloqueada: true,
      dataConquista: "2024-01-20",
      pontos: 125,
      raridade: "Incomum"
    },
    {
      id: 8,
      nome: "Colaborador",
      descricao: "Ajude 3 colegas com dúvidas",
      icone: "🤝",
      categoria: "Social",
      desbloqueada: false,
      dataConquista: null,
      pontos: 100,
      raridade: "Comum",
      progresso: 33
    }
  ];

  const ranking = [
    { posicao: 1, nome: "Carlos Silva", pontos: 1480, nivel: "Avançado" },
    { posicao: 2, nome: "Maria Santos", pontos: 1350, nivel: "Intermediário" },
    { posicao: 3, nome: "Ana Silva", pontos: 1250, nivel: "Intermediário", isCurrentUser: true },
    { posicao: 4, nome: "João Pedro", pontos: 1180, nivel: "Intermediário" },
    { posicao: 5, nome: "Beatriz Lima", pontos: 1120, nivel: "Intermediário" }
  ];

  const getRaridadeColor = (raridade: string) => {
    switch (raridade) {
      case "Comum": return "bg-gray-100 text-gray-800 border-gray-200";
      case "Incomum": return "bg-green-100 text-green-800 border-green-200";
      case "Raro": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Épico": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Lendário": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const medalhasDesbloqueadas = medalhas.filter(m => m.desbloqueada);
  const medalhasBloqueadas = medalhas.filter(m => !m.desbloqueada);

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-accent via-secondary to-warning rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Suas Conquistas</h1>
              <p className="text-white/90 text-lg">
                Acompanhe todas as suas medalhas e progresso
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">{playerStats.medalhasDesbloqueadas}</div>
                <p className="text-sm text-white/90">Medalhas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{playerStats.totalPontos.toLocaleString()}</div>
                <p className="text-sm text-white/90">Pontos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Estatísticas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                Seu Progresso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Nível Atual</span>
                  <Badge>{playerStats.nivelAtual}</Badge>
                </div>
                <Progress value={playerStats.progressoNivel} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {playerStats.progressoNivel}% para {playerStats.proximoNivel}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Medalhas Desbloqueadas</span>
                  <span className="font-bold">
                    {playerStats.medalhasDesbloqueadas}/{playerStats.medalhasTotal}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sequência Atual</span>
                  <span className="font-bold">{playerStats.sequenciaDias} dias</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Melhor Sequência</span>
                  <span className="font-bold">{playerStats.melhorSequencia} dias</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pontos Totais</span>
                  <span className="font-bold">{playerStats.totalPontos.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conquistas */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="desbloqueadas" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="desbloqueadas">
                  Conquistadas ({medalhasDesbloqueadas.length})
                </TabsTrigger>
                <TabsTrigger value="bloqueadas">
                  Em Progresso ({medalhasBloqueadas.length})
                </TabsTrigger>
                <TabsTrigger value="ranking">Ranking da Turma</TabsTrigger>
              </TabsList>

              <TabsContent value="desbloqueadas" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {medalhasDesbloqueadas.map((medalha) => (
                    <Card key={medalha.id} className="hover:shadow-lg transition-all duration-300 border-2 border-success/20">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="text-3xl">{medalha.icone}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm">{medalha.nome}</h3>
                            <p className="text-xs text-muted-foreground mb-2">
                              {medalha.descricao}
                            </p>
                            <div className="flex items-center justify-between">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getRaridadeColor(medalha.raridade)}`}
                              >
                                {medalha.raridade}
                              </Badge>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-warning fill-current" />
                                <span className="text-xs font-medium">{medalha.pontos}pts</span>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              Conquistada em {new Date(medalha.dataConquista!).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="bloqueadas" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {medalhasBloqueadas.map((medalha) => (
                    <Card key={medalha.id} className="hover:shadow-lg transition-all duration-300 opacity-75">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="text-3xl grayscale">{medalha.icone}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm text-muted-foreground">{medalha.nome}</h3>
                            <p className="text-xs text-muted-foreground mb-2">
                              {medalha.descricao}
                            </p>
                            {medalha.progresso && (
                              <div className="mb-2">
                                <Progress value={medalha.progresso} className="h-1.5" />
                                <p className="text-xs text-muted-foreground mt-1">
                                  {medalha.progresso}% completo
                                </p>
                              </div>
                            )}
                            <div className="flex items-center justify-between">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getRaridadeColor(medalha.raridade)}`}
                              >
                                {medalha.raridade}
                              </Badge>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{medalha.pontos}pts</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ranking" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Crown className="w-5 h-5" />
                      Ranking da Turma 6º A
                    </CardTitle>
                    <CardDescription>Veja como você está comparado aos seus colegas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {ranking.map((estudante) => (
                        <div 
                          key={estudante.posicao}
                          className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                            estudante.isCurrentUser 
                              ? 'bg-primary/10 border-2 border-primary/30' 
                              : 'bg-muted hover:bg-muted/80'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                              estudante.posicao === 1 ? 'bg-yellow-500 text-white' :
                              estudante.posicao === 2 ? 'bg-gray-400 text-white' :
                              estudante.posicao === 3 ? 'bg-orange-500 text-white' :
                              'bg-muted-foreground text-white'
                            }`}>
                              {estudante.posicao}
                            </div>
                            <div>
                              <p className={`font-medium ${estudante.isCurrentUser ? 'text-primary' : ''}`}>
                                {estudante.nome} {estudante.isCurrentUser && '(Você)'}
                              </p>
                              <p className="text-sm text-muted-foreground">{estudante.nivel}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{estudante.pontos.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">pontos</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentAchievements;