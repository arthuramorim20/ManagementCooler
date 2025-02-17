import express from 'express';
const router = express();

const handlers = [];

router.post('/new_user', (req, res) => {
    const user = req.body;
    handlers.push(user);
    res.status(201).json("Usuário criado!")
});

router.get('/', (req, res) => {
    res.status(200).json(handlers);
});


export default router;
