function isValidEmail(email) {
    /**
     * Validate if the given string is a properly formatted email address.
     * @param {string} email - The email address to validate.
     * @returns {boolean} - True if the email address is valid, False otherwise.
     */
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
}

module.exports = { isValidEmail };
