import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config()

const { Client } = pg;

const client = new Client({
    database: process.env.DB_NAME || "zurra",
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER
});


client.connect()
    .then(() => console.log('connected database'))
    .catch((err) => console.error('failed', err))



export default client;