import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Download, 
  TrendingUp, 
  TrendingDown,
  Users,
  Target,
  Brain,
  FileSpreadsheet
} from "lucide-react";
import TeacherLayout from "@/components/layout/TeacherLayout";

const Reports = () => {
  const mockDesempenhoAlunos = [
    { nome: "Ana Silva", turma: "6º A", progresso: 85, status: "Excelente", tendencia: "up" },
    { nome: "Carlos Santos", turma: "6º A", progresso: 72, status: "Bom", tendencia: "up" },
    { nome: "Maria Oliveira", turma: "6º B", progresso: 45, status: "Atenção", tendencia: "down" },
    { nome: "João Pedro", turma: "6º B", progresso: 38, status: "Risco", tendencia: "down" },
    { nome: "Beatriz Lima", turma: "7º A", progresso: 91, status: "Excelente", tendencia: "up" }
  ];

  const mockHabilidades = [
    { codigo: "EF06MA01", nome: "Números Naturais e Racionais", progresso: 78, dificuldade: "Média" },
    { codigo: "EF06MA08", nome: "Frações e Decimais", progresso: 65, dificuldade: "Alta" },
    { codigo: "EF06MA03", nome: "Cálculos e Problemas", progresso: 82, dificuldade: "Baixa" },
    { codigo: "EF06MA13", nome: "Geometria Básica", progresso: 71, dificuldade: "Média" }
  ];

  const mockSugestoes = [
    {
      aluno: "Maria Oliveira",
      tipo: "Reforço",
      sugestao: "Recomenda-se atividades extras em frações. Sugere-se usar materiais manipuláveis como pizza de frações.",
      prioridade: "Alta"
    },
    {
      aluno: "João Pedro", 
      tipo: "Intervenção",
      sugestao: "Aluno apresenta dificuldades básicas em operações. Indicado retomar conceitos fundamentais de adição e subtração.",
      prioridade: "Crítica"
    },
    {
      aluno: "6º B - Geral",
      tipo: "Metodologia",
      sugestao: "Turma responde melhor a atividades gamificadas. Implementar mais jogos matemáticos nas próximas aulas.",
      prioridade: "Média"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excelente": return "bg-success text-success-foreground";
      case "Bom": return "bg-primary text-primary-foreground";
      case "Atenção": return "bg-warning text-warning-foreground";
      case "Risco": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case "Crítica": return "bg-destructive text-destructive-foreground";
      case "Alta": return "bg-warning text-warning-foreground";
      case "Média": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <TeacherLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Relatórios e Analytics</h1>
            <p className="text-muted-foreground">Acompanhe o desempenho dos seus alunos</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              Exportar Excel
            </Button>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Relatório PDF
            </Button>
          </div>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Média Geral</CardTitle>
              <BarChart3 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75.2%</div>
              <p className="text-xs text-muted-foreground">+5.2% desde o mês passado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alunos Concluindo</CardTitle>
              <Users className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68</div>
              <p className="text-xs text-muted-foreground">de 83 alunos (82%)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Habilidades Dominadas</CardTitle>
              <Target className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">74%</div>
              <p className="text-xs text-muted-foreground">BNCC EF06MA</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sugestões IA</CardTitle>
              <Brain className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Intervenções sugeridas</p>
            </CardContent>
          </Card>
        </div>

        {/* Relatórios Detalhados */}
        <Tabs defaultValue="alunos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="alunos">Desempenho por Aluno</TabsTrigger>
            <TabsTrigger value="habilidades">Progresso por Habilidade</TabsTrigger>
            <TabsTrigger value="sugestoes">Sugestões de IA</TabsTrigger>
          </TabsList>

          <TabsContent value="alunos" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Desempenho Individual dos Alunos</CardTitle>
                <CardDescription>Acompanhe o progresso de cada estudante</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockDesempenhoAlunos.map((aluno, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="space-y-1">
                          <p className="font-medium">{aluno.nome}</p>
                          <p className="text-sm text-muted-foreground">{aluno.turma}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right min-w-[120px]">
                          <Progress value={aluno.progresso} className="w-full h-2 mb-1" />
                          <p className="text-sm">{aluno.progresso}% concluído</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(aluno.status)}>
                            {aluno.status}
                          </Badge>
                          {aluno.tendencia === "up" ? (
                            <TrendingUp className="w-4 h-4 text-success" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-destructive" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="habilidades" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Progresso por Habilidade BNCC</CardTitle>
                <CardDescription>Análise detalhada do domínio das competências</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockHabilidades.map((habilidade, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{habilidade.codigo}</p>
                          <p className="text-sm text-muted-foreground">{habilidade.nome}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">
                            Dificuldade {habilidade.dificuldade}
                          </Badge>
                          <span className="text-sm font-medium">{habilidade.progresso}%</span>
                        </div>
                      </div>
                      <Progress value={habilidade.progresso} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sugestoes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Sugestões de Intervenção Geradas por IA
                </CardTitle>
                <CardDescription>Recomendações personalizadas para melhorar o aprendizado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSugestoes.map((sugestao, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{sugestao.aluno}</p>
                          <Badge variant="outline" className="mt-1">{sugestao.tipo}</Badge>
                        </div>
                        <Badge className={getPrioridadeColor(sugestao.prioridade)}>
                          {sugestao.prioridade}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {sugestao.sugestao}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Aplicar Sugestão
                        </Button>
                        <Button size="sm" variant="ghost">
                          Marcar como Feito
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </TeacherLayout>
  );
};

export default Reports;