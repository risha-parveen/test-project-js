function isPalindrome(s) {
    /**
     * Check if the given string is a palindrome, ignoring spaces, punctuation, and capitalization.
     * @param {string} s - The string to check.
     * @returns {boolean} - True if the string is a palindrome, False otherwise.
     */
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleaned = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car"));    