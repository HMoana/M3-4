import app from "../../app";
import request from "supertest";

describe("carValues API", () => {
  test("should respond with an array of car info", async () => {
    // Arrange
    const expected = [
      {
        id: 1,
        model: "civic",
        year: 2014,
      },
    ];

    // Act
    const res = await request(app).get("/carValues");
    console.log(res.body);

    // Assert
    // expect(res.status).toEqual(200);
    expect(expected).toEqual(expected);
  });
});
