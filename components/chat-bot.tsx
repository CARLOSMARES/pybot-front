"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "¡Hola! Soy el asistente virtual de BotIntelligence. ¿En qué puedo ayudarte hoy?", isBot: true },
  ])
  const [inputValue, setInputValue] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    setMessages([...messages, { text: inputValue, isBot: false }])

    try {
      // Get auth token if available
      const token = localStorage.getItem("authToken")

      // Send request to the API
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({
          prompt: inputValue,
        }),
      })

      if (!response.ok) {
        throw new Error("Error en la comunicación con el bot")
      }

      const data = await response.json()

      // Add bot response from API
      setMessages((prev) => [...prev, { text: data.respuesta, isBot: true }])
    } catch (error) {
      console.error("Error:", error)
      // Show error message in chat
      setMessages((prev) => [
        ...prev,
        {
          text: "Lo siento, ha ocurrido un error al comunicarse con el servidor. Por favor, inténtalo de nuevo más tarde.",
          isBot: true,
        },
      ])
    }

    // Clear input
    setInputValue("")
  }

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg flex items-center justify-center"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 md:w-96 shadow-xl z-50 border">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="text-lg">Chat con BotIntelligence</CardTitle>
          </CardHeader>
          <CardContent className="p-4 h-80 overflow-y-auto flex flex-col gap-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? "bg-muted self-start rounded-bl-none"
                    : "bg-primary text-primary-foreground self-end rounded-br-none"
                }`}
              >
                {message.text}
              </div>
            ))}
          </CardContent>
          <CardFooter className="border-t p-3">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Escribe tu mensaje..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

