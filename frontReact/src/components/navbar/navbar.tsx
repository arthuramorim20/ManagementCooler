import { Flex, TabNav } from "@radix-ui/themes";
import ButtonsNav from "./buttonsNav.tsx";

//import React from "react"

function Navbar() {
    return (
        <Flex justify={'center'} style={{ background: '#0090FF' }}>
            <TabNav.Root justify={"center"}>
                <ButtonsNav />
            </TabNav.Root>
        </Flex>
    )
}

export default Navbar;