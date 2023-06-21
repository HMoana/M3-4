import express from 'express';
import { createQuote, getCarQuote } from '../controllers/carQuoteController';

const router = express.Router();

router.post('/calculateQuote', createQuote);

router.post("/QuoteByID/id:", getCarQuote);

export default router;