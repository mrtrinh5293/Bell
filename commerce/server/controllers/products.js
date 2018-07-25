var Product = require("../models/product");



module.exports = {
	index: (req, res) =>{
		Product.find({}, (err,products)=>{
			if(err){
				res.status(401).json({err:"Can not get them all"});
			}
			else{
				res.json(products);
			}	
		});
	},
	create: (req,res) =>{
		console.log(req.body);
		let product = new Product(req.body);
		Product.findOne({name: req.body.name}, (err, response)=>{
			console.log(response);
			if(response){
				return res.status(400).json({err:"Product with that name already exists"});
			} 
			else{
				product.save((err)=>{
					if(err){
						return res.status(400).json({err:"Product save error"});
					}
					else{
						res.json(product);
					}
				})
			}	
		})
	},
	get: (req,res) =>{
		Product.findOne({_id: req.params.id},(err, product)=>{
			if(err){
				console.log("get error");
				res.status(401).json({err:"Can not retieve data"});
			}
			else{
				res.json(product);
			}
		})
	},
	update: (req,res) =>{
		let update_product = Product.findOne({_id: req.params.id}, (err,product)=>{
			if(err){
				res.status(401).json({err});
			}
			else{
				update_product.update({name: req.body.name, qty: req.body.qty, price: req.body.price}, (err)=>{
					if(err){
						res.status(401).json({err});
					}
					else{
						res.json({});
					}
				})
			}
		})
	},
	delete: (req,res)=>{
		Product.remove({_id: req.params.id}, (err)=>{
			if(err){
				res.status(401).json({err});
			}
			else{
				res.json({});
			}
		});
	},
}