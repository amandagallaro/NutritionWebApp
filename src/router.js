const path = require('path');

//Page Listener
var router = function(app) {
    app.get('/', function(req, res) {   //WORKS!!!
        res.status(200).sendFile(path.join(__dirname + "/../client/registerLogin.html"));
    });

   app.get('/registerLogin', function(req, res) {   //WORKS!!!
        res.status(200).sendFile(path.join(__dirname + "/../client/registerLogin.html"));
    });

    app.get('/survey', function(req, res) {     //WORKS!!!
        console.log("Getting survey");
        res.status(200).sendFile(path.join(__dirname + "/../client/survey.html"));
    })
};


module.exports = router; //export everything within the router variable