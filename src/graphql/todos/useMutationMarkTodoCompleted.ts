import { useMutation, gql } from "@apollo/client"

import { GET_TODOS } from "./useQueryGetTodos"

const MARK_TODO_COMPLETED = gql`
  mutation MarkTodoCompleted($id: Int!) {
    markTodoCompleted(id: $id) {
      id
      isCompleted
    }
  }
`

export const useMutationMarkTodoCompleted = () => {
  const [mutate, { data, loading, error }] = useMutation(MARK_TODO_COMPLETED, {
    refetchQueries: [{ query: GET_TODOS }],
  })

  const markTodoCompleted = (id: number) => {
    const variables = { id }
    mutate({ variables, fetchPolicy: "no-cache" })
  }

  return { markTodoCompleted, updateResult: !!data && data.markTodoCompleted, loading, error }
}
