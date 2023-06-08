import React from "react"
import Box from "@mui/material/Box"

import { TodosProvider } from "../context/TodosContext"
import { TodoList } from "./TodoList"
import { Footer } from "./Footer"
import { CreateTodo } from "./CreateTodo"
import { Header } from "./Header"

export const Todos = () => {
  return (
    <>
      <TodosProvider>
        <Box xs={{ height: "100vh" }}>
          <Box sx={{ width: 500, height: 500, boxShadow: 3, margin: "auto" }}>
            <Header />
            <CreateTodo />
            <TodoList />
            <Footer />
          </Box>
        </Box>
      </TodosProvider>
    </>
  )
}
