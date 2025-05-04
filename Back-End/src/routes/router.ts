import { Router } from 'express';
import { getUser, postUser, updateUser, deleteUser } from '../controller/controller'

const router = Router();

router.get('/users', getUser);

router.post('/new_user', postUser);

router.put('/update_user', updateUser);

router.delete('/delete_user', deleteUser);

export default router;