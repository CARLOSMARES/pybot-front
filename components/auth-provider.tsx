"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

interface AuthContextType {
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is authenticated on initial load
    const token = localStorage.getItem("authToken")
    setIsAuthenticated(!!token)

    // Redirect if on protected route and not authenticated
    if (!token && pathname?.startsWith("/dashboard")) {
      router.push("/login")
    }
  }, [pathname, router])

  const login = (token: string) => {
    localStorage.setItem("authToken", token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem("authToken")
    setIsAuthenticated(false)
    router.push("/login")
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

