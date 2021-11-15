const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Panda21601!',
    database: 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to MySQL database!');
})


var services = function(app) {

    app.post('/register-page', function(req, res, next) {   //will match action name in HTML
        
        var inputData = {   //JSON string
            email: req.body.email,
            password: req.body.password
        };
        console.log(inputData);
        // check for unique email address
        connection.query('SELECT * FROM user WHERE email = ? ', [inputData.email], function(err, rows, fields){
            if(err) throw err;
            //if user email already exists
            if (rows.length > 0) {
               // window(JSON.stringify(alert("You have already registered with this email!")));  //doesnt work
                console.log("User exists");
                return res.status(201).send(JSON.stringify({msg: "Failed"}));
                
            }
            else { //save users data into database
                console.log("Inserting data");
                connection.query('INSERT INTO user SET ?', inputData, function(err, data){
                    if(err) {
                        console.log("insert error " + err);
                        return res.status(200).send(JSON.stringify({msg: "Error: " + err}));
                    } else {
                        console.log("Inserted new row to MySQL");
                        //window(JSON.stringify(alert("You have successfully registered!"))); //doesnt work
                        return res.status(201).send(JSON.stringify({msg: "SUCCESS!"}));
                    }
                })
                
            }
        
        })
    });

    app.get('/login-page', function(req, res, next) {
        var data = {
            email: req.query.email,
            password: req.query.password
        };
        console.log("Login Data: " + JSON.stringify(data));

        connection.query("SELECT * FROM user WHERE email = ? AND password = ?", [data.email, data.password], function(err, results) {
            console.log("Login callback");
                if(err)
                    return res.status(200).send(JSON.stringify({msg: "Error: " + err}));
                if(results.length > 0){
                    console.log("User login found");
                    console.log("Return data: " + JSON.stringify(results));
                //req.session.loggedinUser = true;
                //req.session.email = email;
                    return res.status(201).send(JSON.stringify({msg: "SUCCESS!", data: results}));
                }   
                else {
                    console.log("User login failed");
                
                //send output message to the user that they are not a registered user yet and need to register
               // window.alert("You have not registered yet!");   //doesnt work
                    return res.status(200).send(JSON.stringify({msg: "Failed"}));
                
                }

            })
        });

    app.put('/survey-page', function(req, res, next) {
        var userData = {
            user_id: req.query.user_id,
            user_first_name: req.query.user_first_name,
            user_last_name: req.query.user_last_name,
            user_age: req.query.user_age,
            user_height: req.query.user_height,
            user_weight: req.query.user_weight
        };
            console.log("User info: " + JSON.stringify(userData));
            //updating user table with new info based off of user_id from loginRegister
            //not sure if code is right!!!
            connection.query('UPDATE user SET ? WHERE user_id = ?', userData, function(err, rows) {

                console.log("Survey callback")

                if(err) {
                    return res.status(200).send(JSON.stringify({msg: "Error: " + err}));;
                } 
                else {
                    console.log("Inserting new data into user table");
                    console.log("New data inserted: " + JSON.stringify(rows));
              
                    return res.status(201).send(JSON.stringify({msg:"SUCCESS", userData:rows}));
                }
            });
        });
    };

module.exports = services;

// app.get() and app.post() CANT have the same name

//put statement (update users (all data input) where user_id = (the user_id that user brought over))