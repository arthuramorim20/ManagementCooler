import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';

type LoginProps = {
    onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (username === 'admin' && password === 'admin') {
            onLogin();
        } else {
            alert('Credenciais inválidas');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Form.Root
                onSubmit={(e: React.FormEvent
                ) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                className="bg-white p-6 rounded shadow-md w-80"
            >
                <h2 className="text-xl font-semibold mb-4">Login</h2>

                <Form.Field name="username" className="mb-3">
                    <Form.Label className="block mb-1">Usuário</Form.Label>
                    <Form.Control asChild>
                        <input
                            className="w-full p-2 border rounded"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field name="password" className="mb-4">
                    <Form.Label className="block mb-1">Senha</Form.Label>
                    <Form.Control asChild>
                        <input
                            className="w-full p-2 border rounded"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Submit asChild>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                        Entrar
                    </button>
                </Form.Submit>
            </Form.Root>
        </div>
    );
}
