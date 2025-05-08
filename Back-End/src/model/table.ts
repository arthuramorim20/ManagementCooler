import client from '../config/connection';
    
async function createTable() {
    const extension = `CREATE EXTENSION IF NOT EXISTS "pgcrypto";`

    const table = `
    CREATE TABLE IF NOT EXISTS arConds (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        responsible VARCHAR(255) not null,
	    sector varchar(255) not null,
	    brand varchar(255) not null,
	    capacity varchar(255) not null,
	    gas_type varchar(255) not null,
	    services_type varchar(255) not null,
	    technical varchar(255) not null,
	    nextmaintenance varchar(255) not null,
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
    
<<<<<<< HEAD
    const typeEnum = `CREATE TYPE IF NOT EXISTS user_role_enum AS ENUM ('admin', 'user');`
=======
>>>>>>> 75de821e9d3b82574723f1fe6657601d990ceacd

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