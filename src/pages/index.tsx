import MainLayout from "../components/layouts/MainLayout"
import { Todos } from "@/components/subjectRelated/todos/components/Todos"

const Home = () => {
  const user = true
  return <MainLayout>{user ? <Todos /> : <p>Please Login to start using SimpleDo </p>}</MainLayout>
}

export default Home
