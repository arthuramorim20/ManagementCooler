import { Router } from 'express';
import { getUser, postUser, putUser } from '../controller/controller'

const router = Router();

router.get('/users', getUser);

router.post('/new_user', postUser);

router.put('/update_user', putUser);

export default router;