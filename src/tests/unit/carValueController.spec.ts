import request from "supertest";
// import { Server } from "http";
import app from "../../app";
import * as carValueService from "../../services/carValueService";

describe("GET /carValues", () => {
  test("should respond with error if array not received", async () => {
    // Arrange
    jest.spyOn(carValueService, "getCarValues").mockImplementation(() => {
      throw new Error("An error occurred");
    });

    // Act
    const response = await request(app).get("/carValues");

    // Assert
    expect(response.statusCode).toBe(500);
  });
});

describe("should create an id for the car info model and year", () => {
  test("should respond with error if array not received fields are not filled", async () => {
    // Arrange
    jest.spyOn(carValueService, "createCarValue").mockImplementation(() => {
      throw new Error("An error occurred");
    });

    // Act
    const response = await request(app).get("/carValues");

    // Assert
    expect(response.statusCode).toBe(500);
  });
});

describe("should get the car info using assigned id", () => {
  test("should respond with error if the id doesn't match", async () => {
    // Arrange
    jest.spyOn(carValueService, "getCarValueById").mockImplementation(() => {
      throw new Error("An error occurred");
    });

    // Act
    const response = await request(app).get("/carValues/:id");

    // Assert
    expect(response.statusCode).toBe(500);
  });
});

describe("should get calculated car value using id", () => {
  test("should respond with error if the id doesn't match", async () => {
    // Arrange
    jest
      .spyOn(carValueService, "calculateCarValueById")
      .mockImplementation(() => {
        throw new Error("An error occurred");
      });

    // Act
    const response = await request(app).get("/carValues/:id/calculate");

    // Assert
    expect(response.statusCode).toBe(500);
  });
});

describe("POST /carValue", () => {
  describe("should calculate car value based on car info model and year", () => {
    test("should respond with error if car value can't be calculated", async () => {
      // Arrange
      jest
        .spyOn(carValueService, "calculateCarValue")
        .mockReturnValue({ error: "An error occurred" });

      // Act
      const response = await request(app).post("/carValue");

      // Assert
      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe(
        "Sorry something went wrong! Have you filled both fields?"
      );
    });
  });
});

describe("POST /calculateCarValueIgnoringNumbers", () => {
  describe("should calculate car value based on car info model and year but ignore numbers in model", () => {
    test("should respond with error if car value can't be calculated", async () => {
      // Arrange
      jest
        .spyOn(carValueService, "calculateCarValueIgnoringNumbers")
        .mockReturnValue(NaN);

      // Act
      const response = await request(app).post("/carValue");

      // Assert
      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe(
        "Sorry something went wrong! Have you filled both fields?"
      );
    });
  });
});
