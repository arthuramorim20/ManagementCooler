// import * as React from "react";
import { Form } from "radix-ui";
import FormButtons from "./form-buttons";

//Separar inputs de buttons
const FormInput = () => (
    <Form.Root className="FormRoot">
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
                    Please enter your email
                </Form.Message>
                <Form.Message className="FormMessage" match="typeMismatch">
                    Please provide a valid email
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
                    Please enter a question
                </Form.Message>
            </div>
            <Form.Control asChild>
                <input className="Textarea" type="password" required />
            </Form.Control>
            <FormButtons />
        </Form.Field>
    </Form.Root>
);

export default FormInput;
