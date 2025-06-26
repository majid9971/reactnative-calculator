import { add, subtract, multiply, divide } from '../src/Calculator';

describe('Calculator operations', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('multiplies two numbers', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('divides two numbers', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test('throws error on division by zero', () => {
    expect(() => divide(4, 0)).toThrow('Division by zero');
  });
});
