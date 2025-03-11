"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Bot, ArrowLeft, Save, Trash } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { isAuthenticated, getAuthHeader } from "@/components/auth-utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface QAPair {
  id?: string
  prompt: string
  respuesta: string
}

export default function ConfiguracionPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [prompt, setPrompt] = useState("")
  const [respuesta, setRespuesta] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [savedPairs, setSavedPairs] = useState<QAPair[]>([])

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push("/login")
      return
    }

    // Fetch existing Q&A pairs (if there's an endpoint for that)
    // For now, we'll just set isLoading to false
    setIsLoading(false)
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!prompt.trim() || !respuesta.trim()) {
      setNotification({
        type: "error",
        message: "Por favor, completa ambos campos.",
      })
      return
    }

    setIsSaving(true)
    setNotification(null)

    try {
      const response = await fetch("http://127.0.0.1:5000/respuesta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeader(),
        },
        body: JSON.stringify({
          prompt,
          respuesta,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Add the new pair to our local state
        setSavedPairs([...savedPairs, { prompt, respuesta, id: Date.now().toString() }])

        // Clear the form
        setPrompt("")
        setRespuesta("")

        // Show success notification
        setNotification({
          type: "success",
          message: data.message || "Respuesta guardada correctamente",
        })
      } else {
        throw new Error(data.message || "Error al guardar la respuesta")
      }
    } catch (error) {
      console.error("Error saving response:", error)
      setNotification({
        type: "error",
        message: error instanceof Error ? error.message : "Error al guardar la respuesta",
      })
    } finally {
      setIsSaving(false)
    }
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
            <h1 className="text-3xl font-bold tracking-tight">Configuración del Bot</h1>
            <p className="text-muted-foreground">Personaliza las respuestas del bot para preguntas específicas</p>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </Link>
        </div>

        {notification && (
          <Alert variant={notification.type === "success" ? "default" : "destructive"} className="mb-6">
            <AlertTitle>{notification.type === "success" ? "Éxito" : "Error"}</AlertTitle>
            <AlertDescription>{notification.message}</AlertDescription>
          </Alert>
        )}

        {/* Add New Q&A Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Agregar nueva pregunta y respuesta</CardTitle>
            <CardDescription>Define cómo responderá el bot a preguntas específicas</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="prompt" className="text-sm font-medium">
                  Pregunta
                </label>
                <Input
                  id="prompt"
                  placeholder="Ej: ¿Cómo puedo integrar el bot en mi sitio web?"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="respuesta" className="text-sm font-medium">
                  Respuesta
                </label>
                <Textarea
                  id="respuesta"
                  placeholder="Ej: Puedes integrar nuestro bot copiando el siguiente código en tu sitio web..."
                  value={respuesta}
                  onChange={(e) => setRespuesta(e.target.value)}
                  rows={4}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isSaving}>
                {isSaving ? (
                  "Guardando..."
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar respuesta
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {/* Saved Q&A Pairs */}
        <Card>
          <CardHeader>
            <CardTitle>Respuestas guardadas</CardTitle>
            <CardDescription>Respuestas personalizadas que has configurado para el bot</CardDescription>
          </CardHeader>
          <CardContent>
            {savedPairs.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>No hay respuestas personalizadas guardadas.</p>
                <p className="text-sm mt-2">Las respuestas que agregues aparecerán aquí.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pregunta</TableHead>
                    <TableHead>Respuesta</TableHead>
                    <TableHead className="w-[100px]">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {savedPairs.map((pair) => (
                    <TableRow key={pair.id || `${pair.prompt}-${pair.respuesta}`}>
                      <TableCell className="font-medium">{pair.prompt}</TableCell>
                      <TableCell>{pair.respuesta}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Eliminar</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

