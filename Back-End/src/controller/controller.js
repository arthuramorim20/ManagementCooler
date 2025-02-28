import arCond from '../models/arcondicionado.js';

const listarUser = async (req, res) => {  //Controller de ROTA GET
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

const criarUser = async (req, res) => {  //Controller de ROTA POST
    try {
        const result = await arCond.create(req.body);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({ error: 'erro ao criar' });
    };
}

const updateUser = async (req, res) => { //Controller de ROTA PUT
    try {
        const { id } = req.body;
        const result = await arCond.update(req.body ,{ where: {
            id: id
        }} )
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(404).json({ error: 'erro ao atualizar' });
    }
}

const deleteUser = async (req, res) => {  // Controller de ROTA DELETE
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
