import { Box, Container } from '@radix-ui/themes';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar'
//import Navbar from '../../components/navbar/navbar.tsx';

export default function Home() {
    return (
        <>
            <Container style={{backgroundColor: "#0090FF"}}>
                <Navbar />
            </Container>     
            <Box as='div'>
                <Sidebar />    
            </Box>      
        </>
    );
};