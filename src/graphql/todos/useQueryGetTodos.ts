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

export const useQueryGetTodos = () => {
  const { data, loading, error, refetch } = useQuery(GET_TODOS)
  return { todos: !!data && data.listTodos, loading, error, refetch }
}
