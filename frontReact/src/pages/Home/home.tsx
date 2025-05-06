import { Container } from '@radix-ui/themes';
import Navbar from '../../components/navbar/navbar';
//import Navbar from '../../components/navbar/navbar.tsx';

export default function Home() {
    return (
        <>
            <Container size="4" style={{backgroundColor: "#207E73"}}>
                <Navbar />
            </Container>
                <h1>tesste</h1>
        </>
    );
};