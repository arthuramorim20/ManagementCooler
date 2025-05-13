import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../components/auth/Login'
import Signup from '../components/auth/SignUp'
import ArcondicionadosList from '../components/ArcondicionadoList'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<ArcondicionadosList />} />
                <Route path="/register" element={<Signup />} />
                <Route path="*" element={<Login />} />
            </Routes>
        </Router>
    )
}