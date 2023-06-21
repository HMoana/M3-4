import { Request, Response } from 'express';
import { calculateQuote, getCarQuoteByID } from '../services/carQuoteService';

export const createQuote = (req: Request, res: Response): void => {
  const { car_value, risk_rating } = req.body;

  const quotes = calculateQuote(car_value, risk_rating);

  res.json(quotes);
};

export const getCarQuote = (req: Request, res: Response) => {
  const carQuoteId = parseInt(req.params.id);

  try {
    const carQuote = getCarQuoteByID(carQuoteId);

    if (!carQuote) {
      res.status(404).send("There seems to be no Insurance Premium under that ID");
      return;
    }

    res.send(carQuote);
  } catch (e) {
    res.status(500).send(e);
  }
};