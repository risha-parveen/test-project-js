// implement fibonacci series

function fibonacci(n) {
    /**
     * Generate a list of the first n Fibonacci numbers.
     * @param {number} n - The number of terms in the Fibonacci series to generate.
     * @returns {number[]} - An array containing the first n terms of the Fibonacci series.
     */
    if (n <= 0) {
        return [];
    }

    const series = [0, 1];
    while (series.length < n) {
        series.push(series[series.length - 1] + series[series.length - 2]);
    }

    return series.slice(0, n);
}

// Example usage
console.log(fibonacci(10));
