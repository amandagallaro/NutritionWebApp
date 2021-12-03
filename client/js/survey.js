
$('#survey-button').click(function() {          //retrieving values on submit
    var user_first_name = $('#first-name').val();
    var user_last_name = $('#last-name').val();
    var user_gender_male = $('#male').is(':checked');
    var user_gender_female = $('#female').is(':checked');
    var user_age = $('#age').val();
    var user_height = $('#height').val();
    var user_weight = $('#weight').val();
    var exercise_level_dropdown = $('#exercise-level-dropdown').val();

    var muscle_aches = $('#muscle-aches').is(':checked');
    var fatigue = $('#fatigue').is(':checked');
    var gi_issues = $('#gi-issues').is(':checked');
    var headaches = $('#headaches').is(':checked');
    var depression = $('#depression').is(':checked');
    var anxiety = $('#anxiety').is(':checked');
    var mood_swings = $('#mood-swings').is(':checked');
    var sleep = $('#sleep').is(':checked');

    var jsonUserData = {
        user_id: localStorage.getItem("user_id"),   //taking user_id corresponding with user login
        user_first_name: user_first_name,
        user_last_name: user_last_name,
        user_gender_male: user_gender_male,
        user_gender_female: user_gender_female,
        user_age: user_age,
        user_height: user_height,
        user_weight: user_weight,
        exercise_level_dropdown: exercise_level_dropdown
        
    }

    var jsonSurveyData = {
        user_id: localStorage.getItem("user_id"),
        muscle_aches: muscle_aches,
        fatigue: fatigue,
        gi_issues: gi_issues,
        headaches: headaches,
        depression: depression,
        anxiety: anxiety,
        mood_swings: mood_swings,
        sleep: sleep
    }
    
    console.log(jsonUserData);
    console.log(jsonSurveyData);
    console.log("Survey submit button fired");
                                           
    $.ajax ({                                        //ajax call for app.put('/survey-page') 
        url: 'http://localhost:2161/survey-page',
        type: 'put',
        data: jsonUserData,
        success: function(response) {
            var data = JSON.parse(response);
            if (data.msg === "SUCCESS!") {
                console.log("Submit success");
                
            //    window.location.replace('http://localhost:2161/mealPlan');
               
            } else if (data.msg === "Failed") {
                
            } else {
                alert(data.msg);
            }
            
        },
        error: function(err) {
            alert(err);
         }
     });

    // function insertSurvey(jsonSurveyData) {
        $.ajax ({                                   //ajax call for app.post('/survey')
            url: 'http://localhost:2161/survey-page',
            type: 'post',
            data: jsonSurveyData,
            success: function(response) {
                var data = JSON.parse(response);
                if (data.msg === "SUCCESS!") {
                    console.log("Submit success");
                    //localStorage.setItem("user_id" , data.data[0].user_id);

                   // location.assign('http://localhost:2161/mealPlan');
                } else {
                    alert(data.msg);
                }
               
            },
            error: function(err) {
                alert(err);
            }
       
        });


        if(user_gender_male){
            var maleBMR;
            maleBMR = (13.397 * user_weight) + (4.799 * user_height) - (5.677 * user_age) + 88.362;
            return maleBMR;
        }
        else if(user_gender_female){
            var femaleBMR;
            femaleBMR = (9.247 * user_weight) + (3.098 * user_height) - (4.330 * user_age) + 447.593;
            return femaleBMR;
        }
        else{
    
        }
    
        var jsonBMRData = {
            user_id: localStorage.getItem("user_id"),
            maleBMR: maleBMR,
            femaleBMR: femaleBMR
            // user_age: user_age,
            // user_height: user_height,
            // user_weight: user_weight,
            // user_gender_male: user_gender_male,
            // user_gender_female: user_gender_female
        }
    
        $.ajax ({                                         
            url: 'http://localhost:2161/survey-page',
            type: 'get',
            data: jsonBMRData,
            success: function(response) {
                var data = JSON.parse(response);
                if (data.msg === "SUCCESS!") {
                    console.log("Submit success");
                    console.log(jsonBMRData);
                    $("#test").html(jsonBMRData);
         //           insertSurvey(jsonSurveyData);
                    location.assign('http://localhost:2161/mealPlan');
                   
                } else if (data.msg === "Failed") {
                    
                } else {
                    alert(data.msg);
                }
                
            },
            error: function(err) {
                alert(err);
             }
         });


  
  
      return false;
 });




// $('#form').submit(function(){
//     return false;
// })

