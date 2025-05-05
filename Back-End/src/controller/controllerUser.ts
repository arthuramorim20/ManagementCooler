import client from "../config/connection";
import { Request, Response } from "express";


const getUser = async (req: Request, res: Response) => {
    try {
        const result = await client.query('SELECT * FROM users;');
        res.json(result.rows);
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
    }
}

const postUser = async (req: Request, res: Response) => {
    try {
        const message = { "accept": "Cadastrado com sucesso" };
        const { name, email, password } = req.body; // Destructure the body
        await client.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
            [name, email, password]
        );
        res.json(message);
    } catch (err) {
        const message = { "error": "Erro ao tentar criar users" }
        res.json(message)
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const message = { "accept": "Atualizado com sucesso" };
        const { id, ...fieldsToUpdate } = req.body; //Rest 

        const updates = Object.keys(fieldsToUpdate)
        .map((key, index) => `${key} = $${index + 2}`)
        .join(", ");

        
        const values = [id, ...Object.values(fieldsToUpdate)];

        const query = `UPDATE users SET ${updates} WHERE id = $1`;

        await client.query(query, values);
        res.json(message);
    } catch (err) {
        const message = { "error": "Erro ao tentar atualizar users" };
        console.error(err);
        res.json(message);
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const query = 'DELETE FROM users WHERE id = $1';
        await client.query(query, [id]);
        res.json("Foi");
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
        console.error(err);
    }
}


export {
    getUser,
    postUser,
    updateUser,
    deleteUser
};