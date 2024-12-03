const logger = require('../utils/logger');

const validateRequest = (schema) => (req, res, next) => {
    try {
        schema.safeParse(req.body);
        next();
    } catch (error) {
        logger.warn('Validation failed', error);
        return res.status(400).json({
            message: 'Validation failed',
            errors: error.errors,
        });
    }
};

module.exports = validateRequest;
