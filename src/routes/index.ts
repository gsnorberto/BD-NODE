import { Router } from 'express'
import * as homeController from '../controllers/homeController';
import * as infoController from '../controllers/infoController';
import * as userController from '../controllers/userController';

const router = Router()

router.get('/', homeController.home);

router.get('/contato', infoController.contact);
router.get('/sobre', infoController.about);

router.get('/nome', userController.name);
router.get('/idade', userController.ageForm)
router.post('/idade-resultado', userController.ageAction)

export default router;