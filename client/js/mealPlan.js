var jsonBMRData = {
    user_id: localStorage.getItem("user_id")
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
            console.log(JSON.stringify(returnData.data));
            BMRCalculations(returnData.data);
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

     function BMRCalculations(userData) {
        if(userData[true].user_gender_male){
            var male_bmr;
            male_bmr = (13.397 * userData[0].user_weight) + (4.799 * userData[0].user_height) - (5.677 * userData[0].user_age) + 88.362;
            return male_bmr;
        }
        else if(userData[true].user_gender_female){
            var female_bmr;
            female_bmr = (9.247 * userData[0].user_weight) + (3.098 * userData[0].user_height) - (4.330 * userData[0].user_age) + 447.593;
            return female_bmr;
        }
        else{
            
        }
    };
    




