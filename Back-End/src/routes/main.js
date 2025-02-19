import express from 'express';
import listarUser from '../controller/controller.js';
const router = express();
const listar = listarUser;

router.post('/new_user', (req, res) => {
    const user = req.body;
    handlers.push(user);
    res.status(201).json("Usuário criado!")
});

router.get('/', listar);


export default router;
