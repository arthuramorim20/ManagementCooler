interface Props {
    onConfirm: () => void
    onCancel: () => void
}

export function ConfirmDeleteModal({ onConfirm, onCancel }: Props) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>Tem certeza que deseja deletar?</p>
                <div className="modal-buttons">
                    <button onClick={onConfirm} className="confirm-button">Sim</button>
                    <button onClick={onCancel} className="cancel-button">Cancelar</button>
                </div>
            </div>
        </div>
    )
}
