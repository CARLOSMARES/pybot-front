"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Users, Settings, LogOut, History } from "lucide-react"
import { getAuthHeader, isAuthenticated } from "@/components/auth-utils"

interface ChatHistoryItem {
  _id: string
  fecha: string
  pregunta: string
  respuesta: string
}

export default function Dashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [recentChats, setRecentChats] = useState<ChatHistoryItem[]>([])

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push("/login")
      return
    }

    // Fetch chat history
    const fetchData = async () => {
      try {
        // Fetch real chat history
        const historyResponse = await fetch("http://127.0.0.1:5000/historial", {
          headers: {
            ...getAuthHeader(),
          },
        })

        if (historyResponse.ok) {
          const historyData = await historyResponse.json()
          // Store only the 5 most recent conversations
          setRecentChats(historyData.slice(0, 5))
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    router.push("/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    )
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
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Cerrar sesión
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Bienvenido al panel de administración de BotIntelligence</p>
        </div>

        {/* Recent Conversations */}
        <div className="mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Conversaciones Recientes</CardTitle>
                <CardDescription>Las últimas 5 interacciones con el bot</CardDescription>
              </div>
              <Link href="/dashboard/historial">
                <Button variant="outline" size="sm">
                  <History className="mr-2 h-4 w-4" />
                  Ver historial completo
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentChats.length > 0 ? (
                  recentChats.map((chat) => (
                    <div key={chat._id} className="flex items-start gap-4 border-b pb-4 last:border-0">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium">Usuario</p>
                        <p className="text-sm text-muted-foreground">"{chat.pregunta}"</p>
                        <p className="text-xs text-primary mt-1">Respuesta: {chat.respuesta}</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(chat.fecha).toLocaleString("es-ES", {
                          day: "2-digit",
                          month: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-muted-foreground">
                    No hay conversaciones recientes para mostrar
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Configuración del Bot</CardTitle>
              <CardDescription>Personaliza las respuestas y comportamiento del bot</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/configuracion">
                <Button className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Configurar
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Historial de Conversaciones</CardTitle>
              <CardDescription>Revisa todas las conversaciones pasadas</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/historial">
                <Button className="w-full">
                  <History className="mr-2 h-4 w-4" />
                  Ver Historial
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

