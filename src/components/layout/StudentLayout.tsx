import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Map, 
  Trophy, 
  User,
  LogOut,
  GraduationCap,
  Zap
} from "lucide-react";

interface StudentLayoutProps {
  children: ReactNode;
}

const StudentLayout = ({ children }: StudentLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/student/dashboard", icon: Home },
    { name: "Minha Trilha", href: "/student/trail", icon: Map },
    { name: "Conquistas", href: "/student/achievements", icon: Trophy },
    { name: "Perfil", href: "/student/profile", icon: User },
  ];

  const studentData = {
    nome: "Ana Silva",
    nivel: "Intermediário",
    pontos: 1250,
    avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TrilhaSmart
              </h1>
              <p className="text-xs text-muted-foreground">Sua Jornada de Aprendizagem</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Pontos */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-secondary to-warning px-3 py-1 rounded-full">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">{studentData.pontos}</span>
            </div>

            {/* Perfil */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium">{studentData.nome}</p>
                <Badge variant="outline" className="text-xs">
                  {studentData.nivel}
                </Badge>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {studentData.nome.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>

            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-border h-[calc(100vh-73px)] overflow-y-auto">
          <nav className="p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Button
                  key={item.name}
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 ${
                    isActive 
                      ? "bg-gradient-to-r from-primary to-accent text-white" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => navigate(item.href)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Button>
              );
            })}
          </nav>

          {/* Progresso Semanal */}
          <div className="p-4 border-t border-border">
            <h3 className="text-sm font-medium mb-3">Progresso Semanal</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Meta: 7 dias</span>
                <span>5 / 7</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-success to-success/80 h-2 rounded-full" style={{ width: '71%' }} />
              </div>
            </div>
          </div>

          {/* Conquista em Destaque */}
          <div className="p-4 border-t border-border">
            <h3 className="text-sm font-medium mb-3">Próxima Conquista</h3>
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🔥</span>
                <span className="text-xs font-medium">Sequência de 7 dias</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <div className="bg-gradient-to-r from-warning to-warning/80 h-1.5 rounded-full" style={{ width: '71%' }} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Mais 2 dias!</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 h-[calc(100vh-73px)] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;