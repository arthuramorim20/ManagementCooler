import pg, { Client } from 'pg';
import client from '../config/connection';

    
async function createTable() {
    const extension = `CREATE EXTENSION IF NOT EXISTS "pgcrypto";`

    const table = `
    CREATE TABLE IF NOT EXISTS arConds (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        responsavel VARCHAR(255) not null,
	    setor varchar(255) not null,
	    marca varchar(255) not null,
	    capacidade varchar(255) not null,
	    gas varchar(255) not null,
	    servicos varchar(255) not null,
	    tecnico varchar(255) not null,
	    proxmanutencao varchar(255) not null,
	    status varchar(255) not null
    );
    `
    try {
        await client.query(extension);
        await client.query(table);
        console.log('Created!!');
    } catch (err) {
        console.error('Error', err)
    }
};

async function createTableUser() {
    
    const typeEnum = `CREATE TYPE IF NOT EXISTS user_role_enum AS ENUM ('admin', 'user');`

    const extension = `CREATE EXTENSION IF NOT EXISTS "pgcrypto";`

    const table = `
    CREATE TABLE IF NOT EXISTS users (
	    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	    name varchar(255) not null,
	    email varchar(255) not null,
	    password varchar(255) not null,
	    role user_role_enum not null DEFAULT 'user',
	    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `
    try {
        await client.query(typeEnum);
        await client.query(extension);
        await client.query(table);
        console.log('Created table');
    } catch (err) {
        console.error('Error', err)
    }
};

export {
    createTable,
    createTableUser
};