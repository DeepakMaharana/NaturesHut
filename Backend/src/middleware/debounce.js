// In-memory store (replace with a persistent storage solution for production)
const debounceTimers = {};

const debounceMiddleware = (delay) => {
  return (req, res, next) => {
    const key = req.ip; // Use IP address to identify the client (or use a user-specific ID if applicable)

    // Clear any existing timeout for this client
    if (debounceTimers[key]) {
      clearTimeout(debounceTimers[key]);
    }

    // Create a new timeout that delays the next action
    debounceTimers[key] = setTimeout(() => {
      delete debounceTimers[key]; // Clean up the timer after processing
      next(); // Proceed to the actual route handler
    }, delay);
  };
};

module.exports = debounceMiddleware;