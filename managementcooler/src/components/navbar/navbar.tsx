import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

import { Flex, TextField, TabNav } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
    const [userName, setUserName] = useState<string>("Usuário");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser();
            if (data?.user) {
                setUserName(data.user.user_metadata?.name || data.user.email || "Usuário");
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/login"); // ou "/"
    };

    return (
        <Flex
            justify="between"
            align="center"
            px="4"
            py="2"
            style={{ backgroundColor: "#0090FF", color: "#fff" }}
        >
            {/* Navegação */}
            <TabNav.Root>
                <h1 style={{ color: "#fff" }}>Admin</h1>
            </TabNav.Root>

            {/* Campo de busca */}
            <TextField.Root variant="soft" size="2" className="search-bar">
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                    {/* <input placeholder="Buscar..." className="text-field-input" /> */}
                </TextField.Slot>
            </TextField.Root>

            {/* Menu de usuário */}
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <Flex align="center" gap="2" className="user-info" style={{ cursor: "pointer" }}>
                        <Avatar.Root className="avatar-root">
                            <Avatar.Fallback className="avatar-fallback">
                                {userName.charAt(0).toUpperCase()}
                            </Avatar.Fallback>
                        </Avatar.Root>
                        <span>{userName}</span>
                    </Flex>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content className="dropdown-content" sideOffset={5}>
                    <DropdownMenu.Item onSelect={handleLogout} className="dropdown-item">
                        <FiLogOut style={{ marginRight: 8 }} />
                        Logout
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </Flex>
    );
}
