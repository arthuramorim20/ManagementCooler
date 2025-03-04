import express from 'express';
import { listarUser, criarUser, updateUser, deleteUser } from '../controller/controller.js';
const router = express();


router.post('/new_user', criarUser);

router.get('/users' ,listarUser);

router.put('/update_user' ,updateUser);

router.delete('/deleteUser' ,deleteUser);


export default router;
