import * as Dialog from '@radix-ui/react-dialog'
import * as Tooltip from '@radix-ui/react-tooltip'

interface Arcondicionado {
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

interface Props {
    ar: Arcondicionado
    onEdit: (ar: Arcondicionado) => void
    onDelete: (id: string) => void
}

export function ArcondicionadoCard({ ar, onEdit, onDelete }: Props) {
    return (
        <Tooltip.Provider>
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
                            <Dialog.Trigger onClick={() => onEdit(ar)} className="edit-button">
                                Editar
                            </Dialog.Trigger>
                            <button onClick={() => onDelete(ar.id)} className="delete-button">
                                Deletar
                            </button>
                        </div>
                    </div>
                </Tooltip.Trigger>
                <Tooltip.Content side="top">ID: {ar.id}</Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}
