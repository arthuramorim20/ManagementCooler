import { Router } from 'express';
import { getCoolers, postCoolers, updateCoolers, deleteCoolers } from '../controller/controller';
import { getUser ,postUser, updateUser, deleteUser } from '../controller/controllerUser'

const router = Router();

router.get('/coolers', getCoolers);

router.post('/new_cooler', postCoolers);

router.put('/update_cooler', updateCoolers);

router.delete('/delete_cooler', deleteCoolers);

router.get('/users', getUser);

router.post('/new_users', postUser);

router.put('/update_users', updateUser);

router.delete('/delete_users', deleteUser);



export default router;