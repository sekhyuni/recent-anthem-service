import express from 'express';

import MainRouter from './mainRouter';
import UserRouter from './userRouter';
import MusicRouter from './musicRouter';
import TopMusicRouter from './topMusicRouter';

const router = express.Router();

router.get('/', MainRouter);

// User CRUD Logic
router.post('/auth/signup', UserRouter.create);
router.get('/user/:userId', UserRouter.read);
router.put('/user/:userId', UserRouter.update);
router.delete('/user/:userId', UserRouter.delete);

// Music CRUD Logic
router.post('/music', MusicRouter.create);
router.get('/music', MusicRouter.read);
// router.put('/music/:title', MusicRouter.update);
// router.delete('/music/:title', MusicRouter.delete);

// Top Music Read Logic
router.get('/music/top', TopMusicRouter.read);

export default router;
