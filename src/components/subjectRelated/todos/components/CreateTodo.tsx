import { SetStateAction, useState } from "react"
import { TextField, Box } from "@mui/material"

import { useMutationCreateTodo } from "../../../../graphql/todos/useMutationCreateTodo"

export const CreateTodo = () => {
  const { createTodo } = useMutationCreateTodo()
  const [value, setValue] = useState("")

  const onChange = (event: { target: { value: SetStateAction<string> } }) => setValue(event.target.value)

  const keyPress = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      createTodo(value)
      setValue("")
    }
  }

  return (
    <Box sx={{ marginLeft: 2 }}>
      <TextField id="todoCreate" label="Add a new todo" value={value || ""} variant="standard" onKeyDown={keyPress} onChange={onChange} />
    </Box>
  )
}
