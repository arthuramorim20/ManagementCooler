import client from "../config/connection";
import { Request, Response } from "express";


const getUser = async (req: Request, res: Response) => {
    try {
        const result = await client.query('SELECT * FROM arConds;');
        res.json(result.rows);
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
    }
}

const postUser = async (req: Request, res: Response) => {
    try {
        const message = { "accept": "Cadastrado com sucesso" };
        const { responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status } = req.body; // Destructure the body
        await client.query(
            'INSERT INTO arconds (responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
            [responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status] // Pass individual values
        );
        res.json(message);
    } catch (err) {
        const message = { "error": "Erro ao tentar criar users" }
        res.json(message)
    }
}

const putUser = async (req: Request, res: Response) => {
    try {
        const message = { "accept": "Atualizado com sucesso" };
        const { id, responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status } = req.body;
        await client.query('UPDATE arconds SET responsavel = $1, setor = $2, marca = $3, capacidade = $4, gas = $5, servicos = $6, tecnico = $7, proxmanutencao = $8, status = $9 WHERE id = $10', [id, responsavel, setor, marca, capacidade, gas, servicos, tecnico, proxmanutencao, status]);
        res.json(message)
    } catch (err) {
        const message = { "error": "Erro ao tentar atualizar users" }
        res.json(message)
    }
}


export {
    getUser,
    postUser,
    putUser
};