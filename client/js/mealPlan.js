var jsonBMRData = {
    user_id: localStorage.getItem("user_id")
    // user_gender_male: localStorage.getItem("user_gender_male"),
    // user_gender_female: localStorage.getItem("user_gender_female"),
    // user_age: localStorage.getItem("user_age"),
    // user_height: localStorage.getItem("user_height"),
    // user_weight: localStorage.getItem("user_weight")
}

$.ajax ({                                         
    url: 'http://localhost:2161/mealPlan-info',
    type: 'get',
    data: jsonBMRData,
    success: function(response) {
        var returnData = JSON.parse(response);
        if (returnData.msg === "SUCCESS!") {
           // console.log("Submit success");
           // localStorage.setItem("user_id" , returnData.data[0].user_id);
            console.log(JSON.stringify(returnData.data[0].user_id));
            BMRCalculations(jsonBMRData);
            //BMRCalculations(returnData.data);
            $("#get-data").html(jsonBMRData);
 //           insertSurvey(jsonSurveyData);
           
        } 
        // else if (data.msg === "Failed") {
            
        // } 
        else {
            alert(returnData.msg);
        }
        
    },
    error: function(err) {
        alert(err);
    }
});
// $('#get-data').click(function() {
//     var user_age = $('age').val();
//     var user_height = $('height').val();
//     var user_weight = $('weight').val();
//     var user_gender_male = $('male').val();
//     var user_gender_female = $('female').val();

//     var jsonBMRData = {
//         user_id: localStorage.getItem("user_id"),
    
//         user_age: user_age,
//         user_height: user_height,
//         user_weight: user_weight,
//         user_gender_male: user_gender_male,
//         user_gender_female: user_gender_female,
      
//     }
//     console.log("GET JSON button was clicked");

    

// });

    function BMRCalculations( jsonBMRData ) {
        if(jsonBMRData[0].user_gender_male){
            var male_bmr;
            male_bmr = (13.397 * jsonBMRData[0].user_weight) + (4.799 * jsonBMRData[0].user_height) - (5.677 * jsonBMRData[0].user_age) + 88.362;
            console.log("Male BMR has been calculated");
            return male_bmr;
        }
        else if(jsonBMRData[0].user_gender_female) {
            var female_bmr;
            female_bmr = (9.247 * jsonBMRData[0].user_weight) + (3.098 * jsonBMRData[0].user_height) - (4.330 * jsonBMRData[0].user_age) + 447.593;
            console.log("Female BMR has been calculated");
            return female_bmr;
        }
        else {
            
        }
    };
    




