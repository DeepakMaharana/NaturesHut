const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute window
const MAX_REQUESTS = 5; // Max number of requests per window

// In-memory store (replace with a persistent storage solution for production)
const requestLogs = {};

const rateLimiter = (req, res, next) => {
  const ip = req.ip; // Get client IP address
  const currentTime = Date.now(); // Get current timestamp

  // Initialize or update the request log for the IP
  if (!requestLogs[ip]) {
    requestLogs[ip] = {
      requests: 1,
      firstRequestTime: currentTime,
    };
  } else {
    requestLogs[ip].requests += 1;
  }

  // Calculate the time since the first request
  const timeElapsed = currentTime - requestLogs[ip].firstRequestTime;

  // Reset request count if time window has passed
  if (timeElapsed > RATE_LIMIT_WINDOW) {
    requestLogs[ip].requests = 1;
    requestLogs[ip].firstRequestTime = currentTime;
  }

  // If the number of requests exceeds the limit, block the request
  if (requestLogs[ip].requests > MAX_REQUESTS) {
    return res.status(429).json({
      message: 'Too many requests, please try again after a minute.',
    });
  }

  // Allow request if under the rate limit
  next();
};

module.exports = rateLimiter;