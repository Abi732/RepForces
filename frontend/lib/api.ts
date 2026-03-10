const API_BASE = "http://localhost:8000"

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token")
  }
  return null
}

export const isAuthenticated = () => {
  return !!getToken()
}