import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";

describe('add', () => {
  test('should add two positives number', () => {
    //! 1. Arrange
    const a = 1;
    const b = 2;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });

  test('should add two negative numbers', () => {
    //! 1. Arrange
    const a = -1;
    const b = -2;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });

});

describe('subtract', () => {
  test('la resta de dos numeros postivos', () => {
    const a = 4;
    const b = 2;

    const result = subtract(a, b);

    expect(result).toBe(a - b)
  })

  test('la resta de dos numeros negativos', () => {
    const a = -2;
    const b = -2;

    const result = subtract(a, b);

    expect(result).toBe(0)
  })
})

describe('multiply', () => {
  test('multiplicacion de dos numeros positivos', () => {
    const a = 5;
    const b = 6;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  })

  test('multiplicacion de dos numeros negativos', () => {
    const a = -5;
    const b = -6;

    const result = multiply(a, b);

    expect(result).toBe(30);
  });

})

describe('divide', () => {
  test('should divide two positive numbers', () => {
    const a = -5;
    const b = -6;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  })
})