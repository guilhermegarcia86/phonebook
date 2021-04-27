const { Joi } = require('celebrate')

const bodySchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    telephone: Joi.string().required(),  
    address: Joi.string().required()
})

const pathParam = { name: Joi.string().min(3).required() } 

module.exports = {
    bodySchema,
    pathParam
}