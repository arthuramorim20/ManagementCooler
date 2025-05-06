import { Flex } from '@radix-ui/themes';
import FormInput from "../../components/form-login/Form-input";


export default function Login() {
    

    return (
        <>
            <Flex direction="column" height="100vh">
                <h1>Login</h1>
                <FormInput/>
            </Flex>    
        </>
    );
}