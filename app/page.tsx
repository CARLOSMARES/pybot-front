import ChatBot from "@/components/chat-bot";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Facebook, Globe, Instagram, MessageCircle, Shield, Twitter, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            {/* Sección modificada para incluir el logo */}
            <img src="/Metrix-logotipo-b.png" alt="Logo" className="w-30 h-30" />
            <div className="flex items-center space-x-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Potencia tu sitio web con nuestro <span className="text-primary">Bot Inteligente</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Mejora la experiencia de tus usuarios con respuestas instantáneas, soporte 24/7 y conversaciones
                  naturales.
                </p>
              </div>
            </div>
            <div className="space-x-4">
              <Button size="lg" className="h-12">
                Comenzar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12">
                Ver demostración
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Características principales</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Nuestro bot está diseñado para mejorar la interacción con tus usuarios y aumentar las conversiones.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Bot className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Inteligencia Artificial</CardTitle>
                <CardDescription>Respuestas inteligentes basadas en el contexto de la conversación.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Nuestro bot utiliza tecnología avanzada de IA para entender las preguntas y proporcionar respuestas
                  precisas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Respuestas Instantáneas</CardTitle>
                <CardDescription>Atención inmediata para tus usuarios sin tiempos de espera.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Mejora la satisfacción del cliente con respuestas inmediatas a sus consultas más frecuentes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Seguridad Garantizada</CardTitle>
                <CardDescription>Protección de datos y privacidad en todas las conversaciones.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Todas las conversaciones están encriptadas y cumplen con las normativas de protección de datos.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Multilingüe</CardTitle>
                <CardDescription>Soporte en múltiples idiomas para atender a una audiencia global.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Nuestro bot puede comunicarse en más de 20 idiomas, adaptándose a tus necesidades internacionales.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MessageCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Personalización Completa</CardTitle>
                <CardDescription>Adapta el bot a tu marca y necesidades específicas.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Personaliza el aspecto, tono y respuestas del bot para que se alinee perfectamente con tu marca.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Integración Sencilla</CardTitle>
                <CardDescription>Implementación rápida en cualquier sitio web o plataforma.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Integra nuestro bot en minutos con un simple fragmento de código que funciona en cualquier plataforma
                  web.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Facebook className="h-10 w-10 text-primary mb-2" />
                  <Twitter className="h-10 w-10 text-primary mb-2" />
                  <Instagram className="h-10 w-10 text-primary mb-2" />
                </div>
                <CardTitle>Integración Con Redes Sociales</CardTitle>
                <CardDescription>Conecta tu bot con las principales redes sociales para potenciar tu interacción en línea.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Integra nuestro bot con Facebook, Twitter e Instagram y automatiza respuestas para mejorar la comunicación directa con tus clientes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MessageCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Integración Con WhatsApp</CardTitle>
                <CardDescription>Integra nuestro bot en WhatsApp para atención instantánea y personalizada.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Permite a tus clientes contactarte de forma directa y rápida a través de WhatsApp, ofreciendo soporte inmediato y mejorando la satisfacción del cliente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="bg-muted py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Empresas que ya han mejorado su atención al cliente con nuestro bot.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Increíble mejora</CardTitle>
                <CardDescription>María López, CEO de TechSolutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "Desde que implementamos el bot, nuestras conversiones aumentaron un 35% y el tiempo de respuesta se
                  redujo drásticamente."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Soporte 24/7</CardTitle>
                <CardDescription>Juan Pérez, Director de E-commerce</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "Ahora podemos ofrecer soporte las 24 horas sin aumentar nuestro equipo. Los clientes están
                  encantados."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fácil de implementar</CardTitle>
                <CardDescription>Ana Martínez, Desarrolladora Web</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "La integración fue sorprendentemente sencilla. En menos de una hora teníamos el bot funcionando
                  perfectamente."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Planes y precios</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Elige el plan que mejor se adapte a las necesidades de tu negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Plan Básico</CardTitle>
                <CardDescription>Para pequeños negocios</CardDescription>
                {/* <div className="mt-4 text-4xl font-bold">
                  $29<span className="text-base font-normal text-muted-foreground">/mes</span>
                </div> */}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Hasta 1,000 conversaciones/mes
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Personalización básica
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Soporte por email
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Comenzar prueba gratuita</Button>
              </CardFooter>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <div className="px-4 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full w-fit mb-2">
                  POPULAR
                </div>
                <CardTitle>Plan Profesional</CardTitle>
                <CardDescription>Para negocios en crecimiento</CardDescription>
                {/* <div className="mt-4 text-4xl font-bold">
                  $79<span className="text-base font-normal text-muted-foreground">/mes</span>
                </div> */}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Hasta 5,000 conversaciones/mes
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Personalización completa
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Soporte prioritario
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Análisis avanzados
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Comenzar prueba gratuita</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plan Empresarial</CardTitle>
                <CardDescription>Para grandes empresas</CardDescription>
                {/* <div className="mt-4 text-4xl font-bold">
                  $199<span className="text-base font-normal text-muted-foreground">/mes</span>
                </div> */}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Conversaciones ilimitadas
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Personalización a medida
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Soporte 24/7
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    API completa
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Integraciones avanzadas
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contactar ventas</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Listo para mejorar la experiencia de tus usuarios?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Comienza hoy mismo con una prueba gratuita de 14 días. Sin compromisos.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" className="h-12">
                Comenzar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 bg-transparent border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Acceder al Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <ChatBot />

      {/* Footer */}
      {/* <footer className="border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="space-y-4">
              <h4 className="text-base font-medium">Producto</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Integraciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Casos de uso
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Guías
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Empresa</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Clientes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Carreras
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Licencias
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} BotIntelligence. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

