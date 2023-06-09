import MainLayout from "../components/layouts/MainLayout"
import { Todos } from "@/components/subjectRelated/todos/components/Todos"
import { useAuth } from "../components/subjectRelated/auth/context/AuthContext"

const Home = () => {
  const { user } = useAuth()

  return <MainLayout>{user ? <Todos /> : <p>Please Login to start using SimpleDo </p>}</MainLayout>
}

export default Home
