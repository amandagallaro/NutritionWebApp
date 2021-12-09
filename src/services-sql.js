const { response } = require('express');
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
                
                    return res.status(201).send(JSON.stringify({msg: "SUCCESS!", data: results}));
                }   
                else {
                    console.log("User login failed");
                    //ADD A POP UP FOR "INVALID EMAIL/PASSWORD!" or "YOU HAVE NOT SUCCESSFULLY REGISTERED YET!"
                
             
                    return res.status(200).send(JSON.stringify({msg: "Failed"}));
                
                }

            })
        });

    // PUT function for UPDATING user data based off of user_id from register/login info
    app.put('/survey-page', function(req, res, next) {

        var user_id = req.body.user_id;
        var userData = {
            user_first_name: req.body.user_first_name,
            user_last_name: req.body.user_last_name,
            user_gender_male: req.body.user_gender_male,
            user_gender_female: req.body.user_gender_female,
            user_age: req.body.user_age,
            user_height: req.body.user_height,
            user_weight: req.body.user_weight,
            exercise_level_dropdown: req.body.exercise_level_dropdown
        };
            console.log(user_id);
            console.log(userData);
            console.log("User info: " + JSON.stringify(user_id, userData));
            //updating user table with new info based off of user_id from loginRegister
           
            connection.query('UPDATE user SET ? WHERE user_id = ?', [userData, user_id], function(err) {
                console.log("Survey callback")
                if(err) {
                    return res.status(200).send(JSON.stringify({msg: "Error: " + err}));;
                } 
                else {
                    console.log("Updating new data into user table");
                    console.log("New user info updated to user table: " + JSON.stringify(userData));
                    
                    
                    return res.status(201).send(JSON.stringify({msg:"SUCCESS"}));
                    
                }
            });
        });
    

    // POST function for inserting physical/mental survey symptoms
    app.post('/survey-page', function(req, res, next) {

        var surveyData = {
            user_id: req.body.user_id,
            muscle_aches: req.body.muscle_aches,
            fatigue: req.body.fatigue,
            gi_issues: req.body.gi_issues,
            headaches: req.body.headaches,
            depression: req.body.depression,
            anxiety: req.body.anxiety,
            mood_swings: req.body.mood_swings,
            sleep: req.body.sleep
        };
        console.log(surveyData);
        console.log("Inserting data");

        connection.query('INSERT INTO survey SET ?', surveyData, function(err){
            if(err) {
                console.log("Insert error " + err);
                return res.status(200).send(JSON.stringify({msg: "Error: " + err}));
            } 
            else {
                console.log("Inserted symtpoms into survey table");

                console.log("Newly inserted data to survey table: " + JSON.stringify(surveyData));
                        
                return res.status(201).send(JSON.stringify({msg: "SUCCESS!"}));
            }
        })

    });


    app.get('/mealPlan-bmr', function(req, res, next) {
        var user_id = req.query.user_id;
       
        console.log(user_id);
        console.log("Inserting BMR data");

        connection.query("SELECT * FROM user WHERE user_id = ?", [user_id], function(err, results){
            if(err) {
                console.log("Select error " + err);
                return res.status(200).send(JSON.stringify({msg: "Error: " + err}));
            } 
            else {
                console.log("Selected correct columns from user table");

                console.log("Selected columns from user table: " + JSON.stringify(user_id));
               
                        
                return res.status(201).send(JSON.stringify({msg: "SUCCESS!", data: results}));
            }
        });
    });


    app.get('/mealPlan-survey', function(req, res, next) {
        var user_id = req.query.user_id;
        // var bmrData = {
        //     user_id: req.body.user_id,
        //     user_age: req.body.user_age,
        //     user_height: req.body.user_height,
        //     user_weight: req.body.user_weight 
        // };
        console.log(user_id);
        console.log("Inserting survey data");

        connection.query("SELECT * FROM survey WHERE user_id = ?", [user_id], function(err, results){
            if(err) {
                console.log("Select error " + err);
                return res.status(200).send(JSON.stringify({msg: "Error: " + err}));
            } 
            else {
                console.log("Selected correct columns from survey table");

                console.log("Selected columns from survey table: " + JSON.stringify(user_id));
                
                        
                return res.status(201).send(JSON.stringify({msg: "SUCCESS!", data: results}));
            }
        });
    });


};




module.exports = services;

// app.get() and app.post() CANT have the same name

//put statement (update users (all data input) where user_id = (the user_id that user brought over))

//change gender to true/false
//alter dropdown box
//update db accordingly (update data)