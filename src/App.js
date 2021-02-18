import AuthProvider from "./contexts/AuthContext"
import { AppRouter } from "./routes/AppRouter"
import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./pages/Includes/Navbar"

export const App = () => {
  if (null === localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([{
          'email': 'super@admin.com',
          'password': 'admin',
          'role': 'super_admin'
      }]))
  }

  if (null === localStorage.getItem('articles')) {
      localStorage.setItem('articles', JSON.stringify([]))
  }

  return (
    <AuthProvider>
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    </AuthProvider>
  )
}