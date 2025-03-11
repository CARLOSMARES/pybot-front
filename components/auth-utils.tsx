"use client"

// Utility functions for authentication

/**
 * Gets the authentication token from localStorage
 */
export function getAuthToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("authToken")
  }
  return null
}

/**
 * Sets the authentication token in localStorage
 */
export function setAuthToken(token: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("authToken", token)
  }
}

/**
 * Removes the authentication token from localStorage
 */
export function removeAuthToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken")
  }
}

/**
 * Checks if the user is authenticated
 */
export function isAuthenticated(): boolean {
  return !!getAuthToken()
}

/**
 * Creates an Authorization header with the token
 */
export function getAuthHeader(): Record<string, string> {
  const token = getAuthToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

