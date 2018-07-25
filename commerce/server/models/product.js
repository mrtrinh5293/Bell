var	mongoose = require("mongoose");
    Schema = mongoose.Schema;
    
var ProductSchema = new mongoose.Schema({
    name: {type: String, required:[true, "Enter yo name hobo"], minlength: 3, maxlength:25,},
    qty: {type: Number, required:[true, "Enter quantity yoyo"]},
    price: {type: Number, required:[true, "Enter price yoyo"]},
    
}, {timestamps: true});

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;