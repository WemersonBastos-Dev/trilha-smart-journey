import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Play, 
  CheckCircle, 
  Lock, 
  Star,
  ArrowRight,
  Volume2,
  Brain,
  Trophy,
  Lightbulb
} from "lucide-react";
import StudentLayout from "@/components/layout/StudentLayout";

const StudentTrail = () => {
  const [etapaAtual, setEtapaAtual] = useState(3);

  const trilhaData = {
    nome: "Operações com Frações",
    nivel: "Intermediário",
    progresso: 42,
    pontosGanhos: 350,
    tempoGasto: "45 min"
  };

  const etapas = [
    { 
      id: 1, 
      tipo: "video", 
      titulo: "O que são Frações?", 
      descricao: "Introdução ao conceito de frações",
      duracao: "8 min",
      pontos: 50,
      status: "concluida",
      feedback: "Excelente! Você dominou o básico!"
    },
    { 
      id: 2, 
      tipo: "quiz", 
      titulo: "Quiz: Identificando Frações", 
      descricao: "Teste seus conhecimentos básicos",
      duracao: "5 min",
      pontos: 100,
      status: "concluida",
      feedback: "Muito bem! 8 de 10 acertos."
    },
    { 
      id: 3, 
      tipo: "game", 
      titulo: "Jogo: Pizza das Frações", 
      descricao: "Divida pizzas em frações corretas",
      duracao: "12 min",
      pontos: 150,
      status: "concluida",
      feedback: "Incrível! Você é um chef das frações!"
    },
    { 
      id: 4, 
      tipo: "video", 
      titulo: "Comparando Frações", 
      descricao: "Aprenda a comparar frações diferentes",
      duracao: "10 min",
      pontos: 50,
      status: "atual",
      feedback: null
    },
    { 
      id: 5, 
      tipo: "quiz", 
      titulo: "Quiz: Maior ou Menor?", 
      descricao: "Compare frações e ordene-as",
      duracao: "7 min",
      pontos: 100,
      status: "bloqueada",
      feedback: null
    },
    { 
      id: 6, 
      tipo: "challenge", 
      titulo: "Desafio: Mercado das Frações", 
      descricao: "Resolva problemas do dia a dia",
      duracao: "15 min",
      pontos: 200,
      status: "bloqueada",
      feedback: null
    },
    { 
      id: 7, 
      tipo: "quiz", 
      titulo: "Quiz Adaptativo: Operações", 
      descricao: "Quiz que se adapta ao seu nível",
      duracao: "10 min",
      pontos: 150,
      status: "bloqueada",
      feedback: null
    },
    { 
      id: 8, 
      tipo: "challenge", 
      titulo: "Projeto Final: Receita Matemática", 
      descricao: "Crie uma receita usando frações",
      duracao: "20 min",
      pontos: 300,
      status: "bloqueada",
      feedback: null
    }
  ];

  const getIconForType = (tipo: string) => {
    switch (tipo) {
      case "video": return { icon: Play, color: "bg-red-500" };
      case "quiz": return { icon: Brain, color: "bg-blue-500" };
      case "game": return { icon: Trophy, color: "bg-green-500" };
      case "challenge": return { icon: Star, color: "bg-purple-500" };
      default: return { icon: Play, color: "bg-gray-500" };
    }
  };

  const getStatusIcon = (status: string, index: number) => {
    if (status === "concluida") return <CheckCircle className="w-6 h-6 text-success" />;
    if (status === "atual") return <div className="w-6 h-6 bg-primary rounded-full animate-pulse flex items-center justify-center"><span className="text-xs text-white font-bold">{index + 1}</span></div>;
    return <Lock className="w-6 h-6 text-muted-foreground" />;
  };

  const proximaEtapa = () => {
    if (etapaAtual < etapas.length) {
      setEtapaAtual(etapaAtual + 1);
    }
  };

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Header da Trilha */}
        <div className="bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{trilhaData.nome}</h1>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {trilhaData.nivel}
                </Badge>
                <span className="text-white/90">⭐ {trilhaData.pontosGanhos} pontos ganhos</span>
                <span className="text-white/90">⏱️ {trilhaData.tempoGasto}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold mb-1">{trilhaData.progresso}%</div>
              <Progress value={trilhaData.progresso} className="w-32 h-2 bg-white/20" />
            </div>
          </div>
        </div>

        {/* Feedback da IA */}
        <Alert className="border-blue-200 bg-blue-50">
          <Lightbulb className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Dica da IA:</strong> Você está indo muito bem! Notei que você aprende melhor com atividades visuais. 
            A próxima etapa tem um vídeo interativo perfeito para seu estilo de aprendizagem.
          </AlertDescription>
        </Alert>

        {/* Mapa da Jornada */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              Sua Jornada de Aprendizagem
            </CardTitle>
            <CardDescription>Acompanhe seu progresso através das etapas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {etapas.map((etapa, index) => {
                const { icon: Icon, color } = getIconForType(etapa.tipo);
                const isAccessible = etapa.status !== "bloqueada";
                const isCurrent = etapa.status === "atual";
                
                return (
                  <div 
                    key={etapa.id}
                    className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 ${
                      isCurrent 
                        ? 'border-primary bg-primary/5 shadow-lg' 
                        : isAccessible 
                        ? 'border-border bg-card hover:shadow-md' 
                        : 'border-border bg-muted/50 opacity-60'
                    }`}
                  >
                    {/* Status Icon */}
                    <div className="flex-shrink-0">
                      {getStatusIcon(etapa.status, index)}
                    </div>

                    {/* Connector Line */}
                    {index < etapas.length - 1 && (
                      <div className={`absolute left-[38px] mt-12 w-0.5 h-8 ${
                        etapa.status === "concluida" ? 'bg-success' : 'bg-muted'
                      }`} />
                    )}

                    {/* Activity Icon */}
                    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold ${!isAccessible ? 'text-muted-foreground' : ''}`}>
                        {etapa.titulo}
                      </h3>
                      <p className={`text-sm ${!isAccessible ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
                        {etapa.descricao}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-muted-foreground">⏱️ {etapa.duracao}</span>
                        <span className="text-xs text-muted-foreground">⭐ {etapa.pontos} pontos</span>
                      </div>
                      
                      {/* Feedback */}
                      {etapa.feedback && (
                        <div className="mt-2 p-2 bg-success-light rounded-md">
                          <p className="text-xs text-success-foreground">✓ {etapa.feedback}</p>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="flex-shrink-0">
                      {etapa.status === "concluida" && (
                        <Button size="sm" variant="outline" disabled>
                          Concluída
                        </Button>
                      )}
                      {etapa.status === "atual" && (
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300"
                          onClick={proximaEtapa}
                        >
                          Começar
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      )}
                      {etapa.status === "bloqueada" && (
                        <Button size="sm" variant="ghost" disabled>
                          <Lock className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Atividade em Destaque */}
        {etapas.find(e => e.status === "atual") && (
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5 text-primary" />
                Atividade Atual: {etapas.find(e => e.status === "atual")?.titulo}
              </CardTitle>
              <CardDescription>Continue sua jornada de aprendizagem</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm mb-3">
                  {etapas.find(e => e.status === "atual")?.descricao}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      ⏱️ Tempo estimado: {etapas.find(e => e.status === "atual")?.duracao}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ⭐ {etapas.find(e => e.status === "atual")?.pontos} pontos
                    </span>
                  </div>
                  <Button className="bg-gradient-to-r from-primary to-accent">
                    <Volume2 className="w-4 h-4 mr-2" />
                    Assistir Vídeo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </StudentLayout>
  );
};

export default StudentTrail;