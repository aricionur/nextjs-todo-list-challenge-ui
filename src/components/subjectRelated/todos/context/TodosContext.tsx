import React, { createContext, useState, useContext } from "react"

const TodosContext = createContext()

export const TodosProvider = ({ children }) => {
  const [state, setState] = useState({})

  const onChange = toBeUpdatedStateProporties => {
    setState({ ...state, ...toBeUpdatedStateProporties })
  }

  return <TodosContext.Provider value={{ state, onChange }}>{children}</TodosContext.Provider>
}

export const useTodos = () => {
  const { state, onChange } = useContext(TodosContext)

  // Here, do internal actions if needed.

  return { state, onChange }
}
