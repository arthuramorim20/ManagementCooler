import pg, { Client } from 'pg';
import client from '../config/connection';

async function createTable() {
    const table = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";

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
        await client.query(table);
        console.log('Created!!');
    } catch ( err) {
        console.error('Error', err)
    }
}

export default createTable;