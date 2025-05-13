import { Flex, TextField, TabNav } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";
import { FiLogOut } from "react-icons/fi";


export default function Navbar() {
    const userName = "João Silva"; // Substituir pelo nome vindo do Supabase

    const handleLogout = () => {
        // lógica de logout (ex: supabase.auth.signOut())
        console.log("Usuário deslogado");
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
                <h1>Admin</h1>
            </TabNav.Root>

            {/* Campo de busca */}
            <TextField.Root variant="soft" size="2" className="search-bar">
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
                <input placeholder="Buscar..." className="text-field-input" />
            </TextField.Root>

            {/* Menu de usuário */}
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <Flex align="center" gap="2" className="user-info" style={{ cursor: 'pointer' }}>
                        <Avatar.Root className="avatar-root">
                            <Avatar.Fallback className="avatar-fallback">
                                {userName.charAt(0)}
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
