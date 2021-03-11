import { Router } from 'express';
import { NaversController } from './controllers/NaversController';
import { ProjectsController } from './controllers/ProjectsController';

const router = Router();

const projectsController = new ProjectsController();
const naversController = new NaversController();


router.post('/navers', naversController.store);
router.get('/navers', naversController.index);
router.get('/navers/:id', naversController.indexId);
router.put('/navers/:id', naversController.update);
router.delete('/navers/:id', naversController.deleteId);
router.post('/projects', projectsController.store);
router.get('/projects', projectsController.index);


export { router };