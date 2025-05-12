import { supabase } from '../config/connection';
import { Request, Response } from "express";
import { arconds } from '../model/model';

export const getUser = async (req: Request, res: Response) => {
    try {
        const result = await supabase.from('users').select('*');
        res.json(result.data);
        console.log(result)
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
    }
}

export const postUser = async (req: Request, res: Response) => {
    try {
        const postCooler: arconds = req.body;
        const result = await supabase.from('users').insert([postCooler]);
        res.json('Inserido com sucesso');
        console.log(result)
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateCooler: Partial<arconds> = req.body;
        const result = await supabase.from('users').update(updateCooler).eq('id', id);
        res.json('Atualizado');
        console.log(result)
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await supabase.from('users').delete().eq('id', id);
        res.json('Excluído');
        console.log(result)
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
    }
}
