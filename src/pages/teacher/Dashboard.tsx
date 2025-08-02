import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  AlertTriangle, 
  Plus,
  Download,
  BarChart3,
  Settings,
  FileText
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import TeacherLayout from "@/components/layout/TeacherLayout";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const mockTurmas = [
    { id: 1, nome: "6º A", alunos: 28, progresso: 75 },
    { id: 2, nome: "6º B", alunos: 25, progresso: 68 },
    { id: 3, nome: "7º A", alunos: 30, progresso: 82 }
  ];

  const mockAlunosRisco = [
    { nome: "Ana Silva", turma: "6º A", dificuldade: "Frações", progresso: 35 },
    { nome: "João Santos", turma: "6º B", dificuldade: "Geometria", progresso: 28 },
  ];

  const mockTrilhas = [
    { nome: "Operações com Frações", ativa: true, alunos: 45 },
    { nome: "Geometria Básica", ativa: true, alunos: 38 },
    { nome: "Álgebra Introdutória", ativa: false, alunos: 0 }
  ];

  return (
    <TeacherLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Bem-vindo, Prof. Maria Silva</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={() => navigate("/teacher/create-trail")}
              className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300"
            >
              <Plus className="w-4 h-4 mr-2" />
              Criar Nova Trilha
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Importar BNCC
            </Button>
          </div>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Turmas</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">83 alunos no total</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trilhas Ativas</CardTitle>
              <BookOpen className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">83 participações</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progresso Médio</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75%</div>
              <p className="text-xs text-muted-foreground">+12% este mês</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alunos em Risco</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Precisam atenção</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Turmas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Minhas Turmas
              </CardTitle>
              <CardDescription>Progresso geral por turma</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockTurmas.map((turma) => (
                <div key={turma.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{turma.nome}</span>
                    <span className="text-sm text-muted-foreground">
                      {turma.alunos} alunos
                    </span>
                  </div>
                  <Progress value={turma.progresso} className="h-2" />
                  <p className="text-xs text-muted-foreground">{turma.progresso}% completo</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Alunos em Risco */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Alunos que Precisam de Atenção
              </CardTitle>
              <CardDescription>Alertas de baixo desempenho</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockAlunosRisco.map((aluno, index) => (
                <Alert key={index} className="border-warning/20 bg-warning-light">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <AlertDescription>
                    <div className="space-y-1">
                      <p className="font-medium">{aluno.nome} - {aluno.turma}</p>
                      <p className="text-sm">Dificuldade em: {aluno.dificuldade}</p>
                      <div className="flex items-center gap-2">
                        <Progress value={aluno.progresso} className="h-1 flex-1" />
                        <span className="text-xs">{aluno.progresso}%</span>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Trilhas Ativas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Trilhas de Aprendizagem
            </CardTitle>
            <CardDescription>Gerencie suas trilhas ativas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockTrilhas.map((trilha, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-sm">{trilha.nome}</h4>
                        <Badge variant={trilha.ativa ? "default" : "secondary"}>
                          {trilha.ativa ? "Ativa" : "Inativa"}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {trilha.alunos} {trilha.alunos === 1 ? 'aluno' : 'alunos'}
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        Gerenciar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </TeacherLayout>
  );
};

export default TeacherDashboard;