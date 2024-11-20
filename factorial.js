function factorial(n) {
    /**
     * Calculate the factorial of a non-negative integer n.
     * @param {number} n - The number to calculate the factorial for.
     * @returns {number} - The factorial of the number n.
     * @throws {Error} - Throws an error if n is not a non-negative integer.
     */
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n < 0) {
        throw new Error("n must be a non-negative integer.");
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

module.exports = { factorial };
