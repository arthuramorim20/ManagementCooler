import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Avatar } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'

export function UserMenu() {
    const [userEmail, setUserEmail] = useState<string | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser()
            if (data?.user) {
                setUserEmail(data.user.email ?? null)
            }
        }
        getUser()
    }, [])

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        navigate('/login')
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="avatar-button">
                    <Avatar fallback="U" radius="full" size="3" />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="dropdown-menu" sideOffset={8}>
                    <DropdownMenu.Label className="dropdown-label">{userEmail}</DropdownMenu.Label>
                    <DropdownMenu.Separator className="dropdown-separator" />
                    <DropdownMenu.Item className="dropdown-item" onClick={handleSignOut}>
                        Sair
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}