import { NextResponse } from "next/server"

// This is a mock API route that would normally fetch data from your backend
// In a real application, this would make authenticated requests to your actual API

export async function GET(request: Request) {
  // In a real implementation, you would:
  // 1. Extract the token from the Authorization header
  // 2. Validate the token
  // 3. Make a request to your actual backend API
  // 4. Return the data

  // For demo purposes, we'll return mock data
  return NextResponse.json({
    stats: {
      activeUsers: "1,543",
      userGrowth: "+15% desde el mes pasado",
      conversations: "10,872",
      conversationGrowth: "+28% desde el mes pasado",
      responseRate: "99.1%",
      responseRateChange: "+3.2% desde el mes pasado",
      responseTime: "0.8s",
      responseTimeChange: "-0.3s desde el mes pasado",
    },
    recentConversations: [
      {
        id: 1,
        user: "cliente1@ejemplo.com",
        message: "¿Cómo puedo integrar el bot en mi sitio web de WordPress?",
        timestamp: "hace 5 min",
      },
      {
        id: 2,
        user: "cliente2@ejemplo.com",
        message: "¿Qué opciones de personalización ofrece el bot?",
        timestamp: "hace 12 min",
      },
      {
        id: 3,
        user: "cliente3@ejemplo.com",
        message: "Necesito ayuda con la configuración del bot para mi tienda online",
        timestamp: "hace 25 min",
      },
      {
        id: 4,
        user: "cliente4@ejemplo.com",
        message: "¿El bot puede integrarse con mi CRM actual?",
        timestamp: "hace 42 min",
      },
      {
        id: 5,
        user: "cliente5@ejemplo.com",
        message: "¿Puedo personalizar las respuestas automáticas del bot?",
        timestamp: "hace 1 hora",
      },
    ],
  })
}

