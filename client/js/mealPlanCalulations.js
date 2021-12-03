// Arrays for serving sizes of each food group based on caloric intake

// cal1 = "1600 calories";
// cal2 = "1800 calories";
// cal3 = "1800 - 2000 calories";
// cal4 = "2000 calories";
// cal5 = "2000 - 2200 calories";
// cal6 = "2200 calories";
// cal7 = "2200 - 2400 calories";
// cal8 = "2000 - 2400 calories";
// cal9 = "2400 calories";
// cal10 = "2400 - 2600 calories";
// cal11 = "2400 - 2800 calories";
// cal12 = "2600 - 2800 calories";
// cal13 = "2800 -3000 calories";
// cal14 = "3000 calories";
// cal15 = "2800 - 3200 calories";



// $('#survey-button').click(function BMRCalculator(){
//     var age = $('age').val();
//     var height = $('height').val();
//     var weight = $('weight').val();
//     var male = $('male').val();
//     var female = $('female').val();

//     //BMR calculations
//     if(male){
//         var maleBMR;
//         maleBMR = (13.397 * weight) + (4.799 * height) - (5.677 * age) + 88.362;
//         return maleBMR;
//     }
//     else if(female){
//         var femaleBMR;
//         femaleBMR = (9.247 * weight) + (3.098 * height) - (4.330 * age) + 447.593;
//         return femaleBMR;
//     }
//     else{

//     }

// });





// const cal1 =    ["Fruit: 1 1/2 cups",
//                 "Vegetables: 2 cups",
//                 "Grains: 5 oz",
//                 "Protein: 5 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];

// const cal2 =    ["Fruit: 1 1/2 cups",
//                 "Vegetables: 2 1/2 cups",
//                 "Grains: 6 oz",
//                 "Protein: 5 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];


// const cal3 =    ["Fruit: 1 - 2 cups",
//                  "Vegetables: 2 1/2 cups",
//                  "Grains: 6 oz",
//                  "Protein: 5 - 5 1/2 oz",
//                  "Dairy: 3 cups",
//                  "Fat: "];
                                
// const cal4 =    ["Fruit: 2 cups",
//                 "Vegetables: 2 1/2 cups",
//                 "Grains: 6 oz",
//                 "Protein: 5 1/2 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];
                        
// const cal5 =    ["Fruit: 2 cups",
//                 "Vegetables: 2 1/2 - 3 cups",
//                 "Grains: 6 - 7 oz",
//                 "Protein: 5 1/2 - 6 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];

// const cal6 =    ["Fruit: 2 cups",
//                 "Vegetables: 3 cups",
//                 "Grains: 7 oz",
//                 "Protein: 6 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];
                
// const cal7 =    ["Fruit: 2 cups",
//                 "Vegetables: 3 cups",
//                 "Grains: 7 - 8 oz",
//                 "Protein: 6 - 6 1/2 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];

// const cal8 =    ["Fruit: 2 cups",
//                 "Vegetables: 2 1/2 - 3 cups",
//                 "Grains: 6 - 8 oz",
//                 "Protein: 5 1/2 - 6 1/2 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];

// const cal9 =    ["Fruit: 2 cups",
//                 "Vegetables: 3 cups",
//                 "Grains: 8 oz",
//                 "Protein: 6 1/2 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];

// const cal10 =   ["Fruit: 2 cups",
//                 "Vegetables: 3 - 3 1/2 cups",
//                 "Grains: 8 - 9 oz",
//                 "Protein: 6 1/2 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];

// const cal11 =   ["Fruit: 2 - 2 1/2 cups",
//                 "Vegetables: 3 - 3 1/2 cups",
//                 "Grains: 8 - 10 oz",
//                 "Protein: 6 1/2 - 7 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];
            
// const cal12 =   ["Fruit: 2 - 2 1/2 cups",
//                 "Vegetables: 3 1/2 cups",
//                 "Grains: 9 - 10 oz",
//                 "Protein: 6 1/2 - 7 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];

// const cal13 =   ["Fruit: 2 1/2 cups",
//                 "Vegetables: 3 1/2 - 4 cups",
//                 "Grains: 10 oz",
//                 "Protein: 7 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];

// const cal14 =   ["Fruit: 2 1/2 cups",
//                 "Vegetables: 4 cups",
//                 "Grains: 10 oz",
//                 "Protein: 7 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];

// const cal15 =   ["Fruit: 2 1/2 cups",
//                 "Vegetables: 3 1/2 - 4 cups",
//                 "Grains: 10 oz",
//                 "Protein: 7 oz",
//                 "Dairy: 3 cups",
//                 "Fat: "];

