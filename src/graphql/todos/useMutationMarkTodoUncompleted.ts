import { useMutation, gql } from "@apollo/client"

import { GET_TODOS } from "./useQueryGetTodos"

const MARK_TODO_UNCOMPLETED = gql`
  mutation MarkTodoUncompleted($id: Int!) {
    markTodoUncompleted(id: $id) {
      id
      isCompleted
    }
  }
`

export const useMutationMarkTodoUncompleted = () => {
  const [mutate, { data, loading, error }] = useMutation(MARK_TODO_UNCOMPLETED, {
    refetchQueries: [{ query: GET_TODOS }],
  })

  const markTodoUncompleted = (id: number) => {
    const variables = { id }
    mutate({ variables, fetchPolicy: "no-cache" })
  }

  return { markTodoUncompleted, updateResult: !!data && data.markTodoUncompleted, loading, error }
}
