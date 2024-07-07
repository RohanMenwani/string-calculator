import { StringCalculator } from "../src/stringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("5")).toBe(5);
  });

  test("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
    expect(calculator.add("4,5")).toBe(9);
  });

  test("should return the sum of multiple numbers", () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15);
  });

  test("should handle new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("should support different delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//|\n1|2|3")).toBe(6);
  });

  test("should throw an exception for negative numbers", () => {
    expect(() => calculator.add("1,2,-3,-4")).toThrow(
      "negative numbers not allowed -3, -4"
    );
  });
});
