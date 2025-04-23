import { Router } from 'express';
import { getUser, postUser, updateUser } from '../controller/controller'

const router = Router();

router.get('/users', getUser);

router.post('/new_user', postUser);

router.put('/update_user', updateUser);

export default router;