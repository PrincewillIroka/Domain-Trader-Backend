import express from 'express';
import AuthRoutes from './AuthRoutes';
import TraderRoutes from './TraderRoutes';

const router = express.Router();

router.use('/auth', AuthRoutes);
router.use('/trader', TraderRoutes);

export default router;
