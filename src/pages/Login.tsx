import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTeacherLogin = () => {
    // Simulate login - in real app would validate credentials
    if (email && password) {
      navigate("/teacher/dashboard");
    }
  };

  const handleStudentLogin = () => {
    // Simulate login - in real app would validate credentials
    if (email && password) {
      navigate("/student/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-accent to-secondary p-4">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TrilhaSmart
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Trilhas de aprendizagem personalizadas baseadas na BNCC
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="teacher" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="teacher" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Professor
              </TabsTrigger>
              <TabsTrigger value="student" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Aluno
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="teacher" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="teacher-email">Email</Label>
                <Input
                  id="teacher-email"
                  type="email"
                  placeholder="professor@escola.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacher-password">Senha</Label>
                <Input
                  id="teacher-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleTeacherLogin}
                className="w-full bg-gradient-to-r from-primary to-primary-hover hover:scale-105 transition-all duration-300"
              >
                Entrar como Professor
              </Button>
            </TabsContent>
            
            <TabsContent value="student" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="student-email">Email ou Matrícula</Label>
                <Input
                  id="student-email"
                  placeholder="aluno@escola.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="student-password">Senha</Label>
                <Input
                  id="student-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleStudentLogin}
                className="w-full bg-gradient-to-r from-secondary to-secondary-hover hover:scale-105 transition-all duration-300"
              >
                Entrar como Aluno
              </Button>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Demo: use qualquer email e senha para entrar
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;