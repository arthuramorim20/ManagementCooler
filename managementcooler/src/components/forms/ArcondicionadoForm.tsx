import React from 'react'

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
    data: Arcondicionado
    onChange: (field: keyof Arcondicionado, value: string) => void
    onSubmit: (e: React.FormEvent) => void
    mode: 'create' | 'edit'
}

export function ArcondicionadoForm({ data, onChange, onSubmit, mode }: Props) {
    return (
        <form onSubmit={onSubmit} className="form">
            {['responsible', 'sector', 'brand', 'capacity', 'gas_type', 'services_type', 'technical', 'nextmaintenance', 'status'].map(field => (
                <input
                    key={field}
                    value={data[field as keyof Arcondicionado]}
                    onChange={(e) => onChange(field as keyof Arcondicionado, e.target.value)}
                    placeholder={field[0].toUpperCase() + field.slice(1).replace('_', ' ')}
                />
            ))}
            <button type="submit" className="save-button">
                {mode === 'create' ? 'Cadastrar' : 'Salvar'}
            </button>
        </form>
    )
}
