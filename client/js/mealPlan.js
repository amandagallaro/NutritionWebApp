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

            displayPersonalInfo(returnData.data); //TO DISPLAY ALL PERSONAL INFO

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

        if(jsonBMRData[0].user_gender_male == "true") {
            var male_bmr;
            male_bmr = Math.round((13.397 * jsonBMRData[0].user_weight) + (4.799 * jsonBMRData[0].user_height) - (5.677 * jsonBMRData[0].user_age) + 88.362);
            console.log("Male BMR has been calculated");
            return document.getElementsByClassName('male-bmr')[0].innerHTML = male_bmr + " calories";
        }
        else if(jsonBMRData[0].user_gender_female == "true") {
            var female_bmr;
            female_bmr = Math.round((9.247 * jsonBMRData[0].user_weight) + (3.098 * jsonBMRData[0].user_height) - (4.330 * jsonBMRData[0].user_age) + 447.593);
            console.log("Female BMR has been calculated");
            return document.getElementsByClassName('female-bmr')[0].innerHTML = female_bmr + " calories";
            
        }
        
    };

    function displayPersonalInfo(jsonBMRData) {
        var user_first_name = jsonBMRData[0].user_first_name;
        document.getElementsByClassName('congratulations')[0].innerHTML = "Welcome back " + user_first_name + "!";

        var user_age = jsonBMRData[0].user_age;
        document.getElementsByClassName('age')[0].innerHTML = user_age;

        var user_height = jsonBMRData[0].user_height;
        document.getElementsByClassName('height')[0].innerHTML = user_height + " cm";

        var user_weight = jsonBMRData[0].user_weight;
        document.getElementsByClassName('weight')[0].innerHTML = user_weight + " lbs";

        var exercise_level_dropdown = jsonBMRData[0].exercise_level_dropdown;
        document.getElementsByClassName('exercise-level')[0].innerHTML = exercise_level_dropdown;
       
        if (jsonBMRData[0].user_gender_male == "true"){
            var male = "Male";
            document.getElementsByClassName('gender')[0].innerHTML = male;
        }
        else {
            var female = "Female";
            document.getElementsByClassName('gender')[0].innerHTML = female;
        }
    };






    $.ajax ({                                         
        url: 'http://localhost:2161/mealPlan-survey',
        type: 'get',
        data: jsonBMRData,
        success: function(response) {
            var returnData = JSON.parse(response);
            if (returnData.msg === "SUCCESS!") {
             
                console.log(JSON.stringify(returnData.data[0].user_id));
                console.log("Producing food suggestions");

                displayPhysicalSymptoms(returnData.data);
                displayMentalSymptoms(returnData.data);
    

                physicalFoodSuggestions(returnData.data);
                mentalFoodSuggestions(returnData.data);

                displayMealPlan(returnData.data);
               
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

    function displayPhysicalSymptoms(jsonBMRData) {
        if ((jsonBMRData[0].muscle_aches == "true")) {
            var muscle_aches = "Muscle Aches";
            return document.getElementsByClassName('muscle-aches-yes')[0].innerHTML = muscle_aches;    
        }
        else if((jsonBMRData[0].fatigue == "true")) {
            var fatigue = "Fatigue";
            return document.getElementsByClassName('fatigue-yes')[0].innerHTML = fatigue;

        }
        else if ((jsonBMRData[0].gi_issues == "true")) {
            var gi_issues = "GI Issues";
            return document.getElementsByClassName('gi-issues-yes')[0].innerHTML = gi_issues;
        }
        else if ((jsonBMRData[0].headaches == "true")) {
            var headaches = "Headaches";
            return document.getElementsByClassName('headaches-yes')[0].innerHTML = headaches;
        }
    };

    function displayMentalSymptoms(jsonBMRData) {
        if ((jsonBMRData[0].depression == "true")) {
            var depression = "Depression";
            return document.getElementsByClassName('depression-yes')[0].innerHTML = depression;    
        }
        else if ((jsonBMRData[0].anxiety == "true")) {
            var anxiety = "Anxiety";
            return document.getElementsByClassName('anxiety-yes')[0].innerHTML = anxiety;

        }
        else if ((jsonBMRData[0].mood_swings == "true")) {
            var mood_swings = "Mood Swings";
            return document.getElementsByClassName('mood-swings-yes')[0].innerHTML = mood_swings;
        }
        else if ((jsonBMRData[0].sleep == "true")) {
            var sleep = "Poor Sleeping Patterns";
            return document.getElementsByClassName('sleep-yes')[0].innerHTML = sleep;
        }
    };
// function foodSuggestions(jsonBMRData) {

//     switch (jsonBMRData) {
//         case (jsonBMRData[0].muscle_aches == "true"):
//             var muscleAchesFood;
//             muscleAchesFood = "Salmon";
//             document.getElementsByClassName('muscle-aches')[0].innerHTML = muscleAchesFood;
//             break;
//         case (jsonBMRData[0].fatigue == "true"):
//             var fatigueFood;
//             fatigueFood = "Bananas";
//             document.getElementsByClassName('fatigue')[0].innerHTML = fatigueFood;
//             break;
//         case (jsonBMRData[0].gi_issues == "true"):
//             var giIssuesFood;
//             giIssuesFood = "Apples";
//             document.getElementsByClassName('gi-issues')[0].innerHTML = giIssuesFood;
//             break;
//         case (jsonBMRData[0].headaches == "true"):
//             var headachesFood;
//             headachesFood = "Brown Rice";
//             document.getElementsByClassName('headaches')[0].innerHTML = headachesFood;
//             break;
//         case (jsonBMRData[0].depression == "true"):
//             var depressionFood;
//             depressionFood = "Salmon";
//             document.getElementsByClassName('depression')[0].innerHTML = depressionFood;
//             break;
//         case (jsonBMRData[0].anxiety == "true"):
//             var anxietyFood;
//             anxietyFood = "Salmon";
//             document.getElementsByClassName('anxiety')[0].innerHTML = anxietyFood;
//             break;
//         case (jsonBMRData[0].mood_swings == "true"):
//             var moodSwingsFood;
//             moodSwingsFood = "Salmon";
//             document.getElementsByClassName('mood-swings')[0].innerHTML = moodSwingsFood;
//             break;
//         case (jsonBMRData[0].sleep == "true"):
//             var sleepFood;
//             sleepFood = "Salmon";
//             document.getElementsByClassName('sleep')[0].innerHTML = sleepFood;
//             break;
//         default:
//             console.log("Error");

//     }
// };

    function physicalFoodSuggestions( jsonBMRData ) {   //NOT RUNNING THROUGH ALL 
        if ((jsonBMRData[0].muscle_aches == "true")){
            console.log("Muscle Aches was selected by user");
            var muscleAchesFood = "Salmon";
            document.getElementsByClassName('muscle-aches')[0].innerHTML = muscleAchesFood;
        }
        else if ((jsonBMRData[0].fatigue == "true")){
            console.log("Fatigue was selected by user");
            var fatigueFood;
            fatigueFood = "Bananas";
            document.getElementsByClassName('fatigue')[0].innerHTML = fatigueFood;
        }
        else if ((jsonBMRData[0].gi_issues == "true")) {
            console.log("GI Issues was selected by user")
            var giIssuesFood;
            giIssuesFood = "Apples";
            document.getElementsByClassName('gi-issues')[0].innerHTML = giIssuesFood;
        }
        else if ((jsonBMRData[0].headaches == "true")) {
            console.log("Headaches was selected by user")
            var headachesFood;
            headachesFood = "Brown Rice";
            document.getElementsByClassName('headaches')[0].innerHTML = headachesFood;
        }
        else{
            console.log("Error");
        }
    };

    function mentalFoodSuggestions(jsonBMRData) {   //NOT RUNNING THROUGH ALL

        if ((jsonBMRData[0].depression == "true")) {
            console.log("Depression was selected by user");
            var depressionFood;
            depressionFood = "Salmon";
            document.getElementsByClassName('depression')[0].innerHTML = depressionFood;
        }
        else if ((jsonBMRData[0].anxiety == "true")) {
            console.log("Anxiety was selected by user");
            var anxietyFood;
            anxietyFood = "Salmon";
            document.getElementsByClassName('anxiety')[0].innerHTML = anxietyFood;
        }
        else if ((jsonBMRData[0].mood_swings == "true")) {
            console.log("Mood Swings was selected by user");
            var moodSwingsFood;
            moodSwingsFood = "Salmon";
            document.getElementsByClassName('mood-swings')[0].innerHTML = moodSwingsFood;
        }
        else if((jsonBMRData[0].sleep == "true")) { 
                console.log("Poor Sleeping Patterns was selected by user");
                var sleepFood;
                sleepFood = "Salmon";
                document.getElementsByClassName('sleep')[0].innerHTML = sleepFood;
        }
        else {
            console.log("Error");
        }
    };

    


    function displayMealPlan(jsonBMRData) {
       
        if ((jsonBMRData[0].user_age >= 14) && (jsonBMRData[0].user_age <= 18)) {
            var age1;
            console.log("Calculating age1");
            return age1;
        }
        else if ((jsonBMRData[0].user_age >= 19) && (jsonBMRData[0].user_age <= 30)){
            var age2;
            console.log("Calculating age2");
            return age2;
            
        }

        // const cal1 = ["Fruit: 1 1/2 cups",
        //         "Vegetables: 2 cups",
        //         "Grains: 5 oz",
        //         "Protein: 5 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];

        // const cal2 = ["Fruit: 1 1/2 cups",
        //         "Vegetables: 2 1/2 cups",
        //         "Grains: 6 oz",
        //         "Protein: 5 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];

    
        if((age1) && (jsonBMRData[0].user_gender_male == "true") && (jsonBMRData[0].exercise_level_dropdown == "active")) {
            console.log("Meal plan being calculated");
            return document.getElementsByClassName('cal8')[0].innerHTML = cal8;
        }
    


        // const cal3 =    ["Fruit: 1 - 2 cups",
        //          "Vegetables: 2 1/2 cups",
        //          "Grains: 6 oz",
        //          "Protein: 5 - 5 1/2 oz",
        //          "Dairy: 3 cups",
        //          "Fat: "];
                                
        // const cal4 =    ["Fruit: 2 cups",
        //         "Vegetables: 2 1/2 cups",
        //         "Grains: 6 oz",
        //         "Protein: 5 1/2 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];

        // const cal5 =    ["Fruit: 2 cups",
        //         "Vegetables: 2 1/2 - 3 cups",
        //         "Grains: 6 - 7 oz",
        //         "Protein: 5 1/2 - 6 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];

        // const cal6 =    ["Fruit: 2 cups",
        //         "Vegetables: 3 cups",
        //         "Grains: 7 oz",
        //         "Protein: 6 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];
                
        // const cal7 =    ["Fruit: 2 cups",
        //         "Vegetables: 3 cups",
        //         "Grains: 7 - 8 oz",
        //         "Protein: 6 - 6 1/2 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];

        var cal8 =  ["Fruit: 2 cups",
                "Vegetables: 2 1/2 - 3 cups",
                "Grains: 6 - 8 oz",
                "Protein: 5 1/2 - 6 1/2 oz",
                "Dairy: 3 cups",
                "Fat: "];

        // const cal9 =    ["Fruit: 2 cups",
        //         "Vegetables: 3 cups",
        //         "Grains: 8 oz",
        //         "Protein: 6 1/2 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];

        // const cal10 =   ["Fruit: 2 cups",
        //         "Vegetables: 3 - 3 1/2 cups",
        //         "Grains: 8 - 9 oz",
        //         "Protein: 6 1/2 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];

        // const cal11 =   ["Fruit: 2 - 2 1/2 cups",
        //         "Vegetables: 3 - 3 1/2 cups",
        //         "Grains: 8 - 10 oz",
        //         "Protein: 6 1/2 - 7 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];
            
        // const cal12 =   ["Fruit: 2 - 2 1/2 cups",
        //         "Vegetables: 3 1/2 cups",
        //         "Grains: 9 - 10 oz",
        //         "Protein: 6 1/2 - 7 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];

        // const cal13 =   ["Fruit: 2 1/2 cups",
        //         "Vegetables: 3 1/2 - 4 cups",
        //         "Grains: 10 oz",
        //         "Protein: 7 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];

        // const cal14 =   ["Fruit: 2 1/2 cups",
        //         "Vegetables: 4 cups",
        //         "Grains: 10 oz",
        //         "Protein: 7 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];

        // const cal15 =   ["Fruit: 2 1/2 cups",
        //         "Vegetables: 3 1/2 - 4 cups",
        //         "Grains: 10 oz",
        //         "Protein: 7 oz",
        //         "Dairy: 3 cups",
        //         "Fat: "];const
    }


    


