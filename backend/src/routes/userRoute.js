import { Router } from 'express';
import userControler from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userControler.index); // lista usuários
router.get('/:id', userControler.show); // lista usuário
router.post('/', userControler.store);
router.put('/', loginRequired, userControler.update);
router.delete('/', loginRequired, userControler.delete);

export default router;
