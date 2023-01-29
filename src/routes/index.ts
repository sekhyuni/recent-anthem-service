import express from 'express';

import MainRouter from './mainRouter';
import UserRouter from './userRouter';

const router = express.Router();

router.get('/welcome', MainRouter);

// User CRUD Logic
router.post('/auth/signup', UserRouter.create);
router.get('/user/:userId', UserRouter.read);
router.put('/user/:userId', UserRouter.update);
router.delete('/user/:userId', UserRouter.delete);

export default router;
