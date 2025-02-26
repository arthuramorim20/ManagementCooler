import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    password: 'Rwjnz6mV',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
})

/*await pool.query(`
    CREATE TABLE arCond (
	item INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	responsavel VARCHAR(255),
	setor VARCHAR(255),
	marca VARCHAR(255),
	capacidade VARCHAR(255),
	gas VARCHAR(4),
	servicos VARCHAR(255),
	tecnico VARCHAR(255),
	data VARCHAR(10),
	proxManutencao VARCHAR(10),
	status observacao not null
);
    `)
*/

await pool.connect()
    .then(() => console.log('Conectado com sucesso ao postgresql'))
    .catch((err) => console.err('erro ao conectar', err))


export default pool;