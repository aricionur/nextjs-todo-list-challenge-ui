import React, { createContext, useState, useContext } from "react"

const TodosContext = createContext({ state: {}, onChange: (newState: any) => {} })

export const TodosProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [state, setState] = useState({})

  const onChange = (toBeUpdatedStateProporties: any) => {
    setState({ ...state, ...toBeUpdatedStateProporties })
  }

  return <TodosContext.Provider value={{ state, onChange }}>{children}</TodosContext.Provider>
}

export const useTodos = () => {
  const { state, onChange } = useContext(TodosContext)

  // Here, do internal actions if needed.

  return { state, onChange }
}
