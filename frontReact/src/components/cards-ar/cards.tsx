import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tooltip from '@radix-ui/react-tooltip'

type Arcondicionado = {
    id: string
    responsible: string
    sector: string
    brand: string
    status: string
}

export default function ArcondicionadosList() {
    const [arconds, setArconds] = useState<Arcondicionado[]>([])
    const [selected, setSelected] = useState<Arcondicionado | null>(null)
    const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

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

    return (
        <div className="container">
            <h2 className="title">Ar-condicionados Cadastrados</h2>
            <button className="refresh-button" onClick={fetchArconds}>
                Atualizar Lista
            </button>
            <div className="grid">
                {arconds.map(ar => (
                    <Tooltip.Provider key={ar.id}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <div className="card">
                                    <h3>{ar.responsible}</h3>
                                    <p><strong>Setor:</strong> {ar.sector}</p>
                                    <p><strong>Marca:</strong> {ar.brand}</p>
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
                                            onClick={() => setConfirmDelete(ar.id)}
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