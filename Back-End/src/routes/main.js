import express from 'express';
import {listarUser, criarUser} from '../controller/controller.js';
const router = express();


router.post('/new_user', criarUser);

router.get('/', listarUser);


export default router;
