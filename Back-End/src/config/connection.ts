import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config()

const { Client } = pg;

const client = new Client({
    database: process.env.DB_NAME || "zurra",
    host: process.env.DB_HOST || "localhost",
    password: process.env.DB_PASSWORD || "Rwjnz6mV",
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || "postgres"
});


client.connect()
    .then(() => console.log('connected database'))
    .catch((err) => console.error('failed', err))



export default client;