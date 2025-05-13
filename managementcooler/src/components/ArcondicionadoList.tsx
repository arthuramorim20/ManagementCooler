import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { v4 as uuidv4 } from 'uuid'
import { supabase } from '../lib/supabaseClient'
import { ArcondicionadoCard } from '../components/cards/ArcondicionadoCards'
import { ArcondicionadoForm } from '../components/forms/ArcondicionadoForm'
import { ConfirmDeleteModal } from '../components/modal/ConfirmModal'
import Navbar from '../components/navbar/navbar'


export interface Arcondicionado {
    id: string
    responsible: string
    sector: string
    brand: string
    capacity: string
    gas_type: string
    services_type: string
    technical: string
    nextmaintenance: string
    status: string
}

export default function ArcondicionadosList() {
    const [arconds, setArconds] = useState<Arcondicionado[]>([])
    const [selected, setSelected] = useState<Arcondicionado | null>(null)
    const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

    const [newItem, setNewItem] = useState<Arcondicionado>({
        id: uuidv4(), responsible: '', sector: '', brand: '', capacity: '',
        gas_type: '', services_type: '', technical: '', nextmaintenance: '', status: ''
    })

    const { id, ...data } = newItem;

    const fetchArconds = async () => {
        const { data, error } = await supabase
            .from('arconds')
            .select('*')
            .order('responsible', { ascending: true })

        if (error) console.error(error)
        else setArconds(data || [])
    }


    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()
        const { error } = await supabase
            .from('arconds')
            .insert([data])
        if (error) console.error(error)
        else {
            setNewItem({ ...newItem, id: uuidv4(), responsible: '', sector: '', brand: '', capacity: '', gas_type: '', services_type: '', technical: '', nextmaintenance: '', status: '' })
            fetchArconds()
        }
    }

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selected) return

        const { error } = await supabase
            .from('arconds')
            .update(selected)
            .eq('id', selected.id)

        if (error) console.error(error)
        else {
            setSelected(null)
            fetchArconds()
        }
    }

    const handleDelete = async () => {
        if (!confirmDelete) return
        const { error } = await supabase
            .from('arconds')
            .delete()
            .eq('id', confirmDelete)

        if (error) console.error(error)
        else {
            setConfirmDelete(null)
            fetchArconds()
        }
    }

    useEffect(() => {
        fetchArconds()
    }, [])

    return (
        <>
        <Navbar></Navbar>
            <div className="container">
                <h2 className="title">Ar-condicionados Cadastrados</h2>

                {/* Criar novo */}
                <Dialog.Root>
                    <Dialog.Trigger className="create-button">Cadastrar Novo</Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="dialog-overlay" />
                        <Dialog.Content className="dialog-content">
                            <Dialog.Title>Cadastrar Ar-condicionado</Dialog.Title>
                            <ArcondicionadoForm
                                data={newItem}
                                onChange={(field: keyof Arcondicionado, value: string) => setNewItem({ ...newItem, [field]: value })}
                                onSubmit={handleCreate}
                                mode="create"
                            />
                            <Dialog.Close asChild>
                                <button className="close-button">Fechar</button>
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>

                {/* Lista */}
                <div className="grid">
                    {arconds.map(ar => (
                        <Dialog.Root key={ar.id}>
                            <ArcondicionadoCard
                                ar={ar}
                                onEdit={(a: Arcondicionado) => setSelected(a)}
                                onDelete={(id: string) => setConfirmDelete(id)}
                            />
                            {selected?.id === ar.id && (
                                <Dialog.Portal>
                                    <Dialog.Overlay className="dialog-overlay" />
                                    <Dialog.Content className="dialog-content">
                                        <Dialog.Title>Editar Ar-condicionado</Dialog.Title>
                                        <ArcondicionadoForm
                                            data={selected}
                                            onChange={(field: keyof Arcondicionado, value: string) => setSelected({ ...selected, [field]: value })}
                                            onSubmit={handleUpdate}
                                            mode="edit"
                                        />
                                        <Dialog.Close asChild>
                                            <button className="close-button">Fechar</button>
                                        </Dialog.Close>
                                    </Dialog.Content>
                                </Dialog.Portal>
                            )}
                        </Dialog.Root>
                    ))}
                </div>

                {confirmDelete && (
                    <ConfirmDeleteModal
                        onConfirm={handleDelete}
                        onCancel={() => setConfirmDelete(null)}
                    />
                )}
            </div>
        </>
    )
}
