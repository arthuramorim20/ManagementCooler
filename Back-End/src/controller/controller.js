import pool from '../config/db.js'
const listarUser = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM arCond');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar' });
    }
}

export default listarUser;
