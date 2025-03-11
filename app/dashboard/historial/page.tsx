"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Bot, ArrowLeft, Clock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { isAuthenticated, getAuthHeader } from "@/components/auth-utils"

interface ChatHistoryItem {
  _id: string
  fecha: string
  pregunta: string
  respuesta: string
}

export default function HistorialPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [historial, setHistorial] = useState<ChatHistoryItem[]>([])
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push("/login")
      return
    }

    // Fetch chat history
    const fetchHistorial = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/historial", {
          headers: {
            ...getAuthHeader(),
          },
        })

        if (!response.ok) {
          throw new Error("Error al obtener el historial")
        }

        const data = await response.json()
        setHistorial(data)
      } catch (error) {
        console.error("Error fetching historial:", error)
        setError("No se pudo cargar el historial. Por favor, inténtalo de nuevo más tarde.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchHistorial()
  }, [router])

  // Filter history based on search term
  const filteredHistorial = historial.filter(
    (item) =>
      item.pregunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.respuesta.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Format date for better display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="min-h-screen bg-muted/40">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold">BotIntelligence</span>
          </div>
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              Volver al Dashboard
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Historial de Conversaciones</h1>
            <p className="text-muted-foreground">Revisa todas las interacciones previas con el bot</p>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </Link>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar en el historial..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p>Cargando historial...</p>
          </div>
        ) : error ? (
          <Card>
            <CardContent className="p-6">
              <div className="text-center text-destructive">{error}</div>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                Mostrando {filteredHistorial.length} de {historial.length} conversaciones
              </p>
            </div>

            {filteredHistorial.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-center">
                  <p>No se encontraron conversaciones que coincidan con tu búsqueda.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredHistorial.map((item) => (
                  <Card key={item._id} className="overflow-hidden">
                    <CardHeader className="bg-muted/50 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <CardDescription>{formatDate(item.fecha)}</CardDescription>
                        </div>
                        <CardDescription className="text-xs">ID: {item._id}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div className="bg-primary/10 p-3 rounded-lg rounded-tl-none">
                          <p className="text-sm font-medium mb-1">Usuario:</p>
                          <p>{item.pregunta}</p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg rounded-tr-none">
                          <p className="text-sm font-medium mb-1">Bot:</p>
                          <p>{item.respuesta}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}

