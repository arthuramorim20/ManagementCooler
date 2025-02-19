import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    password: 'Rwjnz6mV',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
})

await pool.connect()
    .then(() => console.log('Conectado com sucesso ao postgresql'))
    .catch((err) => console.err('erro ao conectar', err))



export default pool;