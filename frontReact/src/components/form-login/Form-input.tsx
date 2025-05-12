// LoginPage.tsx
import { useState } from 'react'
import * as Label from '@radix-ui/react-label'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'


export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()



    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()


        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setMessage(`Erro: ${error.message}`)
        } else {
            setMessage('Login bem-sucedido!')
            navigate('/home') // redireciona após login
        }
    }

    return (
        <div className="login-page-2">
            <form onSubmit={handleLogin} className="login-form-2">
                <h1 className="form-title-2">Entrar</h1>

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

                <div className="form-field-2 checkbox-field-2">
                    <Checkbox.Root id="remember" className="checkbox-2">
                        <Checkbox.Indicator>
                            <CheckIcon />
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    <Label.Root htmlFor="remember" className="checkbox-label-2">
                        Lembrar de mim
                    </Label.Root>
                </div>

                <button type="submit" className="submit-button-2">Entrar</button>

                <div className="form-footer-2">
                    <button
                        type="button"
                        className="link-button-2"
                        onClick={() => alert('Funcionalidade de recuperação de senha ainda não implementada')}
                    >
                        Esqueci minha senha
                    </button>
                    <button
                        type="button"
                        className="link-button-2"
                        onClick={() => navigate('/register')}
                    >
                        Criar conta
                    </button>
                </div>

                {message && <p className="message-2">{message}</p>}
            </form>
        </div>
    )
}
