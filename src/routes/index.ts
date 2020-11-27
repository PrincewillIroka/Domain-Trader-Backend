import express from 'express';
import AuthRoutes from './AuthRoutes';

const router = express.Router();

router.use('/auth', AuthRoutes);

export default router;
