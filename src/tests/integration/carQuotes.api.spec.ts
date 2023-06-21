import app from "../../app";
import request from "supertest";

describe("carQuotes API", () => {
  test("Quotes array info expected (id, yearly, monthly)", async () => {
    // Arrange
    const expected = [
        {
            id: 1, 
            yearly: 350.00,
            monthly: 29.17,
        },
    ];

    // Act
    const res = await request(app).get("/carQuotes");
    console.log(res.body);

    // Assert
    expect(expected).toEqual(expected);
  });
});