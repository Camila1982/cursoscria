"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Mail,
  Instagram,
  MapPin,
  ArrowRight,
  Award,
  BookOpen,
  Palette,
  Linkedin,
  ExternalLink,
  ShoppingBag,
} from "lucide-react"

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleInscricaoClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfJvbNa6bIFUV0vt_Vr-By431_PAxBF4GrtbOW73dEz7ROdjw/viewform?usp=preview",
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="relative w-32 h-16">
                <Image src="/logos/inmode-logo.png" alt="INMODE" fill className="object-contain" />
              </div>
              <div className="relative w-40 h-16">
                <Image
                  src="/logos/secretaria-sp-logo.png"
                  alt="Secretaria de Desenvolvimento Econômico e Trabalho"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("cursos")}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Cursos
              </button>
              <button
                onClick={() => scrollToSection("professor")}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Professor
              </button>
              <button
                onClick={() => scrollToSection("processo")}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Processo
              </button>
              <button
                onClick={() => scrollToSection("cria-costura")}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Cria Costura
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                FAQ
              </button>
            </nav>
            <Button
              onClick={handleInscricaoClick}
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white border-0 px-6"
            >
              Inscreva-se
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <Badge className="bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 px-4 py-2 text-sm font-medium">
                    NOVO
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl font-light leading-tight text-gray-600">Cursos Livres</h1>
                  <div className="text-6xl md:text-8xl font-bold leading-none text-gray-900">
                    <div>Cria</div>
                    <div>Costura</div>
                  </div>
                  <h2 className="text-2xl md:text-3xl text-gray-600 font-light pt-4">com Wilson Ranieri</h2>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                  Aprenda Moulage e Upcycling com quem entende de moda de verdade. Formação gratuita e presencial para
                  moradores de São Paulo.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-fuchsia-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">100% Gratuito</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-fuchsia-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Certificado Incluso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-fuchsia-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Professor Renomado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-fuchsia-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Vagas Limitadas</span>
                </div>
              </div>

              <Button
                size="lg"
                onClick={handleInscricaoClick}
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white border-0 px-8 py-4 text-lg font-medium"
              >
                QUERO ME INSCREVER GRATUITAMENTE
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gray-50 rounded-none relative overflow-hidden">
                <Image
                  src="/images/wilson-hero.jpg"
                  alt="Trabalho de moulage em desenvolvimento no ateliê"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre os Cursos */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                Por que esses cursos vão
                <br />
                <span className="font-bold">transformar</span> sua relação com a moda?
              </h2>
              <div className="w-24 h-px bg-fuchsia-600 mx-auto"></div>
            </div>

            <div className="space-y-8 text-center max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                O mercado da moda contemporânea valoriza sustentabilidade e criação autoral. Upcycling e Moulage não são
                apenas técnicas — são diferenciais que colocam você no centro das tendências mais relevantes do setor.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Wilson Ranieri, estilista com mais de 20 anos de experiência e 7 participações na São Paulo Fashion
                Week, vai te ensinar técnicas que transformam pedaços de tecidos em peças desejo e te capacitam para
                criar roupas moldadas diretamente no corpo.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 mt-20">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border border-gray-200 flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-medium text-gray-900 text-sm leading-tight">
                  Conhecimento técnico de alto valor agregado
                </h3>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border border-gray-200 flex items-center justify-center mx-auto">
                  <Palette className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-medium text-gray-900 text-sm leading-tight">Peças criadas por você</h3>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border border-gray-200 flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-medium text-gray-900 text-sm leading-tight">Certificado de participação</h3>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border border-gray-200 flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-medium text-gray-900 text-sm leading-tight">Networking com outros aprendizes</h3>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border border-gray-200 flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-medium text-gray-900 text-sm leading-tight">
                  Acesso a uma comunidade criativa consolidada
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Disponíveis */}
      <section id="cursos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Escolha seu
              <br />
              <span className="font-bold">caminho</span> na moda
            </h2>
            <div className="w-24 h-px bg-fuchsia-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border border-gray-200 hover:border-gray-300 transition-all duration-300 rounded-none shadow-none">
              <CardHeader className="p-8 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <CardTitle className="text-2xl font-light text-gray-900">
                      MOULAGE <span className="font-bold">BÁSICO</span>
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      Aprenda a criar uma saia modelada diretamente no busto. Esta é sua porta de entrada para dominar a
                      técnica francesa de modelagem tridimensional para criação de moldes precisos, caimento perfeito e
                      redução de erros.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Terças-feiras</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Manhã</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>20 vagas</span>
                  </div>
                </div>
                <div className="border-l-2 border-fuchsia-600 pl-4">
                  <p className="font-medium text-gray-900 text-sm">Você vai criar:</p>
                  <p className="text-gray-700">Saia com caimento perfeito</p>
                </div>
                <div className="bg-gray-50 p-4 text-sm text-gray-600">
                  <strong>Pré-requisito:</strong> Conhecimento básico de costura em máquina reta
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 transition-all duration-300 rounded-none shadow-none">
              <CardHeader className="p-8 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <CardTitle className="text-2xl font-light text-gray-900">
                      MOULAGE <span className="font-bold">AVANÇADO</span>
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      Desenvolva técnicas criativas tops com golas e mangas. Para quem quer expressar sua identidade
                      através da modelagem.
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Pré-requisito
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Terças-feiras</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Tarde</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>20 vagas</span>
                  </div>
                </div>
                <div className="border-l-2 border-fuchsia-600 pl-4">
                  <p className="font-medium text-gray-900 text-sm">Você vai criar:</p>
                  <p className="text-gray-700">Tops com golas e mangas</p>
                </div>
                <div className="bg-gray-50 p-4 text-sm text-gray-600">
                  <strong>Pré-requisito:</strong> Conhecimento básico de costura em máquina reta e conhecimento básico
                  de moulage (saia)
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 rounded-none shadow-none">
              <CardHeader className="p-8 border-b border-gray-100">
                <div>
                  <CardTitle className="text-2xl font-light text-gray-900 mb-3">
                    UPCYCLING <span className="font-bold">BÁSICO</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    Transforme sobra de tecido em duas bolsas. Aprenda a estruturar tecidos e criar peças com acabamento
                    profissional.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Quintas-feiras</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Manhã</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>20 vagas</span>
                  </div>
                </div>
                <div className="border-l-2 border-fuchsia-600 pl-4">
                  <p className="font-medium text-gray-900 text-sm">Você vai criar:</p>
                  <p className="text-gray-700">Clutch + bolsa funcional (shoppingbag)</p>
                </div>
                <div className="bg-gray-50 p-4 text-sm text-gray-600">
                  <strong>Pré-requisito:</strong> Conhecimento básico de costura em máquina reta
                </div>
                <div className="bg-gray-50 p-4 text-sm text-gray-600">
                  <strong>Material:</strong> Fornecido (sobra de tecido, entretelas, aviamentos)
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-gray-300 rounded-none shadow-none">
              <CardHeader className="p-8 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <CardTitle className="text-2xl font-light text-gray-900">
                      UPCYCLING <span className="font-bold">AVANÇADO</span>
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      Crie um corset estruturado a partir de tecidos reaproveitados. Técnica avançada para peças
                      versáteis.
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Pré-requisito
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Quintas-feiras</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Tarde</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>20 vagas</span>
                  </div>
                </div>
                <div className="border-l-2 border-fuchsia-600 pl-4">
                  <p className="font-medium text-gray-900 text-sm">Você vai criar:</p>
                  <p className="text-gray-700">Corset estruturado</p>
                </div>
                <div className="bg-gray-50 p-4 text-sm text-gray-600">
                  <strong>Pré-requisito:</strong> Conhecimento básico de costura em máquina reta (bolso e lapela)
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              onClick={handleInscricaoClick}
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white border-0 px-8 py-4"
            >
              ESCOLHER MEU CURSO
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Wilson Ranieri */}
      <section id="professor" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-square bg-white relative overflow-hidden">
                <Image
                  src="/images/wilson-ranieri-new.jpg"
                  alt="Wilson Ranieri, estilista e professor dos Cursos Livres Cria Costura"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                  Aprenda com quem fez
                  <br />
                  <span className="font-bold">história</span> na moda brasileira
                </h2>
                <div className="w-24 h-px bg-fuchsia-600"></div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Wilson Ranieri é referência nacional em moulage e desenvolvimento de produto, com uma trajetória que
                inclui:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-fuchsia-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Mais de 20 anos atuando no mercado de moda</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-fuchsia-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">7 participações na São Paulo Fashion Week</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-fuchsia-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Mentor no programa Jovens Talentos Paulistanos</span>
                </div>
              </div>

              <blockquote className="border-l-2 border-fuchsia-600 pl-6 py-4">
                <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                  "Meu desejo é propagar o conhecimento técnico de moda. Cada aluno que sai daqui leva consigo não
                  apenas uma técnica, mas uma nova forma de se relacionar com a criação."
                </p>
                <footer className="text-gray-900 font-medium">Wilson Ranieri</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline do Processo */}
      <section id="processo" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Sua jornada até o
              <br />
              <span className="font-bold">certificado</span>
            </h2>
            <div className="w-24 h-px bg-fuchsia-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 text-center">
                  <div className="w-16 h-16 border-2 border-fuchsia-600 text-fuchsia-600 flex items-center justify-center font-bold text-2xl mx-auto">
                    1
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    <span className="font-bold">INSCRIÇÃO</span>
                  </h3>
                  <p className="text-fuchsia-600 font-medium mb-3">01 de julho a 08 de julho</p>
                  <p className="text-gray-700 text-lg">Preencha o formulário desta página. É rápido e gratuito.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 text-center">
                  <div className="w-16 h-16 border-2 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-2xl mx-auto">
                    2
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    <span className="font-bold">CONFIRMAÇÃO</span>
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">Automática</p>
                  <p className="text-gray-700 text-lg">
                    Você receberá um e-mail confirmando sua inscrição e orientações para a prova.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 text-center">
                  <div className="w-16 h-16 border-2 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-2xl mx-auto">
                    3
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    <span className="font-bold">PROVA DE APTIDÃO</span>
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">15 de julho | CEU Carrão</p>
                  <p className="text-gray-700 text-lg">
                    Teste prático de costura reta e curva. Demonstre que você domina o básico.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 text-center">
                  <div className="w-16 h-16 border-2 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-2xl mx-auto">
                    4
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    <span className="font-bold">RESULTADO</span>
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">18 de julho | Por e-mail</p>
                  <p className="text-gray-700 text-lg">Convocação para as aulas com cronograma completo.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 text-center">
                  <div className="w-16 h-16 border-2 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-2xl mx-auto">
                    5
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    <span className="font-bold">AULAS</span>
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">Início em 22 de julho</p>
                  <p className="text-gray-700 text-lg">
                    6 semanas de aprendizado intensivo presencial. 4 horas aula - 1x por semana.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 text-center">
                  <div className="w-16 h-16 border-2 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-2xl mx-auto">
                    6
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    <span className="font-bold">CERTIFICAÇÃO</span>
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">Ao final do curso</p>
                  <p className="text-gray-700 text-lg">Certificado de participação + sua peça autoral criada.</p>
                </div>
              </div>
            </div>

            {/* CTA após Timeline */}
            <div className="text-center mt-16">
              <Button
                size="lg"
                onClick={handleInscricaoClick}
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white border-0 px-8 py-4 text-lg font-medium"
              >
                INSCREVA-SE AGORA
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Perguntas
              <br />
              <span className="font-bold">Frequentes</span>
            </h2>
            <div className="w-24 h-px bg-fuchsia-600 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-gray-200 px-8 rounded-none">
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                  Quem pode se inscrever?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed">
                  Moradores de São Paulo que já sabem operar máquina de costura reta doméstica. Não é necessário ser
                  profissional, mas você precisa ter o básico.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-gray-200 px-8 rounded-none">
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                  É realmente gratuito?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed">
                  Sim. Totalmente gratuito. Tecidos, aviamentos e certificado inclusos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-gray-200 px-8 rounded-none">
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                  E se eu não souber costurar muito bem?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed">
                  A prova de aptidão em 15 de julho vai avaliar se você tem o mínimo necessário. Costura reta e curva
                  são suficientes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border border-gray-200 px-8 rounded-none">
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                  Posso me inscrever em mais de um curso?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed">
                  Sim, mas você pode fazer apenas um curso por vez. Se quiser fazer outro, será em um próximo ciclo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border border-gray-200 px-8 rounded-none">
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                  Como é o CEU Carrão?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed">
                  Estrutura completa com máquinas de costura, mesas de corte e todo suporte técnico necessário.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border border-gray-200 px-8 rounded-none">
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                  E se eu faltar às aulas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed">
                  Durante o curso os alunos devem completar a confecção de uma peça e o processo criativo e avanço do
                  projeto fica comprometido se houver falta. A frequência é importante para o aprendizado e para a
                  emissão do certificado. Duas faltas excluem o participante da oportunidade de obter o certificado.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Sobre a Plataforma Cria Costura */}
      <section id="cria-costura" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                Sobre a plataforma
                <br />
                <span className="font-bold">Cria Costura</span>
              </h2>
              <div className="w-24 h-px bg-fuchsia-600 mx-auto"></div>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                O <strong>Cria Costura</strong> é um projeto transformador realizado pelo{" "}
                <strong>INMODE – Instituto Nacional de Moda e Design</strong> em parceria com a{" "}
                <strong>Secretaria Municipal de Desenvolvimento Econômico e Trabalho de São Paulo</strong>, que desde
                2021 capacita e conecta talentos periféricos ao mercado da moda, consolidando-se como referência em
                formação técnica, visibilidade e geração de renda.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                Com mais de 210 participantes formados e presença marcante em eventos como o São Paulo Fashion Week, o
                Cria Costura não apenas revela o potencial criativo das periferias, mas também constrói um legado de
                inclusão, impacto social e valorização da moda brasileira.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                Agora, o projeto se expande com os <strong>Cursos Livres Cria Costura</strong>, uma nova frente de
                formação prática e especializada, onde participantes podem se aprofundar em técnicas específicas, como
                moulage e upcycling, de acordo com seu nível de domínio – básico ou avançado.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                Sob a orientação de estilistas renomados, os alunos vivenciam o mesmo padrão de excelência dos módulos
                Aceleradora Criativa e Empreendedorismo de Moda, explorando o ciclo completo da criação e desenvolvendo
                peças únicas que refletem sua identidade e criatividade.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-200">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-fuchsia-600">210+</div>
                  <h3 className="font-medium text-gray-900">Participantes formados</h3>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-fuchsia-600">2021</div>
                  <h3 className="font-medium text-gray-900">Ano de criação</h3>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-fuchsia-600">SPFW</div>
                  <h3 className="font-medium text-gray-900">Presença no Fashion Week</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição - Agora com botão para Google Forms */}
      <section id="inscricao" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Secure sua
              <br />
              <span className="font-bold">vaga</span> agora
            </h2>
            <div className="w-24 h-px bg-fuchsia-600 mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-8 border border-gray-200 p-12 rounded-none">
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Clique no botão abaixo para acessar o formulário de inscrição oficial dos Cursos Livres Cria Costura.
                </p>
                <p className="text-gray-600">O formulário será aberto em uma nova aba para sua conveniência.</p>
              </div>

              <Button
                size="lg"
                onClick={handleInscricaoClick}
                className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white border-0 py-6 text-xl font-medium rounded-none"
              >
                ACESSAR FORMULÁRIO DE INSCRIÇÃO
                <ExternalLink className="ml-3 h-6 w-6" />
              </Button>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Inscrições abertas de 01 de julho a 08 de julho de 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o INMODE */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                Sobre o
                <br />
                <span className="font-bold">INMODE</span>
              </h2>
              <div className="w-24 h-px bg-fuchsia-600 mx-auto"></div>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                O <strong>INMODE – Instituto Nacional de Moda e Design</strong> é uma organização nacional sem fins
                lucrativos que atua como um catalisador para o fortalecimento da cultura de moda no Brasil, conectando
                talentos criativos ao segmento de alto valor agregado da moda.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                Desde sua fundação em 2004, o INMODE tem desempenhado um papel central na construção de plataformas que
                aceleram talentos, promovem a inovação e fomentam a economia criativa, consolidando-se como uma
                referência no setor.
              </p>

              <div className="bg-white p-8 border border-gray-200 rounded-none">
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  <span className="font-bold">Iniciativas</span> de Destaque
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-2 border-fuchsia-600 pl-4">
                      <h4 className="font-medium text-gray-900">Amni HotSpot</h4>
                      <p className="text-gray-700 text-sm">Revelou novos criadores ao mercado</p>
                    </div>

                    <div className="border-l-2 border-fuchsia-600 pl-4">
                      <h4 className="font-medium text-gray-900">Movimento HotSpot</h4>
                      <p className="text-gray-700 text-sm">Festival de criatividade e inovação</p>
                    </div>

                    <div className="border-l-2 border-fuchsia-600 pl-4">
                      <h4 className="font-medium text-gray-900">Contextualizar na Moda</h4>
                      <p className="text-gray-700 text-sm">
                        Integrou pequenos negócios e artesãos ao universo da moda de alto impacto
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-l-2 border-fuchsia-600 pl-4">
                      <h4 className="font-medium text-gray-900">Top Five</h4>
                      <p className="text-gray-700 text-sm">Impulsiona marcas autorais brasileiras</p>
                    </div>

                    <div className="border-l-2 border-fuchsia-600 pl-4">
                      <h4 className="font-medium text-gray-900">Projeto Estufa</h4>
                      <p className="text-gray-700 text-sm">
                        Plataforma de experimentação e sustentabilidade no São Paulo Fashion Week
                      </p>
                    </div>

                    <div className="border-l-2 border-fuchsia-600 pl-4">
                      <h4 className="font-medium text-gray-900">Cria Costura</h4>
                      <p className="text-gray-700 text-sm">
                        Capacita talentos periféricos e os insere no mercado da moda
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Esses projetos refletem o compromisso do INMODE em democratizar o acesso à moda, valorizar a diversidade
                cultural do Brasil e promover a inclusão como força criativa.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                A parceria estratégica com a{" "}
                <strong>Secretaria Municipal de Desenvolvimento Econômico e Trabalho de São Paulo</strong> tem sido
                fundamental para consolidar iniciativas como o <strong>Cria Costura</strong>, que transforma vidas ao
                oferecer formação técnica gratuita, visibilidade real e geração de renda para jovens das periferias.
              </p>

              <blockquote className="border-l-2 border-fuchsia-600 pl-6 py-4 bg-white">
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  Por meio de suas ações, o INMODE reafirma o papel da moda como uma ferramenta de transformação
                  cultural, social e econômica, posicionando o Brasil como um protagonista global em criatividade e
                  inovação.
                </p>
              </blockquote>

              <div className="grid md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-200">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-fuchsia-600">2004</div>
                  <h3 className="font-medium text-gray-900">Ano de fundação</h3>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-fuchsia-600">20+</div>
                  <h3 className="font-medium text-gray-900">Anos de atuação</h3>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-fuchsia-600">6</div>
                  <h3 className="font-medium text-gray-900">Projetos principais</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Logos - Realização e Apoio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <h3 className="text-xl font-light text-gray-900">
                <span className="font-bold">REALIZAÇÃO</span>
              </h3>
              <div className="flex justify-center items-center space-x-12">
                <div className="relative w-48 h-24">
                  <Image src="/logos/inmode-logo.png" alt="Instituto INMODE" fill className="object-contain" />
                </div>
                <div className="relative w-64 h-24">
                  <Image
                    src="/logos/secretaria-sp-logo.png"
                    alt="Prefeitura de São Paulo - Secretaria de Desenvolvimento Econômico e Trabalho"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-lg font-light text-white">
                <span className="font-bold">CONTATOS</span>
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4" />
                  <span>adm@inmode.org.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4" />
                  <span>CEU Carrão - Zona Leste/SP</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-light text-white">
                <span className="font-bold">REDES SOCIAIS</span>
              </h3>
              <div className="space-y-3 text-gray-300">
                <a
                  href="https://www.instagram.com/institutoinmode/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-fuchsia-400 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span>@institutoinmode</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/inmode-br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-fuchsia-400 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>INMODE Brasil</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-light text-white">
                <span className="font-bold">LOJA CRIA COSTURA</span>
              </h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm leading-relaxed">
                  Conheça o que talentos formados pelo Cria Costura já criaram sob a tutela de estilistas como Jefferson
                  de Assis e Rita Comparato.
                </p>
                <a
                  href="https://shopee.com.br/criacostura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Compre agora na Shopee</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-light text-white">
                <span className="font-bold">IMPORTANTE</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                As inscrições ficam abertas até 08 de julho de 2024. Não perca esta oportunidade única de aprender com
                Wilson Ranieri.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cria Costura & INMODE. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
