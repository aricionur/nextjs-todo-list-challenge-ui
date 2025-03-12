import { Todo } from "@/types"
import { useQuery, gql } from "@apollo/client"

export const GET_TODOS = gql`
  query ListTodos {
    listTodos {
      id
      isCompleted
      title
    }
  }
`

export const useQueryGetTodos = (): { todos: Todo[]; loading: boolean; error: any; refetch: () => void } => {
  const { data, loading, error, refetch } = useQuery(GET_TODOS)
  return { todos: !!data && data.listTodos, loading, error, refetch }
}
