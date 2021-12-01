
$('#survey-button').click(function BMRCalculator(){
    var user_age = $('age').val();
    var user_height = $('height').val();
    var user_weight = $('weight').val();
    var user_gender_male = $('male').val();
    var user_gender_female = $('female').val();

    //BMR calculations
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
        // user_age: user_age,
        // user_height: user_height,
        // user_weight: user_weight,
        // user_gender_male: user_gender_male,
        // user_gender_female: user_gender_female
        maleBMR: maleBMR,
        femaleBMR: femaleBMR

    }

    $.ajax ({                                         
        url: 'http://localhost:2161/mealPlan',
        type: 'get',
        data: jsonBMRData,
        success: function(response) {
            var data = JSON.parse(response);
            if (data.msg === "SUCCESS!") {
                console.log("Submit success");
     //           insertSurvey(jsonSurveyData);
               
            } else if (data.msg === "Failed") {
                
            } else {
                alert(data.msg);
            }
            
        },
        error: function(err) {
            alert(err);
         }
     });




});