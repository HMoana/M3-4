const carValueService = require("../../services/carValueService");

describe("carValueService", () => {
  describe("getCarValues", () => {
    test("should return an array of car values", () => {
      // Arrange
      // no set up required for this test
      // Act
      const carValues = carValueService.getCarValues();
      // Assert
      expect(Array.isArray(carValues)).toBe(true);
    });
  });

  describe("createCarValue", () => {
    test("should create a new car value and add it to the array of car values", () => {
      // Arrange
      const model = "sonata";
      const year = 2013;
      // Act
      const newCarValue = carValueService.createCarValue(model, year);
      // Assert
      expect(newCarValue).toEqual({
        id: expect.any(Number),
        model,
        year,
      });
      // Act
      const carValues = carValueService.getCarValues();
      // Assert
      expect(carValues).toContain(newCarValue);
    });
  });

  describe("getCarValueById", () => {
    test("should return the car value with the matching id", () => {
      // Arrange
      const model = "camry";
      const year = 2011;
      const newCarValue = carValueService.createCarValue(model, year);
      // Act
      const matchedCarValue = carValueService.getCarValueById(newCarValue.id);
      // Assert
      expect(matchedCarValue).toEqual(newCarValue);
    });
  });

  describe("calculateCarValueById", () => {
    test("should calculate the car value for a car with a given id", () => {
      // Arrange
      const model = "civic";
      const year = 2014;
      const newCarValue = carValueService.createCarValue(model, year);

      // Act
      const result = carValueService.calculateCarValueById(newCarValue.id);

      // Assert
      expect(result).toBe(6614);
    });
  });

  describe("calculateCarValueIgnoringNumbers", () => {
    test("should return an error object if no car value with the given id was found", () => {
      // Arrange
      const carValueId = 999;

      // Act
      const result = carValueService.calculateCarValueById(carValueId);

      // Assert
      expect(result).toStrictEqual({
        error: `No car value found with id ${carValueId}`,
      });
    });
  });

  describe("calculateCarValue", () => {
    test("should calculate correct scenario of car value based on the model and year", () => {
      // Arrange
      const model = "civic";
      const year = 2014;

      // Act
      const carValue = carValueService.calculateCarValue(model, year);

      // Assert
      expect(carValue).toBe(6614);
    });

    test("should calculate car value based on the model and year. In the scenario numbers are included in business rules for model", () => {
      // Arrange
      const model = "model 3";
      const year = 2022;

      // Act
      const carValue = carValueService.calculateCarValue(model, year);

      // Assert
      expect(carValue).toBe(7222);
    });

    test("should calculate car value based on the model input being number only. In the scenario where numbers only are included in business rules", () => {
      // Arrange
      const model = "911";
      const year = 2020;

      // Act
      const carValue = carValueService.calculateCarValue(model, year);

      // Assert
      expect(carValue).toBe(3120);
    });

    test("should take in model but ignore symbols, in a scenario where end user uses symbols", () => {
      // Arrange
      const model = "altima*";
      const year = 2019;
      // Act
      const carValue = carValueService.calculateCarValue(model, year);

      // Assert
      expect(carValue).toBe(7619);
    });

    test("should throw an error message when model value is empty", () => {
      // Arrange
      const model = "";
      const year = 2000;
      const expected = { error: "Model is required." };

      // Act
      const carValue = carValueService.calculateCarValue(model, year);

      // Assert
      expect(carValue).toStrictEqual(expected);
    });

    test("should throw an error message when year value is empty (null)", () => {
      // Arrange
      const model = "corolla";
      const year = null;
      const expected = { error: "Year is required." };

      // Act
      const carValue = carValueService.calculateCarValue(model, year);

      // Assert
      expect(carValue).toStrictEqual(expected);
    });

    test("should throw an error message when model and year are both empty (null)", () => {
      // Arrange
      const model = null;
      const year = null;
      const expected = { error: "Both model and year are required." };

      // Act
      const carValue = carValueService.calculateCarValue(model, year);

      // Assert
      expect(carValue).toStrictEqual(expected);
    });
  });

  test("should ignore multiple numbers in model string in the scenario based on business rule (numbers not included)", () => {
    // Arrange
    const model = "a4b6c8";
    const year = 2018;

    // Act
    const carValue = carValueService.calculateCarValueIgnoringNumbers(
      model,
      year
    );

    // Assert
    expect(carValue).toBe(2618);
  });

  test("should take in model & ignore number/s in the scenario based on business rule (numbers not included)", () => {
    // Arrange
    const model = "a4";
    const year = 2018;

    // Act
    const carValue = carValueService.calculateCarValueIgnoringNumbers(
      model,
      year
    );

    // Assert
    expect(carValue).toBe(2118);
  });
});
