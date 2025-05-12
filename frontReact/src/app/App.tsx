// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '../components/form-login/Form-input'
import RegisterPage from '../components/form-login/Form-buttons' 
import Home from '../pages/Home/home'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}
