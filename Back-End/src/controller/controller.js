import pool from '../config/db.js'
const listarUser = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM arCond;');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar' });
    }
};

const criarUser = async (req, res) => {
    try {
        const { responsavel, setor, marca, capacidade, gas, servicos, tecnico, data, proxmanutencao, status } = req.body;
        const { rows } = await pool.query(`INSERT INTO arCond (${responsavel}, ${setor}, ${marca}, ${capacidade}
            , ${gas}, ${servicos}, ${tecnico}, ${data}, ${proxmanutencao}, ${status}) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $8, $9, $10) RETURNING *;`);
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'erro ao criar'});
    };
}

export {
    listarUser,
    criarUser
};
