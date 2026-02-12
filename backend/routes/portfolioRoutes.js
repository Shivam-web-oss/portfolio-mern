import express from 'express';
import {
  getPortfolio,
  createPortfolio
} from '../controllers/portfolioController.js';

const router = express.Router();

router.get('/', getPortfolio);
router.post('/', createPortfolio);

export default router;
