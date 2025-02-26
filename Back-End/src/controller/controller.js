import arcondicionado from '../models/arcondicionado.js';

const listarUser = async (req, res) => {
    try {
        const result = await arcondicionado.findAll();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar' });
    }
};

const criarUser = async (req, res) => {
    try {
        const { responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status } = req.body;
        const result = await arcondicionado.create({responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status});
        res.json(result)
    } catch (err) {
        console.log(err);
        return res.status(404).json({error: 'erro ao criar'})
    }
}

export {
    listarUser,
    criarUser
};
