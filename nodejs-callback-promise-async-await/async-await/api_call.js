// Asynchronous function that returns a Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id: userId, username: 'john_doe' };
      if (userData) {
        resolve(userData);  // Resolve the Promise with data
      } else {
        reject('User not found');  // Reject the Promise with an error
      }
    }, 1000);
  });
}

// Using async/await to fetch and handle user data
async function getUserData(userId) {
  try {
    const userData = await fetchUserData(userId);  // Wait for the Promise to resolve
    console.log('User data:', userData);
  } catch (error) {
    console.error('Error:', error);  // Handle any errors that occur during the Promise
  }
}

// Calling the async function
getUserData(123);
