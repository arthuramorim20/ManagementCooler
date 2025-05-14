import * as Form from '@radix-ui/react-form';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const email = formData.get('email') as string | null;
        const password = formData.get('password') as string | null;

        if (!email || !password) {
            setMessage('Email e senha são obrigatórios.');
            return;
        }

        const { error } = await supabase.auth.signUp({ email, password });

        if (error) {
            setMessage(error.message);
        } else {
            setMessage('Verifique seu email para confirmar o cadastro.');
            setTimeout(() => navigate('/login'), 1000);
        }
    };

    return (
        <div className="login-page-2">
            <Form.Root onSubmit={handleSubmit} className="login-form-2">
                <h2 className="form-title-2">Criar Conta</h2>

                <Form.Field name="email" className="form-field-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control asChild>
                        <input type="email" name="email" className="input-2" required />
                    </Form.Control>
                </Form.Field>

                <Form.Field name="password" className="form-field-2">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control asChild>
                        <input type="password" name="password" className="input-2" required />
                    </Form.Control>
                </Form.Field>

                <Form.Submit asChild>
                    <button className="submit-button-2" type="submit">Cadastrar</button>
                </Form.Submit>

                {message && <p className="message-2">{message}</p>}

                <div className="form-footer-2">
                    <button className="link-button-2" onClick={() => navigate('/login')}>
                        Já tem conta?
                    </button>
                </div>
            </Form.Root>
        </div>
    );
};

export default Signup;
