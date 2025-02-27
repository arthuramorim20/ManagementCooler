import express from 'express';
import cors from 'cors';
import { listarUser, criarUser, updateUser, deleteUser } from '../controller/controller.js';
const router = express();


router.post('/new_user', cors(), criarUser);

router.get('/users', cors(), listarUser);

router.put('/update_user', cors(), updateUser);

router.delete('/deleteUser', cors(), deleteUser)


export default router;
