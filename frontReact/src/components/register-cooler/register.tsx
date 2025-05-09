import React, { useState } from 'react';
import { Toaster } from '../toaster/sucessToaster';

const MaintenanceForm = () => {
    const [toastOpen, setToastOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // ... lógica de envio ...
        setToastOpen(true);
    }


    const [formData, setFormData] = useState({
        responsavel: '',
        setor: '',
        marca: '',
        capacidade: '',
        tipoGas: '',
        tipoServico: '',
        tecnico: '',
        proximaManutencao: '',
        status: 'Pendente',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log('Form Data:', formData);
    //     // Aqui você pode enviar os dados para a API ou tratá-los como necessário
    // };

    return (
        <div className="page-container">
            <div className='form-wrapper'>
                <form className="maintenance-form" onSubmit={handleSubmit}>
                    <h2>Cadastro de Manutenção</h2>

                    <div className="form-grid">
                        <div className="form-group">
                            <label>Responsável</label>
                            <input type="text" name="responsavel" value={formData.responsavel} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Setor</label>
                            <input type="text" name="setor" value={formData.setor} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Marca</label>
                            <input type="text" name="marca" value={formData.marca} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Capacidade</label>
                            <input type="text" name="capacidade" value={formData.capacidade} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Tipo de gás</label>
                            <input type="text" name="tipoGas" value={formData.tipoGas} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Tipo de Serviço</label>
                            <input type="text" name="tipoServico" value={formData.tipoServico} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Técnico</label>
                            <input type="text" name="tecnico" value={formData.tecnico} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Próxima manutenção</label>
                            <input type="date" name="proximaManutencao" value={formData.proximaManutencao} onChange={handleChange} required />
                        </div>

                        <div className="form-group full-width">
                            <label>Status</label>
                            <select name="status" value={formData.status} onChange={handleChange} required>
                                <option value="Pendente">Pendente</option>
                                <option value="Concluído">Concluído</option>
                                <option value="Andamento">Andamento</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-footer">
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
                <Toaster open={toastOpen} setOpen={setToastOpen} />
            </div>
        </div>
    );
};

export default MaintenanceForm;