import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);
router.post('/novo-usuario', UserController.userForm)
router.get('/usuario/:id/mais', UserController.addAge)
router.get('/usuario/:id/menos', UserController.decAge)
router.get('/usuario/:id/excluir', UserController.delAge)

export default router;