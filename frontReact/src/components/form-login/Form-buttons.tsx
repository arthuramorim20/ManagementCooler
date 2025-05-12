import { useState } from 'react'
import * as Label from '@radix-ui/react-label'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'

export default function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name }, // armazena o nome no "user_metadata"
            },
        })

        if (error) setMessage(`Erro: ${error.message}`)
        else setMessage('Cadastro feito! Verifique seu e-mail.')
    }
    return (
        <div className="login-page-2">
            <form onSubmit={handleRegister} className="login-form-2">
                <h1 className="form-title-2">Criar Conta</h1>

                <div className="form-field-2">
                    <Label.Root htmlFor="name">Nome</Label.Root>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="input-2"
                    />
                </div>

                <div className="form-field-2">
                    <Label.Root htmlFor="email">Email</Label.Root>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input-2"
                    />
                </div>

                <div className="form-field-2">
                    <Label.Root htmlFor="password">Senha</Label.Root>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-2"
                    />
                </div>

                <button type="submit" className="submit-button-2">Registrar</button>
                <button
                    type="button"
                    className="link-button-2"
                    onClick={() => navigate('/login')}
                >
                    Já tem conta? Entrar
                </button>

                {message && <p className="message-2">{message}</p>}
            </form>
        </div>
    )
}
