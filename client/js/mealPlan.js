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
            console.log(JSON.stringify(returnData.data[0].user_id));

            displayPersonalInfo(returnData.data); //TO DISPLAY ALL PERSONAL INFO

            BMRandMealPlan(returnData.data);   //TO DISPLAY BMR CALCULATION AND MEAL PLAN

        
           
        }
        else {
            alert(returnData.msg);
        }
        
    },
    error: function(err) {
        alert(err);
    }
});



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

    function BMRandMealPlan( jsonBMRData ) {

        if(jsonBMRData[0].user_gender_male == "true") {
            var male_bmr;
            male_bmr = Math.round((13.397 * jsonBMRData[0].user_weight) + (4.799 * jsonBMRData[0].user_height) - (5.677 * jsonBMRData[0].user_age) + 88.362);
            console.log("Male BMR has been calculated");
            document.getElementsByClassName('male-bmr')[0].innerHTML = male_bmr + " calories";
        }
        else if(jsonBMRData[0].user_gender_female == "true") {
            var female_bmr;
            female_bmr = Math.round((9.247 * jsonBMRData[0].user_weight) + (3.098 * jsonBMRData[0].user_height) - (4.330 * jsonBMRData[0].user_age) + 447.593);
            console.log("Female BMR has been calculated");
            document.getElementsByClassName('female-bmr')[0].innerHTML = female_bmr + " calories";
            
        }
        else{
            console.log("Error");
        }



        
        if ((female_bmr < 1200) || male_bmr < 1200){    
            var warning = "Please consider checking with a doctor to make sure you are absolutely healthy! Always better to be safer than sorry.";
            console.log("Out of range for meal plan result");
            document.getElementsByClassName('meal-plan')[0].innerHTML = warning;
        }
        else if((female_bmr >= 1200 && female_bmr < 1400) || (male_bmr >= 1200 && male_bmr < 1400)){
            var cal1 =  ["Fruit: 1 1/2 cups",
                        " Vegetables: 1 - 2 cups",
                        " Grains: 4 oz",
                        " Protein: 4 - 5 oz",
                        " Dairy: 3 cups",
                        " Fat/Oil: 1-2 tbs"]; 
            console.log("Calculating 1200-1400 cal meal plan");
            document.getElementsByClassName('meal-plan')[0].innerHTML = cal1;
        }
        else if((female_bmr >= 1400 && female_bmr < 1600) || (male_bmr >= 1400 && male_bmr < 1600)){
            var cal2 = ["Fruit: 1 1/2 cups",
                        " Vegetables: 2 cups",
                        " Grains: 5 oz",
                        " Protein: 5 oz",
                        " Dairy: 3 cups",
                        " Fat/Oil: 1-2 tbs"];
            console.log("Calculating 1400-1600 cal meal plan");
            document.getElementsByClassName('meal-plan')[0].innerHTML = cal2;
        }
        else if((female_bmr >= 1600 && female_bmr < 1800) || (male_bmr >= 1600 && male_bmr < 1800)){
            var cal3 = ["Fruit: 1 1/2 cups",
                        " Vegetables: 2 cups",
                        " Grains: 5 oz",
                        " Protein: 5 oz",
                        " Dairy: 3 cups",
                        " Fat/Oil: 1 - 2 tbs"];
            
          
            console.log("Calculating 1600-1800 cal meal plan");
            document.getElementsByClassName('meal-plan')[0].innerHTML = cal3;
        }
        else if((female_bmr >= 1800 && female_bmr < 2000) || (male_bmr >= 1800 && male_bmr < 2000)){
            var cal4 = ["Fruit: 1 1/2 cups",
                        " Vegetables: 2 1/2 cups",
                        " Grains: 6 oz",
                        " Protein: 5 oz",
                        " Dairy: 3 cups",
                        " Fat/Oil: 3 tbs"];
           
            console.log("Calculating 1800-2000 cal meal plan");
            document.getElementsByClassName('meal-plan')[0].innerHTML = cal4;
        }
        else if((female_bmr >= 2000 && female_bmr < 2200) || (male_bmr >= 2000 && male_bmr < 2200)){
            var cal5 = ["Fruit: 1 - 2 cups",
                        " Vegetables: 2 1/2 cups",
                        " Grains: 6 oz",
                        " Protein: 5 - 5 1/2 oz",
                        " Dairy: 3 cups",
                        " Fat/Oil: 3 tbs"];
            
            
            console.log("Calculating 2000-2200 cal meal plan");
            document.getElementsByClassName('meal-plan')[0].innerHTML = cal5;
        }
        else if(female_bmr >= 2200 && female_bmr < 2400 || (male_bmr > 2200 && male_bmr < 2400)){
            var cal6 =  ["Fruit: 2 cups",
                        " Vegetables: 2 1/2 cups",
                        " Grains: 6 oz",
                        " Protein: 5 1/2 oz",
                        " Dairy: 3 cups",
                        " Fat/Oil: 3 tbs"];
                        
                        
            console.log("Calculating 2200-2400 cal meal plan");
            document.getElementsByClassName('meal-plan')[0].innerHTML = cal6;
        }
        else if((female_bmr >= 2400 && female_bmr < 2600) || (male_bmr >= 2400 && male_bmr < 2600)){    // START HERE
            var cal7 = ["Fruit: 2 - 2 1/2 cups",
                        " Vegetables: 2 1/2 - 3 cups",
                        " Grains: 6 - 7 oz",
                        " Protein: 5 1/2 - 6 oz",
                        " Dairy: 3 cups",
                        " Fat/Oil: 3 tbs"];
            
           
            console.log("Calculating 2500-2800 cal meal plan");
            document.getElementsByClassName('meal-plan')[0].innerHTML = cal7;
        }
        else if((female_bmr >= 2600 && female_bmr < 2800) || (male_bmr >= 2600 && male_bmr < 2800)){
            var cal8 = ["Fruit: 2 cups",
                        " Vegetables: 2 1/2 - 3 cups",
                        " Grains: 6 - 8 oz",
                        " Protein: 5 1/2 - 6 1/2 oz", 
                        " Dairy: 3 cups",
                        " Fat/Oil: 3 tbs"];
            console.log("Calculating 2500-2800 cal meal plan");
            document.getElementsByClassName('meal-plan')[0].innerHTML = cal8;
        }
        else if((female_bmr >= 2800 && female_bmr < 3000) || (male_bmr >= 2800 && male_bmr < 3000)){
            var cal9 =  ["Fruit: 2 - 2 1/2 cups",
                        " Vegetables: 3 1/2 cups",
                        " Grains: 9 - 10 oz",
                        " Protein: 6 1/2 - 7 oz",
                        " Dairy: 3 cups",
                        " Fat: 3 tbs"];
            
            console.log("Calculating 2500-2800 cal meal plan");
            document.getElementsByClassName('meal-plan')[0].innerHTML = cal9;
        }
        else if((female_bmr >= 3000 && female_bmr < 3200) || (male_bmr >= 3000 && male_bmr < 3200)){
            var cal10 = ["Fruit: 2 1/2 cups",
                        " Vegetables: 3 1/2 - 4 cups",
                        " Grains: 10 oz",
                        " Protein: 7 oz",
                        " Dairy: 3 cups",
                        " Fat: 3 tbs"];
            console.log("Calculating 2500-2800 cal meal plan");
            document.getElementsByClassName('meal-plan')[0].innerHTML = cal10;
        }
        else if((female_bmr >= 3200 && female_bmr <= 3400) || (male_bmr >= 3200 && male_bmr <= 3400)){
            var cal11 = ["Fruit: 2 - 2 1/2 cups",
                        " Vegetables: 4 cups",
                        " Grains: 10 oz",
                        " Protein: 7 oz",
                        " Dairy: 3 cups",
                        " Fat: 3 tbs"];
            console.log("Calculating 2500-2800 cal meal plan");
            document.getElementsByClassName('meal-plan')[0].innerHTML = cal11;
        }
        else {
            console.log("Meal Plan Error");
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

            muscleAches(returnData.data);
            fatigue(returnData.data);
            giIssues(returnData.data);
            headaches(returnData.data);
            depression(returnData.data);
            anxiety(returnData.data);
            moodSwings(returnData.data);
            sleep(returnData.data);
               
        }
        else {
            alert(returnData.msg);
        }
            
        },
        error: function(err) {
            alert(err);
        }

});


    function muscleAches(jsonBMRData) {
        var muscle_aches = "Muscle Aches";
        var salmon = "Salmon: ";
        var cranberries = "Cranberries: ";


        if ((jsonBMRData[0].muscle_aches == "true")) {
            console.log("Muscle aches was selected by user");
            document.getElementsByClassName('muscle-aches-yes')[0].innerHTML = muscle_aches;
            document.getElementsByClassName('muscle-aches-salmon')[0].innerHTML = salmon + "Salmon acts as an anti-inflammatory and is a great source of Omega-3 Fatty Acids. These properties will help with muscle aches or muscle pain.";
            document.getElementsByClassName('muscle-aches-cranberries')[0].innerHTML = cranberries + "Cranberries can act as a natural NSAID(nonsteroidal anti-inflammatory drug), like ibuprofen or aspirin. They are also beneficial to pre and post-workout meals for supporting bone strength and repairing muscles.";
            return muscle_aches + salmon + cranberries;  
        }
    };

    function fatigue(jsonBMRData){
        var fatigue = "Fatigue";

        var bananas = "Bananas: ";
        var almonds = "Almonds: ";

        if((jsonBMRData[0].fatigue == "true")) {
            console.log("Fatigue was selected by user");
            document.getElementsByClassName('fatigue-yes')[0].innerHTML = fatigue;
            document.getElementsByClassName('fatigue-bananas')[0].innerHTML = bananas + "Bananas are packed with potassium, fiber, vitamin B6, and perfect amounts of carbohydrates and sugars. Since bananas are rich in fiber, they help slow down the digestion of that sugar, sustain a natural boost of energy and keep fullness longer. For best results, make sure to pick a ripe banana!";
            document.getElementsByClassName('fatigue-almonds')[0].innerHTML = almonds + "Almonds are an excellent source of high-quality protein, fiber, and healthy monosaturated fats. They are filled with vitamin B which helps the body convert food into energy. Grab a handful of almonds when you need a quick energy boost!";
            return fatigue + bananas + almonds;
        }
    };

    function giIssues(jsonBMRData){
        var gi_issues = "GI Issues";

        var oats = "Oats: ";
        var yogurt = "Yogurt: ";

        if ((jsonBMRData[0].gi_issues == "true")) {
            console.log("GI Issues was selected by user");
            document.getElementsByClassName('gi-issues-yes')[0].innerHTML = gi_issues;
            document.getElementsByClassName('gi-issues-oats')[0].innerHTML = oats + "Oats are a great source of B vitamins, minerals, and dietary soluble fibers. Known as 'Beta-glucan fiber', this can aid slower digestion, increase satiety and suppress appetite. The fiber can normalize bowel movements and decrease constipation by increasing stool size and softening stools, preventing risks of hemorrhoids and colorectal cancer. Make sure when picking oats, going for whole-grain that have been minimally processed will aid the best benefits!";
            document.getElementsByClassName('gi-issues-yogurt')[0].innerHTML = yogurt + "Yogurt is high in calcium, protein, vitamin B12, and live bacteria known as probiotics. The natural probiotics have been shown to reduce inflammation, and boost digestive health by redcucing bloating, diarrhea, and constipation. Check the label on your yogurt to make sure you are getting the active cultures (probiotics), yogurt that has been unpasteurized.";
            return gi_issues + oats + yogurt;
        }

    };

    function headaches(jsonBMRData){
        var headaches = "Headaches";

        var brown_rice = "Brown Rice: ";
        var chia_seeds = "Chia Seeds: ";

        if ((jsonBMRData[0].headaches == "true")) {
            console.log("Headaches was selected by user");
            document.getElementsByClassName('headaches-yes')[0].innerHTML = headaches;
            document.getElementsByClassName('headaches-brown-rice')[0].innerHTML = brown_rice + "Brown rice have great sources of fiber, whole-grains, and magnesium. Magnesium-rich foods can help prevent headaches and/or migraine attacks.";
            document.getElementsByClassName('headaches-chia-seeds')[0].innerHTML = chia_seeds + "Chia seeds are also magnesium-rich foods, as well as fiber. The effects of magnesium can prevent headaches, on top of the fiber that will sustain the effects for longer periods of time.";
            return headaches + brown_rice + chia_seeds;
        }
    };

    function depression(jsonBMRData){
        var depression = "Depression";

        var walnuts = "Walnuts: ";
        var chicken = "Chicken: ";

        if ((jsonBMRData[0].depression == "true")) {
            console.log("Depression was selected by user");
            document.getElementsByClassName('depression-yes')[0].innerHTML = depression;
            document.getElementsByClassName('depression-walnuts')[0].innerHTML = walnuts + "People who suffer from depression are shown to have lower levels of DHA(docosahexaenoic acid) and EPA(eicosapentaenoic acid) in their brain. DHA and EPA are both found in Omega-3 polyunsaturated fatty acids. To gain these health benefits, walnuts have a large amount of Omega-3's and have a significantly higher quantity than any other nut.";
            document.getElementsByClassName('depression-chicken')[0].innerHTML = chicken + "The amount of Tryptophan in chicken can be used to produce serotonin in your brain. This can help if you are diagnosed with depression, and boost your levels of serotonin!";
            return depression + walnuts + chicken;    
        }
    };

    function anxiety(jsonBMRData){
        var anxiety = "Anxiety";

        var spinach = "Spinach: ";
        var oranges = "Oranges: ";

        if ((jsonBMRData[0].anxiety == "true")) {
            console.log("Anxiety was selected by user");
            document.getElementsByClassName('anxiety-yes')[0].innerHTML = anxiety;
            document.getElementsByClassName('anxiety-spinach')[0].innerHTML = spinach + "It may be the complete opposite of what you're craving, but spinach and other leafy greens are rich in Magnesium. Magnesium is used to help those with anxiety feel calmer, and even those diagnosed with ADHD.";
            document.getElementsByClassName('anxiety-oranges')[0].innerHTML = oranges + "Oranges are a citrus fruit that is very high in Vitamin C. Vitamin C is a powerful antioxidant that boosts your immune system. Like other citrus fruits, having an orange in the afternoon can aid a calming effect and reduce your anxiety.";
            return anxiety + spinach + oranges;
        }

    };

    function moodSwings(jsonBMRData){
        var mood_swings = "Mood Swings";

        var chocolate = "Dark Chocolate: ";
        var tea = "Green Tea: ";

        if ((jsonBMRData[0].mood_swings == "true")) {
            console.log("Mood Swings was selected by user");
            document.getElementsByClassName('mood-swings-yes')[0].innerHTML = mood_swings;
            document.getElementsByClassName('mood-swings-chocolate')[0].innerHTML = chocolate + "Chocolate has a stereotypical stigma of being classified as 'junk food' due to its high levels of sugar. In moderation, however, it can result in the exact opposite! The cocoa that is found in chocolate, especially dark chocolate, contains micronutrients called 'Polyphenols'. Polyphenols are reducing agents that can protect the body from oxidative stress. If you're ever feeling down, have some chocolate!";
            document.getElementsByClassName('mood-swings-tea')[0].innerHTML = tea + "A ' ' called L-Theanine, and is naturally found in many teas. L-Theanine can help foster a state of calm, attentive wakefulness. It has effects on mental symptoms of mood swings, lowering your heart read and blood pressure. If you aren't feeling your best, sit down, relax, and drink a cup of tea!";
            return mood_swings + chocolate + tea;
        }
    };

    function sleep(jsonBMRData){
        var sleep = "Poor Sleeping Patterns";

        var pumpkin_seeds = "Pumpkin Seeds: ";
        var turkey = "Turkey: ";

        if ((jsonBMRData[0].sleep == "true")) {
            console.log("Poor Sleeping Patterns was selected by user");
            document.getElementsByClassName('sleep-yes')[0].innerHTML = sleep;
            document.getElementsByClassName('sleep-pumpkin-seeds')[0].innerHTML = pumpkin_seeds + "Your body uses Tryptophan to make melatonin and serotonin. Pumpkin seeds have a Tryptophan to help produce the necessary amount of melontonin to help you sleep at night.";
            document.getElementsByClassName('sleep-turkey')[0].innerHTML = turkey + "Ever feel the urge to sleep immediately after Thanksgiving dinner? With the same concept as pumpkin seeds, the tryptophan in turkey can help you get better sleep!";
            return sleep + pumpkin_seeds + turkey;
            
        }
    };


    


