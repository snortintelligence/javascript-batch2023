console.log('Starts');

function validateEmail(email) {
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }
    return true;
}


try {
  console.log(validateEmail('sid'));
} catch (error) {
  console.error('Error :: ',error.message);
}

console.log('Ends');