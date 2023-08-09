import { Router } from 'express';
import {getTasks, createTask, getTask} from "../controllers/tasks.controller";

const router = Router();

router.get('/tasks', getTasks);
router.get('/tasks/count', (req, res )=> res.send('Hello Henry!!'));
router.post('/tasks', createTask);
router.get('/tasks/:id', getTask);
router.delete('/tasks/:id', (req, res )=> res.send('Hello Henry!!'));
router.put('/tasks/:id', (req, res )=> res.send('Hello Henry!!'));

export default router;