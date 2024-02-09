import { RouterProvider, createBrowserRouter } from "react-router-dom"
import routes from "./pages/routes"


export const App = () => {
  const router = createBrowserRouter(routes)

  return(
    <RouterProvider router={router} />
  )
}
