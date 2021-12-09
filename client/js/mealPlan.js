var jsonBMRData = {
    user_id: localStorage.getItem("user_id")
  
}

$.ajax ({                                         
    url: 'http://localhost:2161/mealPlan-bmr',
    type: 'get',
    data: jsonBMRData,
    success: function(response) {
        var returnData = JSON.parse(response);
        if (returnData.msg === "SUCCESS!") {
           // console.log("Submit success");
           // localStorage.setItem("user_id" , returnData.data[0].user_id);
            console.log(JSON.stringify(returnData.data[0].user_id));
            //BMRCalculations(jsonBMRData);


            BMRCalculations(returnData.data);


            //$("#get-data").html(returnData.data);
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

    function BMRCalculations( jsonBMRData ) {
        // var male_bmr;
        // male_bmr = Math.round((13.397 * jsonBMRData[0].user_weight) + (4.799 * jsonBMRData[0].user_height) - (5.677 * jsonBMRData[0].user_age) + 88.362);
        // //console.log("Male BMR has been calculated");
        
        // var female_bmr;
        // female_bmr = Math.round((9.247 * jsonBMRData[0].user_weight) + (3.098 * jsonBMRData[0].user_height) - (4.330 * jsonBMRData[0].user_age) + 447.593);
        //     //console.log("Female BMR has been calculated");
            

        // if (jsonBMRData[0].user_gender_male == true) {
        //     console.log("Male BMR has been calculated");
        //     document.getElementsByClassName('male-bmr')[0].innerHTML = male_bmr + " calories";
        // }
        
        // else if (jsonBMRData[0].user_gender_female) {
        //     console.log("Female BMR has been calculated");
        //     document.getElementsByClassName('female-bmr')[0].innerHTML = female_bmr + " calories";
            
        // }

        if(jsonBMRData[0].user_gender_male) {

            var male_bmr;
            male_bmr = Math.round((13.397 * jsonBMRData[0].user_weight) + (4.799 * jsonBMRData[0].user_height) - (5.677 * jsonBMRData[0].user_age) + 88.362);
            console.log("Male BMR has been calculated");
            return document.getElementsByClassName('male-bmr')[0].innerHTML = male_bmr + " calories";
            
        }
        else if (jsonBMRData[0].user_gender_female) {
            var female_bmr;
            female_bmr = Math.round((9.247 * jsonBMRData[0].user_weight) + (3.098 * jsonBMRData[0].user_height) - (4.330 * jsonBMRData[0].user_age) + 447.593);
            console.log("Female BMR has been calculated");
            return document.getElementsByClassName('female-bmr')[0].innerHTML = female_bmr + " calories";
        }   
        
    };


    $.ajax ({                                         
        url: 'http://localhost:2161/mealPlan-survey',
        type: 'get',
        data: jsonBMRData,
        success: function(response) {
            var returnData = JSON.parse(response);
            if (returnData.msg === "SUCCESS!") {
               // console.log("Submit success");
               // localStorage.setItem("user_id" , returnData.data[0].user_id);
                console.log(JSON.stringify(returnData.data[0].user_id));
                console.log("Producing food suggestions");

                foodSuggestions(returnData.data);


                //$("#get-data").html(returnData.data);
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

    // switch (jsonBMRData) {
    //     case jsonBMRData[0].muscle_aches == true:
    //         var muscleAchesFood;
    //         muscleAchesFood = "Salmon";
    //         document.getElementsByClassName('muscle-aches')[0].innerHTML = muscleAchesFood;
    //         break;
    //     case jsonBMRData[0].fatigue:
    //         var fatigueFood;
    //         fatigueFood = "Bananas";
    //         document.getElementsByClassName('fatigue')[0].innerHTML = fatigueFood;
    //         break;
    //     case jsonBMRData[0].gi_issues:
    //         var giIssuesFood;
    //         giIssuesFood = "Apples";
    //         document.getElementsByClassName('gi-issues')[0].innerHTML = giIssuesFood;
    //         break;
    //     case jsonBMRData[0].headaches:
    //         var headachesFood;
    //         headachesFood = "Brown Rice";
    //         document.getElementsByClassName('headaches')[0].innerHTML = headachesFood;
    //         break;
    //     case jsonBMRData[0].depression:
    //         var depressionFood;
    //         depressionFood = "Salmon";
    //         document.getElementsByClassName('depression')[0].innerHTML = depressionFood;
    //         break;
    //     case jsonBMRData[0].anxiety:
    //         var anxietyFood;
    //         anxietyFood = "Salmon";
    //         document.getElementsByClassName('anxiety')[0].innerHTML = anxietyFood;
    //         break;
    //     case jsonBMRData[0].mood_swings:
    //         var moodSwingsFood;
    //         moodSwingsFood = "Salmon";
    //         document.getElementsByClassName('mood-swings')[0].innerHTML = moodSwingsFood;
    //         break;
    //     case jsonBMRData[0].sleep:
    //         var sleepFood;
    //         sleepFood = "Salmon";
    //         document.getElementsByClassName('sleep')[0].innerHTML = sleepFood;
    //         break;
    //     default:
    //         console.log("Error");

    // };

    function foodSuggestions( jsonBMRData ) {
        if (jsonBMRData[0].muscle_aches){
            console.log("Muscle Aches was selected by user");
            var muscleAchesFood = "Salmon";
            return document.getElementsByClassName('muscle-aches')[0].innerHTML = muscleAchesFood;
        }
        
        if (jsonBMRData[0].fatigue){
            console.log("Fatigue was selected by user");
            var fatigueFood;
            fatigueFood = "Bananas";
            return document.getElementsByClassName('fatigue')[0].innerHTML = fatigueFood;
        }
        if (jsonBMRData[0].gi_issues) {
            console.log("GI Issues was selected by user")
            var giIssuesFood;
            giIssuesFood = "Apples";
            return document.getElementsByClassName('gi-issues')[0].innerHTML = giIssuesFood;
        }
        if (jsonBMRData[0].headaches) {
            console.log("Headaches was selected by user")
            var headachesFood;
            headachesFood = "Brown Rice";
            return document.getElementsByClassName('headaches')[0].innerHTML = headachesFood;
        }
        if (jsonBMRData[0].depression) {
            console.log("Depression was selected by user");
            var depressionFood;
            depressionFood = "Salmon";
            return document.getElementsByClassName('depression')[0].innerHTML = depressionFood;
        }
        if (jsonBMRData[0].anxiety) {
            console.log("Anxiety was selected by user");
            var anxietyFood;
            anxietyFood = "Salmon";
            return document.getElementsByClassName('anxiety')[0].innerHTML = anxietyFood;
        }
        if (jsonBMRData[0].mood_swings) {
            console.log("Mood Swings was selected by user");
            var moodSwingsFood;
            moodSwingsFood = "Salmon";
            return document.getElementsByClassName('mood-swings')[0].innerHTML = moodSwingsFood;
        }
        else { //sleep 

        }
    };



    


