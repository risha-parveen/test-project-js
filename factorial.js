function factorial(n) {
    /**
     * Calculate the factorial of a non-negative integer n.
     * @param {number} n - The number to calculate the factorial for.
     * @returns {number} - The factorial of the number n.
     */
    if (n < 0) {
        throw new Error("n must be a non-negative integer.");
    }
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

module.exports = { factorial };
