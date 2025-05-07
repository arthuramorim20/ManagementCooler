// import * as React from "react";
import { Form } from "radix-ui";
import FormButtons from "./Form-buttons";

//Separar inputs de buttons
const FormInput = () => (
    <Form.Root className="FormRoot">
        <h1 style={{ display: "flex", justifyContent: "center" }}>Login</h1>
        <Form.Field className="FormField" name="email">
            <div
                style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                }}
            >
                <Form.Label className="FormLabel">Email</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                    Por favor insira o email
                </Form.Message>
                <Form.Message className="FormMessage" match="typeMismatch">
                    Email Inválido
                </Form.Message>
            </div>
            <Form.Control asChild>
                <input className="Input" type="email" required />
            </Form.Control>
        </Form.Field>
        <Form.Field className="input" name="password">
            <div
                style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                }}
            >
                <Form.Label className="FormLabel">Password</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                    Por favor insira a senha
                </Form.Message>
            </div>
            <Form.Control asChild>
                <input className="Textarea" type="password" required />
            </Form.Control>
            <FormButtons />
        </Form.Field>
        <a href="" >Esqueci a Senha</a>
    </Form.Root>
);

export default FormInput;
