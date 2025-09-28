import { Router } from 'express';
import contactRoutes from './contact.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Contact routes
router.use('/contact', contactRoutes);

export default router;
