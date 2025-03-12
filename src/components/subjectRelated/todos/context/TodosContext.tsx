import React, { createContext, useState, useContext, ReactNode, FC } from "react"

interface Props {
  children: ReactNode
}

export interface State {
  showing?: "all" | "completed" | "incompleted"
}

interface Context {
  state: State
  onChange: (newState: State) => void
}

const TodosContext = createContext<Context>({ state: {}, onChange: (newState: any) => {} })

export const TodosProvider: FC<Props> = ({ children }) => {
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
