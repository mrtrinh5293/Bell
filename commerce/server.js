let express = require("express");
	app = express();
	path = require('path');
	session = require('express-session');
	bodyparser = require('body-parser');
	port = 8888;
	routes = require("./server/config/routes.js");

require("./server/config/mongoose.js");

app.use(bodyparser.urlencoded({ extended: true })); 
app.use(bodyparser.json()); //We are parsing json data.
app.use(express.static(path.join(__dirname + "/client/dist/client")));

app.use(session({
	secret: 'nohomobut...',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));

routes(app);

app.listen(port, () => {
    console.log("listenning on port 8888")
})