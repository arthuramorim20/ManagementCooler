import { Box, Container, Flex, TabNav } from "@radix-ui/themes";
import { NavbarIcons } from './iconsNav.tsx';

//import React from "react"

function Navbar() {
    return (

        <Box style={{ background: "#207E73" }}>
            {/* <NavbarIcons></NavbarIcons>
            <Box /> */}

            <TabNav.Root justify={"center"} size={"2"}>
                    <TabNav.Link href="#" active>
                        Account
                    </TabNav.Link>
                    <TabNav.Link href="#">Documents</TabNav.Link>
                    <TabNav.Link href="#">Settings</TabNav.Link>
            </TabNav.Root>

        </Box>
    )
}

export default Navbar;