// const userWeightInput = document.getElementById("weight").method;
// const userHeightInput = document.getElementById("height").method;
// const userAgeInput = document.getElementById("age").method;
// const userGenderMaleInput = document.getElementById("male").method;
// const userGenderFemaleInput = document.getElementById("female").method;
// const userNotActiveInput = document.getElementById("not-active").method;
// const userModerateInput = document.getElementById("moderate").method;
// const userActiveInput = document.getElementById("active").method;

// function userAge() {
//     var userAgeInput = document.getElementById("age").method; //grabbing where user will put their age id= "age"

//     if (userAgeInput >= 14 && userAgeInput <= 18) {
//         //user will get a result of result1, so the server knows that their age is 14-18
//         return resultAge1;
//     }
//     else if (userAgeInput >= 19 && userAgeInput <= 30) {
        
//         return resultAge2;
//     }
//     else if (userAgeInput >= 31 && userAgeInput <= 50) {

//         return resultAge3;
//     }
//     else if (userAgeInput > 51) {
       
//         return resultAge4;
//     }
//     else {
//         // add a user age is invalid error function 
//     }
// };


// // function calculateBMR() {
// //      // BMR calculated using Revised Harris-Benedict equation
// //     //Do I need to create an if statement for if male or female?

// //     // BMR calculation for Male
// //    if (userGenderMaleInput) {
// //        return (13.397 * userWeightInput) + (4.799 * userHeightInput) - (5.677 * userAgeInput) + 88.362;
// //    }
// //    else { // BMR calculation for Female
// //     return (9.247 * userWeightInput) + (3.098 * userHeightInput) - (4.330 * userAgeInput) + 447.593;
// //    }
// // }


// function mealPlan() {
//     // 1600 calories -> age 51+; Female; Not Active
//     if (resultAge4 && userGenderFemaleInput && userNotActiveInput) {
//         return cal1;
//     }
//     // 1800 calories -> age 14-18 or age 31-50 or age 51+; Female; Not active or Moderate
//     else if (resultAge1 || resultAge3 || resultAge4 && userGenderFemaleInput && userNotActiveInput || userModerateInput) {
//         return cal2;
//     }
//     // 1800 - 2000 calories -> age 19-30; Female; Not active
//     else if (resultAge2 && userGenderFemaleInput && userNotActiveInput) {
//         return cal3;
//     }
//     // 2000 calories -> age 14-18 or age 31-50; Female; Moderate
//     else if (resultAge1 || resultAge3 && userGenderFemaleInput && userModerateInput) {
//         return cal4;
//     }
//     // 2000 - 2200 calories -> age 19-30 or age 31-50 or age 51+; Female or Male; Not active or Moderate or Active
//     else if (resultAge2 || resultAge3 || resultAge4 && userGenderFemaleInput || userGenderMaleInput && userNotActiveInput || userModerateInput || userActiveInput) {
//         return cal5;
//     }
//     // 2200 calories -> age 31-50; Female; Active
//     else if (resultAge3 && userGenderFemaleInput && userActiveInput) {
//         return cal6;
//     }
//     // 2200 - 2400 calories -> age 31-50 or age 51+; Male; Not active or Moderate
//     else if (resultAge3 || resultAge4 && userGenderMaleInput && userNotActiveInput || userModerateInput) {
//         return cal7;
//     }
//     // 2000 - 2400 calories -> age 14-18; Male; Not active
//     else if (resultAge1 && userGenderMaleInput && userNotActiveInput) {
//         return cal8;
//     }
//     // 2400 calories -> age 14-18 or age 19-30; Female; Active
//     else if (resultAge1 || resultAge2 && userGenderFemaleInput && userActiveInput) {
//         return cal9;
//     }
//     // 2400 - 2600 calories -> age 19-30 or age 31-50; Male; Not active or Moderate
//     else if (resultAge2 || resultAge3 && userGenderMaleInput && userNotActiveInput || userModerateInput) {
//         return cal10;
//     }
//     // 2400 - 2800 calories -> age 14-18 or age 51+; Male; Moderate or Active
//     else if (resultAge1 || resultAge4 && userGenderMaleInput && userModerateInput || userActiveInput) {
//         return cal11;
//     }
//     // 2600 - 2800 calories -> age 19-30; Male; Moderate
//     else if (resultAge2 && userGenderMaleInput && userModerateInput) {
//         return cal12;
//     }
//     // 2800 - 3000 calories -> age 31-50; Male; Active
//     else if (resultAge3 && userGenderMaleInput && userActiveInput) {
//         return cal13;
//     }
//     // 3000 calories -> age 19-30; Male; Active
//     else if (resultAge2 && userGenderMaleInput && userActiveInput) {
//         return cal14;
//     }
//     // 2800 - 3200 calories -> age 14-18; Male; Active
//     else {
//         return cal15;
//     }
// }
