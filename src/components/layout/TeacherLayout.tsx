import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  BookOpen, 
  BarChart3, 
  Settings, 
  Users,
  LogOut,
  GraduationCap
} from "lucide-react";

interface TeacherLayoutProps {
  children: ReactNode;
}

const TeacherLayout = ({ children }: TeacherLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/teacher/dashboard", icon: Home },
    { name: "Turmas", href: "/teacher/turmas", icon: Users },
    { name: "Trilhas", href: "/teacher/create-trail", icon: BookOpen },
    { name: "Relatórios", href: "/teacher/reports", icon: BarChart3 },
    { name: "Configurações", href: "/teacher/settings", icon: Settings },
  ];

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
              <p className="text-xs text-muted-foreground">Portal do Professor</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">Prof. Maria Silva</p>
              <p className="text-xs text-muted-foreground">Matemática • 6º-7º Ano</p>
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
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 h-[calc(100vh-73px)] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default TeacherLayout;