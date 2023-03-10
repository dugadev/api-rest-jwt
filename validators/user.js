const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validateCreateNewUser = [

    check('name')
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 20 })
        .withMessage('name is required'),

    check('lastname')
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 20 })
        .withMessage('lastname is required'),

    check('username')
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 20 })
        .withMessage('username is required'),

    check('password')
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 20 })
        .withMessage('password is required'),

    check('email')
        .exists()
        .notEmpty()
        .isEmail()
        .isLength({ min: 5, max: 50 })
        .withMessage('email is required'),

    check('age')
        .exists()
        .notEmpty()
        .isNumeric()
        .withMessage('age is required'),

    (req, res, next) => {

        return validateResults(req, res, next)
    }

];

const validateLogin = [
    check('username')
        .exists()
        .notEmpty()
        .withMessage('username is required'),

    check('password')
        .exists()
        .notEmpty()
        .withMessage('username is required'),

]
module.exports = {
    validateCreateNewUser,
    validateLogin
}

