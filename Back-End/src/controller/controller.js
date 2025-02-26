import arCond from '../models/arcondicionado.js';

const listarUser = async (req, res) => {
    try {
        const result = await arCond.findAll({
            order: [['id', 'ASC']]
        });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar' });
    }
};

const criarUser = async (req, res) => {
    try {
        const { responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status } = req.body;
        const result = await arCond.create({ responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status }, {position: newPosition});
        
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({ error: 'erro ao criar' });
    };
}

const updateUser = async (req, res) => {
    try {
        const { id, responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status } = req.body;
        const result = await arCond.update({ responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status },{ where: {
            id: id
        }} )
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(404).json({ error: 'erro ao atualizar' });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;
        const result = await arCond.destroy({
            where: {
                id:id
            } 
        })
        res.json(result);
    } catch (err){
        console.error(err);
        res.status(404).json({ error: 'erro ao excluir' });
    }
}

export {
    listarUser,
    criarUser,
    updateUser,
    deleteUser
};
