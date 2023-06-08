import React, { useEffect } from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import ClearIcon from "@mui/icons-material/Clear"

// import { useQueryGetTodos } from "../../../../graphql/todos/useQueryGetTodos"
// import { useMutationMarkTodoCompleted } from "../../../../graphql/todos/useMutationMarkTodoCompleted"
// import { useMutationMarkTodoUncompleted } from "../../../../graphql/todos/useMutationMarkTodoUncompleted"
// import { useMutationDeleteTodo } from "../../../../graphql/todos/useMutationDeleteTodo"
// import { useTodos } from "../context/TodosContext"
// import { useAuth } from "../../auth/context/AuthContext"

export const TodoList = () => {
  const todos = [
    { id: 1, title: "my todo", isCompleted: true },
    { id: 2, title: "my todo -2", isCompleted: false },
    { id: 3, title: "my todo -3", isCompleted: true },
  ]
  const loading = false
  const error = false
  const refetch = () => {}
  const user = true
  const showing = "all"

  const markTodoCompleted = (value: any) => {}
  const markTodoUncompleted = (value: any) => {}
  const deleteTodo = (value: any) => {}

  // const { user } = useAuth()
  // const { todos, loading, error, refetch } = useQueryGetTodos()
  // const { markTodoCompleted } = useMutationMarkTodoCompleted()
  // const { markTodoUncompleted } = useMutationMarkTodoUncompleted()
  // const { deleteTodo } = useMutationDeleteTodo()
  // const { onChange, state } = useTodos()
  // const { showing } = state
  const showingTodos = todos && showing === "completed" ? todos.filter(x => x.isCompleted) : showing === "incompleted" ? todos.filter(x => !x.isCompleted) : todos

  const handleMarkChange = (event: any) => {
    if (event.target.checked) markTodoCompleted(+event.target.value)
    else markTodoUncompleted(+event.target.value)
  }

  const handleClearClick = (id: any) => () => {
    deleteTodo(id)
  }

  useEffect(() => {
    refetch()
  }, [user])

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}
      {showingTodos && (
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {showingTodos.map(({ id, title, isCompleted }) => {
            return (
              <ListItem
                key={id}
                secondaryAction={
                  <IconButton edge="end" aria-label="clear" onClick={handleClearClick(id)}>
                    <ClearIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox edge="start" value={id} onChange={handleMarkChange} checked={isCompleted} />
                  </ListItemIcon>
                  <ListItemText id={id} primary={title} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      )}
    </>
  )
}
