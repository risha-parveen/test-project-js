const { fibonacci } = require('./fibonacci');

describe('Fibonacci Function Tests', () => {
    test('First ten Fibonacci numbers', () => {
        const expectedValues = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        expectedValues.forEach((expected, i) => {
            expect(fibonacci(i)).toBe(expected);
        });
    });

    test('Edge cases', () => {
        expect(fibonacci(0)).toBe(0);
        expect(fibonacci(1)).toBe(1);
    });

    test('Negative input throws an error', () => {
        expect(() => fibonacci(-1)).toThrow('Invalid input');
    });

    test('Non-integer input throws an error', () => {
        expect(() => fibonacci(5.5)).toThrow('Invalid input');
    });
});
