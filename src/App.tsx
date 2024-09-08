import { createBrowserRouter, RouterProvider } from "react-router-dom"
import IntroSelection from "./pages/IntroSelection"
import MainLayout from "./pages/MainLayout"
import InteractiveMode from "./pages/InteractiveMode"
import CustomMode from "./pages/CustomMode"

const router = createBrowserRouter([
  { path: '/', element: <MainLayout />, children: [
    { index: true, element: <IntroSelection /> },
    { path: 'interactive', element: <InteractiveMode /> },
    { path: 'custom', element: <CustomMode /> }
  ] }
])
function App() {
  return (
        <RouterProvider router={router} />
  )
}

export default App
