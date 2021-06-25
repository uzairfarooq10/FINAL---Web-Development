var mongoose = require('mongoose');
var Joi = require('@hapi/joi');

const productSchema = mongoose.Schema({
    teamA: String,
    teamB: String,
    date: String,
    city: String,
});

var Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
    const schema = Joi.object({
        teamA: Joi.string().min(3).max(100).required(),
        teamB: Joi.string().min(3).max(100).required(),
        date: Joi.string().min(3).required(),
        city: Joi.string().min(3).max(100).required(),
    })
    return schema.validate(data , {abortEarly:true});
}

module.exports.Product = Product;
module.exports.validate = validateProduct;