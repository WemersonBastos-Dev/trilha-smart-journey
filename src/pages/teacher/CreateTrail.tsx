import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { 
  BookOpen, 
  Video, 
  Brain, 
  Trophy, 
  Plus,
  Wand2,
  Save,
  Eye
} from "lucide-react";
import TeacherLayout from "@/components/layout/TeacherLayout";

const CreateTrail = () => {
  const [trilhaName, setTrilhaName] = useState("");
  const [etapaEnsino, setEtapaEnsino] = useState("");
  const [componente, setComponente] = useState("");
  const [habilidades, setHabilidades] = useState<string[]>([]);
  const [diagnosticoAtivo, setDiagnosticoAtivo] = useState(true);
  const [complexidade, setComplexidade] = useState("");
  const [estiloAprendizagem, setEstiloAprendizagem] = useState("");
  const [tipoMidia, setTipoMidia] = useState("");

  const mockHabilidades = [
    "EF06MA01 - Comparar, ordenar, ler e escrever números naturais e números racionais",
    "EF06MA02 - Reconhecer o sistema de numeração decimal",
    "EF06MA03 - Resolver e elaborar problemas que envolvam cálculos",
    "EF06MA08 - Reconhecer que os números racionais positivos podem ser expressos nas formas fracionária e decimal"
  ];

  const toggleHabilidade = (habilidade: string) => {
    setHabilidades(prev => 
      prev.includes(habilidade) 
        ? prev.filter(h => h !== habilidade)
        : [...prev, habilidade]
    );
  };

  const blocosTrilha = [
    { tipo: "video", nome: "Vídeo Introdutório", icon: Video, cor: "bg-red-500" },
    { tipo: "quiz", nome: "Quiz Adaptativo", icon: Brain, cor: "bg-blue-500" },
    { tipo: "desafio", nome: "Desafio Prático", icon: Trophy, cor: "bg-green-500" }
  ];

  return (
    <TeacherLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Criar Nova Trilha</h1>
            <p className="text-muted-foreground">Configure uma trilha de aprendizagem personalizada</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Visualizar
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent">
              <Save className="w-4 h-4 mr-2" />
              Publicar Trilha
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Configurações Básicas */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription>Configure os dados fundamentais da trilha</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="trilha-name">Nome da Trilha</Label>
                  <Input
                    id="trilha-name"
                    placeholder="Ex: Operações com Frações"
                    value={trilhaName}
                    onChange={(e) => setTrilhaName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Etapa de Ensino</Label>
                    <Select value={etapaEnsino} onValueChange={setEtapaEnsino}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a etapa" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ef1">Ensino Fundamental I (1º-5º)</SelectItem>
                        <SelectItem value="ef2">Ensino Fundamental II (6º-9º)</SelectItem>
                        <SelectItem value="em">Ensino Médio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Componente Curricular</Label>
                    <Select value={componente} onValueChange={setComponente}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o componente" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matematica">Matemática</SelectItem>
                        <SelectItem value="portugues">Língua Portuguesa</SelectItem>
                        <SelectItem value="ciencias">Ciências</SelectItem>
                        <SelectItem value="historia">História</SelectItem>
                        <SelectItem value="geografia">Geografia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Diagnóstico Inicial</Label>
                    <p className="text-sm text-muted-foreground">
                      Aplicar avaliação antes da trilha
                    </p>
                  </div>
                  <Switch checked={diagnosticoAtivo} onCheckedChange={setDiagnosticoAtivo} />
                </div>
              </CardContent>
            </Card>

            {/* Habilidades BNCC */}
            <Card>
              <CardHeader>
                <CardTitle>Habilidades da BNCC</CardTitle>
                <CardDescription>Selecione as habilidades que serão trabalhadas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockHabilidades.map((habilidade, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Checkbox 
                      id={`habilidade-${index}`}
                      checked={habilidades.includes(habilidade)}
                      onCheckedChange={() => toggleHabilidade(habilidade)}
                    />
                    <Label 
                      htmlFor={`habilidade-${index}`} 
                      className="text-sm leading-relaxed cursor-pointer"
                    >
                      {habilidade}
                    </Label>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Editor de Trilha */}
            <Card>
              <CardHeader>
                <CardTitle>Estrutura da Trilha</CardTitle>
                <CardDescription>Arraste e organize os blocos da sua trilha</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {blocosTrilha.map((bloco, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors cursor-move"
                    >
                      <div className={`w-10 h-10 rounded-lg ${bloco.cor} flex items-center justify-center`}>
                        <bloco.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{bloco.nome}</p>
                        <p className="text-sm text-muted-foreground">
                          {bloco.tipo === "video" && "Conteúdo explicativo em vídeo"}
                          {bloco.tipo === "quiz" && "Perguntas que se adaptam ao aluno"}
                          {bloco.tipo === "desafio" && "Atividade prática interativa"}
                        </p>
                      </div>
                      <Button size="sm" variant="ghost">
                        Editar
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Bloco
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Geração Automática */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5" />
                  Geração Automática
                </CardTitle>
                <CardDescription>Configure a IA para personalizar a trilha</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Nível de Complexidade</Label>
                  <Select value={complexidade} onValueChange={setComplexidade}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basico">Básico</SelectItem>
                      <SelectItem value="intermediario">Intermediário</SelectItem>
                      <SelectItem value="avancado">Avançado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Estilo de Aprendizagem</Label>
                  <Select value={estiloAprendizagem} onValueChange={setEstiloAprendizagem}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estilo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="visual">Visual</SelectItem>
                      <SelectItem value="auditivo">Auditivo</SelectItem>
                      <SelectItem value="cinestesico">Cinestésico</SelectItem>
                      <SelectItem value="leitura">Leitura/Escrita</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Tipo de Mídia</Label>
                  <Select value={tipoMidia} onValueChange={setTipoMidia}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Principalmente Vídeos</SelectItem>
                      <SelectItem value="texto">Principalmente Textos</SelectItem>
                      <SelectItem value="gamificado">Gamificado</SelectItem>
                      <SelectItem value="misto">Misto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <Button className="w-full bg-gradient-to-r from-accent to-secondary">
                  <Wand2 className="w-4 h-4 mr-2" />
                  Gerar Trilha Automaticamente
                </Button>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Preview da Trilha</CardTitle>
              </CardHeader>
              <CardContent>
                {habilidades.length > 0 && (
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">Habilidades Selecionadas:</p>
                      <div className="space-y-1">
                        {habilidades.map((hab, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {hab.split(' - ')[0]}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {trilhaName && (
                  <div className="pt-3 border-t">
                    <p className="text-sm font-medium">Nome: {trilhaName}</p>
                    {etapaEnsino && <p className="text-sm text-muted-foreground">Etapa: {etapaEnsino.toUpperCase()}</p>}
                    {componente && <p className="text-sm text-muted-foreground">Área: {componente}</p>}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default CreateTrail;