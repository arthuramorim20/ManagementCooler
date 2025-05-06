import { TabNav } from "@radix-ui/themes";
// import { BrowserRouter } from "react-router-dom";


export default function ButtonsNav() {
    return (
        <>
            <TabNav.Link href="#" active>Home</TabNav.Link>
            <TabNav.Link href="/home">Home</TabNav.Link>
            <TabNav.Link href="/docs">Home</TabNav.Link>
        </>
    )
}