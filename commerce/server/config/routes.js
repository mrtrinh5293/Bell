var path = require("path"),
	products = require("../controllers/products");

    // routes are first checked here, in Express

module.exports = function(app) {
	app.get("/products", products.index);
	app.post("/products", products.create);
	app.get("/products/:id", products.get);
	app.delete("/products/:id", products.delete);
    app.patch("/products/:id", products.update);
    
    // if no Express routes match, go back to Angular
	app.all("*", (req,res,next)=>{
		res.sendFile(path.resolve("./client/dist/client/index.html"))
	});
}