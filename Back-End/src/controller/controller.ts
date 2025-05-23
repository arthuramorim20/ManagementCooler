import client from "../config/connection";
import { Request, Response } from "express";


const getCoolers = async (req: Request, res: Response) => {
    try {
        const result = await client.query('SELECT * FROM arConds;');
        res.json(result.rows);
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
    }
}

const postCoolers = async (req: Request, res: Response) => {
    try {
        const message = { "accept": "Cadastrado com sucesso" };
        const { responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status } = req.body; // Destructure the body
        await client.query(
            'INSERT INTO arconds (responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
            [responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status]
        );
        res.json(message);
    } catch (err) {
        const message = { "error": "Erro ao tentar criar users" }
        res.json(message)
    }
}

const updateCoolers = async (req: Request, res: Response) => {
    try {
        const message = { "accept": "Atualizado com sucesso" };
        const { id, ...fieldsToUpdate } = req.body; //Rest 

        const updates = Object.keys(fieldsToUpdate)
        .map((key, index) => `${key} = $${index + 2}`)
        .join(", ");

        
        const values = [id, ...Object.values(fieldsToUpdate)];

        const query = `UPDATE arconds SET ${updates} WHERE id = $1`;

        await client.query(query, values);
        res.json(message);
    } catch (err) {
        const message = { "error": "Erro ao tentar atualizar users" };
        console.error(err);
        res.json(message);
    }
};

const deleteCoolers = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const query = 'DELETE FROM arconds WHERE id = $1';
        await client.query(query, [id]);
        res.json("Foi");
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
        console.error(err);
    }
}


export {
    getCoolers,
    postCoolers,
    updateCoolers,
    deleteCoolers
};