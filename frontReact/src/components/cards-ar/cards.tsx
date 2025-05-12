import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tooltip from '@radix-ui/react-tooltip'
// import { UUIDTypes } from 'uuid';
import { v4 as uuidv4 } from 'uuid'

interface Arcondicionado {
    id: string,
    responsible: string,
    sector: string,
    brand: string,
    capacity: string,
    gas_type: string,
    services_type: string,
    technical: string,
    nextmaintenance: string,
    status: string
}

export default function ArcondicionadosList() {
    const [arconds, setArconds] = useState<Arcondicionado[]>([])
    const [selected, setSelected] = useState<Arcondicionado | null>(null)
    const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

    const [newItem, setNewItem] = useState<Arcondicionado>({
        id: uuidv4(),
        responsible: '',
        sector: '',
        brand: '',
        capacity: '',
        gas_type: '',
        services_type: '',
        technical: '',
        nextmaintenance: '',
        status: '',
    })

    const fetchArconds = () => {
        fetch('http://localhost:3000/coolers', { method: 'GET' })
            .then(res => res.json())
            .then(data => setArconds(data))
    }

    useEffect(() => {
        fetchArconds()
    }, [])

    const handleDelete = async () => {
        if (confirmDelete) {
            await fetch(`http://localhost:3000/delete_cooler/${confirmDelete}`, { method: 'DELETE' })
            setConfirmDelete(null)
            fetchArconds()
        }
    }

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selected) return

        await fetch(`http://localhost:3000/update_cooler/${selected.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(selected),
        })

        setSelected(null)
        fetchArconds()
    }

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()
        await fetch('http://localhost:3000/new_cooler', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem),
        })
        setNewItem({ id: uuidv4(), responsible: '', sector: '', brand: '', capacity: '', gas_type: '', services_type: '', technical: '', nextmaintenance: '', status: '' })
        fetchArconds()
    }

    return (
        <div className="container">
            <h2 className="title">Ar-condicionados Cadastrados</h2>
            <Dialog.Root>
                <Dialog.Trigger className="create-button">Cadastrar Novo</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="dialog-overlay" />
                    <Dialog.Content className="dialog-content">
                        <Dialog.Title>Cadastrar Ar-condicionado</Dialog.Title>
                        <form onSubmit={handleCreate} className="form">
                            <input
                                value={newItem.responsible}
                                onChange={(e) => setNewItem({ ...newItem, responsible: e.target.value })}
                                placeholder="Responsável"
                            />
                            <input
                                value={newItem.sector}
                                onChange={(e) => setNewItem({ ...newItem, sector: e.target.value })}
                                placeholder="Setor"
                            />
                            <input
                                value={newItem.brand}
                                onChange={(e) => setNewItem({ ...newItem, brand: e.target.value })}
                                placeholder="Marca"
                            />
                            <input
                                value={newItem.capacity}
                                onChange={(e) => setNewItem({ ...newItem, capacity: e.target.value })}
                                placeholder="Capacidade"
                            />
                            <input
                                value={newItem.gas_type}
                                onChange={(e) => setNewItem({ ...newItem, gas_type: e.target.value })}
                                placeholder="Tipo de Gás"
                            />
                            <input
                                value={newItem.services_type}
                                onChange={(e) => setNewItem({ ...newItem, services_type: e.target.value })}
                                placeholder="Serviço"
                            />
                            <input
                                value={newItem.technical}
                                onChange={(e) => setNewItem({ ...newItem, technical: e.target.value })}
                                placeholder="Técnico"
                            />
                            <input
                                value={newItem.nextmaintenance}
                                onChange={(e) => setNewItem({ ...newItem, nextmaintenance: e.target.value })}
                                placeholder="Próxima Manutenção:"
                            />
                            <input
                                value={newItem.status}
                                onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
                                placeholder="Status"
                            />
                            <button type="submit" className="save-button">Cadastrar</button>
                        </form>
                        <Dialog.Close asChild>
                            <button className="close-button">Fechar</button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
            {/* <button className="refresh-button" onClick={fetchArconds}>
                Atualizar Lista
            </button> */}
            <div className="grid">
                {arconds.map(ar => (
                    <Tooltip.Provider key={ar.id.toString()}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <div className="card">
                                    <h3>{ar.responsible}</h3>
                                    <p><strong>Setor:</strong> {ar.sector}</p>
                                    <p><strong>Marca:</strong> {ar.brand}</p>
                                    <p><strong>Capacidade:</strong> {ar.capacity}</p>
                                    <p><strong>Tipo de Gás:</strong> {ar.gas_type}</p>
                                    <p><strong>Serviço:</strong> {ar.services_type}</p>
                                    <p><strong>Técnico:</strong> {ar.technical}</p>
                                    <p><strong>Próxima Manutenção:</strong> {ar.nextmaintenance}</p>
                                    <p><strong>Status:</strong> {ar.status}</p>

                                    <div className="actions">
                                        <Dialog.Root>
                                            <Dialog.Trigger onClick={() => setSelected(ar)} className="edit-button">
                                                Editar
                                            </Dialog.Trigger>
                                            <Dialog.Portal>
                                                <Dialog.Overlay className="dialog-overlay" />
                                                <Dialog.Content className="dialog-content">
                                                    <Dialog.Title>Editar Ar-condicionado</Dialog.Title>
                                                    {selected && (
                                                        <form onSubmit={handleUpdate} className="form">
                                                            <input
                                                                value={selected.responsible}
                                                                onChange={(e) => setSelected({ ...selected, responsible: e.target.value })}
                                                                placeholder="Responsável"
                                                            />
                                                            <input
                                                                value={selected.sector}
                                                                onChange={(e) => setSelected({ ...selected, sector: e.target.value })}
                                                                placeholder="Setor"
                                                            />
                                                            <input
                                                                value={selected.brand}
                                                                onChange={(e) => setSelected({ ...selected, brand: e.target.value })}
                                                                placeholder="Marca"
                                                            />
                                                            <input
                                                                value={selected.capacity}
                                                                onChange={(e) => setSelected({ ...selected, capacity: e.target.value })}
                                                                placeholder="Capacidade"
                                                            />
                                                            <input
                                                                value={selected.gas_type}
                                                                onChange={(e) => setSelected({ ...selected, gas_type: e.target.value })}
                                                                placeholder="Tipo de Gás"
                                                            />
                                                            <input
                                                                value={selected.services_type}
                                                                onChange={(e) => setSelected({ ...selected, services_type: e.target.value })}
                                                                placeholder="Serviço"
                                                            />
                                                            <input
                                                                value={selected.technical}
                                                                onChange={(e) => setSelected({ ...selected, technical: e.target.value })}
                                                                placeholder="Técnico"
                                                            />
                                                            <input
                                                                value={selected.nextmaintenance}
                                                                onChange={(e) => setSelected({ ...selected, nextmaintenance: e.target.value })}
                                                                placeholder="Próxima Manutenção"
                                                            />
                                                            <input
                                                                value={selected.status}
                                                                onChange={(e) => setSelected({ ...selected, status: e.target.value })}
                                                                placeholder="Status"
                                                            />
                                                            <button type="submit" className="save-button">Salvar</button>
                                                        </form>
                                                    )}
                                                    <Dialog.Close asChild>
                                                        <button className="close-button">Fechar</button>
                                                    </Dialog.Close>
                                                </Dialog.Content>
                                            </Dialog.Portal>
                                        </Dialog.Root>

                                        <button
                                            onClick={() => setConfirmDelete(ar.id.toString())}
                                            className="delete-button"
                                        >
                                            Deletar
                                        </button>
                                    </div>
                                </div>
                            </Tooltip.Trigger>
                            <Tooltip.Content side="top">
                                ID: {ar.id}
                            </Tooltip.Content>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                ))}
            </div>

            {confirmDelete && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>Tem certeza que deseja deletar?</p>
                        <div className="modal-buttons">
                            <button onClick={handleDelete} className="confirm-button">Sim</button>
                            <button onClick={() => setConfirmDelete(null)} className="cancel-button">Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}