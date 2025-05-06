import { Form } from "radix-ui";

export default function FormButtons() {
    return (
        <Form.Submit asChild>
            <button className="Button" style={{ marginTop: 10 }}>
                Login
            </button>
        </Form.Submit>
    )
}