import React, { useReducer, createContext, useContext } from "react"
import jwtDecode from "jwt-decode"

let token = null
const initialState = { user: null }

if (typeof window !== "undefined") {
  token = window.localStorage.getItem("token")
}

if (token) {
  const decodedToken = jwtDecode(token)
  if (decodedToken.exp * 1000 < Date.now()) window.localStorage.removeItem("token")
  else initialState.user = decodedToken
}

export const AuthContex = createContext({ user: null, login: userdata => {}, logout: () => {} })

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }
    case "LOGOUT":
      return { ...state, user: null }
    default:
      return state
  }
}

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = userData => {
    window.localStorage.setItem("token", userData.token)
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

  // do additional things if needed.

  return { user, login, logout }
}
