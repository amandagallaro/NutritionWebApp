const path = require('path');

//Page Listener
var router = function(app) {
    app.get('/', function(req, res) {   //WORKS!!!
        res.status(200).sendFile(path.join(__dirname + "/../client/html/registerLogin.html"));
    });

   app.get('/registerLogin', function(req, res) {   //WORKS!!!
        res.status(200).sendFile(path.join(__dirname + "/../client/html/registerLogin.html"));
    });

    app.get('/LoginImage', function(req, res) {   //WORKS!!!
        res.status(200).sendFile(path.join(__dirname + "/../client/html/LoginImage.jpeg"));
    });


    app.get('/survey', function(req, res) {     //WORKS!!!
        console.log("Getting survey");
        res.status(200).sendFile(path.join(__dirname + "/../client/html/survey.html"));
    });

    app.get('/mealPlan', function(req, res) {       //WORKS!!!
        console.log("Getting meal plan");
        res.status(200).sendFile(path.join(__dirname + "/../client/html/mealPlan.html"));
    });
};


module.exports = router; //export everything within the router variable