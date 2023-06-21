import {  calculateQuote,getCarQuotes,} from '../../services/carQuoteService'
import * as carQuoteService from "../../services/carQuoteService";
import app from "../../app";
import request from "supertest";

//----------------------------------------CALCULATE QUOTE------------------------------------------------------//
describe('POST /CalculateQuote', () => {  
  test('Value HIGHER than Risk', () => {
    //Arrange
    const expectedQuote = { yearlyQ: 113.88, monthlyQ: 9.49 };
    //Assert
    expect(calculateQuote(4555, 2.5)).toEqual(expectedQuote);
  });

  test('Value LOWER than Risk', () => {
    //Arrange
    const expectedQuote = { yearlyQ: 0.14, monthlyQ: 0.01 };
    //Assert
    expect(calculateQuote(3, 4.5)).toEqual(expectedQuote);
  });

  test('Value EQUAL to Risk ', () => {
    //Arrange    
    const expectedQuote = { yearlyQ: 0.25, monthlyQ: 0.02 };
    //Assert
    expect(calculateQuote(5, 5)).toEqual(expectedQuote);
  });

  test('NEGATIVE Value, possitive Risk', () => {
    //Arrange
    const result = calculateQuote(-1001, 5);
    //Assert
    expect(result).toEqual({ error: 'Invalid input. The values cannot be negative or zero' });
  });

  test('Positive value NEGATIVE Risk', () => {
    //Arrange
    const result = calculateQuote(3301, -3);
    //Assert
    expect(result).toEqual({ error: 'Invalid input. The values cannot be negative or zero' });
  });

  test('Double Negative', () => {
    //Arrange
    const result = calculateQuote(-15781, -3);
    //Assert
    expect(result).toEqual({ error: 'Invalid input. The values cannot be negative or zero' });
  });
  
 });
//--------------------------------------QUOTES BY ID------------------------------------------//
 describe('GET /QuoteByID/:id', () => {
    test("No match = error displayed", async () => {
      // Arrange
      jest.spyOn(carQuoteService, "getCarQuoteByID").mockImplementation(() => {
        throw new Error("An error occurred");
      });
  
      // Act
      const response = await request(app).get("/carQuotes/:id");
  
      // Assert
      expect(response.statusCode).toBe(404);
    });
  });
//----------------------------------------------------------------------------------------------//
// describe('Quote by ID', () => {  
//   test('Quopte by Id', async () => {
//     //Arrange
//     const expectedQuote = {id: 1, //$17500  -r2
//       yearly: 350.00,      monthly: 29.17,
//     }
//       //Arrange
//       const result = await request(app).get("/QuoteByID/id:");

//     //Assert
//     expect(result).toEqual(expectedQuote);
//   })
//  })
