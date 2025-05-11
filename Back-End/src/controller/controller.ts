import { supabase } from '../config/connection';
import { Request, Response } from "express";
import { arconds } from '../model/model';


export const getCoolers = async (req: Request, res: Response) => {
    try {
        const result = await supabase.from('arconds').select('*');
        res.json(result.data);
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
    }
}

export const postCoolers = async (req: Request, res: Response) => {
    try {
        const postCooler: arconds = req.body;
        const result = await supabase.from('arconds').insert([postCooler]);
        res.json('Inserido com sucesso');
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
    }
}

export const updateCoolers = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateCooler: Partial<arconds> = req.body;
        const result = await supabase.from('arconds').update(updateCooler).eq('id', id);
        res.json('Atualizado');
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
    }
}

export const deleteCoolers = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await supabase.from('arconds').delete().eq('id', id);
        res.json('Excluído');
    } catch (err) {
        const message = { "error": "Erro ao tentar obter users" }
        res.json(message)
    }
}

