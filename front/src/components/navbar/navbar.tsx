import { Box, Container } from "@radix-ui/themes"
import {NavbarIcons} from './iconsNav.tsx';
//import React from "react"

function Navbar() {
    return (
        <Box style={{ background: "#207E73"}}>
            <Container size="1">
                <NavbarIcons></NavbarIcons>
                <Box py="2" />
            </Container>
        </Box>
    )
}

export default Navbar;