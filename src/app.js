const express = require('express');
const cors = require('cors');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');


app.use(cors());

app.use((req, res, next) => {   //helps for no http errors
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.json()); //for json strings
app.use(bodyParser.urlencoded({ extended : false }));  

app.use(session ({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use("/client", express.static(path.resolve(__dirname + "/../client/")));//for finding root directory

var server;
var port = 2161; 


// Listen
server = app.listen(port, function(err) {
    if (err) throw err;

    console.log("Listening on port: " + port);
});

// Page Listeners
var router = require("./router.js");
router(app);

// Services Listener - MySQL
var services = require("./services-sql.js");
services(app);




