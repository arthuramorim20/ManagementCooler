import { Router } from 'express';
import { getUser, postUser } from '../controller/controller'

const router = Router();

router.get('/users', getUser);

router.post('/new_user', postUser);

export default router;