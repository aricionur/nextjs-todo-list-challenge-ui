import { useMutation, gql } from "@apollo/client"

import { GET_TODOS } from "./useQueryGetTodos"

const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      isSuccess
    }
  }
`

export const useMutationDeleteTodo = () => {
  const [mutate, { data, loading, error }] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  })

  const deleteTodo = (id: number) => {
    const variables = { id }
    mutate({ variables, fetchPolicy: "no-cache" })
  }

  return { deleteTodo, updateResult: !!data && data.deleteTodo, loading, error }
}
