import { Router } from 'express';

const router = Router();

router.get('/tasks', (req, res )=> res.send('Hello Henry!!'));
router.get('/tasks/count', (req, res )=> res.send('Hello Henry!!'));
router.post('/tasks', (req, res )=> res.send('Hello Henry!!'));
router.get('/tasks/:id', (req, res )=> res.send('Hello Henry!!'));
router.delete('/tasks/:id', (req, res )=> res.send('Hello Henry!!'));
router.put('/tasks/:id', (req, res )=> res.send('Hello Henry!!'));

export default router;