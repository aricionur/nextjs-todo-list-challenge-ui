import React, { useReducer, createContext, useContext } from "react"
import jwtDecode from "jwt-decode"

interface DecodedToken {
  id: string
  username: string
  email: string
  exp: number // Expiration time
  // Add other properties as needed
}

let token: string | null = null
const initialState = { user: null as DecodedToken | null }

if (typeof window !== "undefined") {
  token = window.localStorage.getItem("token")
}

if (token) {
  try {
    const decodedToken = jwtDecode(token) as DecodedToken // Type assertion

    if (decodedToken.exp * 1000 < Date.now()) {
      window.localStorage.removeItem("token")
    } else {
      initialState.user = decodedToken
    }
  } catch (error) {
    console.error("Invalid token:", error)
    window.localStorage.removeItem("token")
  }
}

export const AuthContex = createContext({
  user: null as DecodedToken | null,
  login: (userdata: DecodedToken) => {},
  logout: () => {},
})

const authReducer = (state: { user: DecodedToken | null }, action: { type: string; payload?: DecodedToken }) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload || null }
    case "LOGOUT":
      return { ...state, user: null }
    default:
      return state
  }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = (userData: DecodedToken) => {
    window.localStorage.setItem("token", JSON.stringify(userData))
    dispatch({ type: "LOGIN", payload: userData })
  }

  const logout = () => {
    window.localStorage.removeItem("token")
    dispatch({ type: "LOGOUT" })
  }

  return <AuthContex.Provider value={{ user: state.user, login, logout }}>{children}</AuthContex.Provider>
}

export const useAuth = () => {
  const { user, login, logout } = useContext(AuthContex)
  return { user, login, logout }
}
