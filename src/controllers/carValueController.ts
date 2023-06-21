import { Request, Response } from "express";
import * as carValueService from "../services/carValueService";

export const getCarValues = (res: Response) => {
  try {
    const carValues = carValueService.getCarValues();
    res.send(carValues);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const createCarValue = (req: Request, res: Response) => {
  const model = req.body.model;
  const year = req.body.year;

  if (!model || !year) {
    res.status(400).json({
      error: "Sorry something went wrong! Have you filled both fields?",
    });
    return;
  }

  try {
    const newCarValue = carValueService.createCarValue(model, year);
    res.send(newCarValue);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getCarValueById = (req: Request, res: Response) => {
  const carValueId = parseInt(req.params.id);

  try {
    const matchedCarValue = carValueService.getCarValueById(carValueId);

    if (!matchedCarValue) {
      res.status(404).send("Sorry can't seem to generate a car value");
      return;
    }

    res.send(matchedCarValue);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const calculateCarValueById = (req: Request, res: Response) => {
  const carValueId = parseInt(req.params.id);

  try {
    const result = carValueService.calculateCarValueById(carValueId);

    if (typeof result === "number") {
      res.json({ car_value: result });
    } else {
      res.status(404).send(result.error);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

export const calculateCarValue = (req: Request, res: Response) => {
  const model = req.body.model;
  const year = req.body.year;

  if (!model || !year) {
    res.status(400).json({
      error: "Sorry something went wrong! Have you filled both fields?",
    });
    return;
  }

  try {
    const carValue = carValueService.calculateCarValue(model, year);
    res.json({ car_value: carValue });
  } catch (e) {
    res.status(500).send(e);
  }
};

export const calculateCarValueIgnoringNumbers = (
  req: Request,
  res: Response
) => {
  const model = req.body.model;
  const year = req.body.year;

  if (!model || !year) {
    res.status(400).json({
      error: "Sorry something went wrong! Have you filled both fields?",
    });
    return;
  }

  try {
    const carValue = carValueService.calculateCarValueIgnoringNumbers(
      model,
      year
    );
    res.json({ car_value: carValue });
  } catch (e) {
    res.status(500).send(e);
  }
};
