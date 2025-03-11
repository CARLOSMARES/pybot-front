import { LoginForm } from "@/components/login-form"
import Link from "next/link"
import { Bot } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4">
      <div className="mb-8 flex flex-col items-center">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <Bot size={32} />
          <span className="text-2xl font-bold">BotIntelligence</span>
        </Link>
        <p className="text-muted-foreground mt-1">Panel de administración</p>
      </div>
      <LoginForm />
    </div>
  )
}

