function validateEmail(email) {
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }
    return true;
}

console.log(validateEmail('sid'));