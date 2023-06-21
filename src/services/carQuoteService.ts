import { CarQuotesInfo, carQuotes } from "../types/carQuotesInfo";

export const calculateQuote = // Calculates a brand new Quote & adds it to the existing array, I think it's a post now.
(car_v: number, risk_r: number): { error?: string; monthlyQ?: number; yearlyQ?: number } => {
    
  if (!car_v || !risk_r) {
    return { error: 'Invalid input. Please input all fields' };

  } else if (car_v <= 0 || risk_r <= 0) {
    return { error: 'Invalid input. The values cannot be negative or zero' };

  } else if (typeof car_v !== 'number' || typeof risk_r !== 'number') {
    return { error: 'Invalid input. Make sure both fields are numbers only' };
  }
  const yearlyQ = parseFloat((car_v * risk_r / 100).toFixed(2));
  const monthlyQ = parseFloat((yearlyQ / 12).toFixed(2));
  const newCarQuote: CarQuotesInfo = {
    id: carQuotes.length + 1,   
    yearly: yearlyQ,  
    monthly: monthlyQ,}
    carQuotes.push(newCarQuote); 
  return { monthlyQ, yearlyQ };
};

export const getCarQuotes = (): CarQuotesInfo[] => { // Gets array of arrays (id:number,yearly:number,monthly:number)
  return carQuotes;
};

// export const getCarQuoteByID = ( // Gets a Quote from the carQuote array by their id
//   carQuoteId: number
// ): CarQuotesInfo | undefined => {
//   return carQuotes.find((t) => t.id === carQuoteId);
// };

export const getCarQuoteByID = (carQuoteId: number): Partial<CarQuotesInfo> | undefined => {
  const carQuote = carQuotes.find((t) => t.id === carQuoteId);
  if (carQuote) {
    const { id, monthly, yearly } = carQuote;
    return { id, monthly, yearly };
  }
  return undefined;
};