var express = require('express');
const {Product} = require('../../models/product');
const validateProduct = require('../../middlewares/validateProduct');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
var router = express.Router();

/* GET Products. */
router.get('/',  async function(req, res, next) {
    console.log(req.user);
    let products = await Product.find(); 
    return res.send(products);
});

/* GET Single Products. */
router.get('/:id', async function(req, res, next) {
    try {
        let product = await Product.findById(req.params.id); 
        if (product) return res.send(product);
        else res.status(400).send("This record is not present");
    } catch (error) {
        console.log(error);
        return res.status(400).send("Invalid ID");
    }
    
});

/* Edit Products. */
// auth,admin,
router.put('/:id', async function(req, res, next) {
    let product = await Product.findById(req.params.id);
    product.teamA = req.body.teamA; 
    if (product.teamA != req.body.teamB) {product.teamB = req.body.teamB; }
    else return res.status(400).send("Teams Must be different");
    product.date = req.body.date; 
    product.city = req.body.city; 
    await product.save();
    return res.send(product)
});

/* delete Products. */
// auth,admin,
router.delete('/:id', async function(req, res, next) {
    let product = await Product.findByIdAndDelete(req.params.id);
    await product.save();
});

/* add Products. */
// auth,admin,
router.post('/',validateProduct, async function(req, res) {
    
    let product = new Product();
    product.teamA = req.body.teamA; 
    // product.teamB = req.body.teamB; 
    if (product.teamA != req.body.teamB) {product.teamB = req.body.teamB; }
    else return res.status(400).send("Teams Must be different");
    product.date = req.body.date; 
    product.city = req.body.city;
    await product.save();
    return res.send(product);
});

module.exports = router;
