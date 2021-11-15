console.log("User_id: " + localStorage.getItem("user_id"));

$('#survey-button').click(function() {
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var male = $('#male').val();
    var female = $('#female').val();
    var age = $('#age').val();
    var height = $('#height').val();
    var weight = $('#weight').val();
    var notActive = $('#not-active').val();
    var moderate = $('#moderate').val();
    var active = $('#active').val();
    var muscleAches = $('#muscle-aches').val();
    var fatigue = $('#fatigue').val();
    var giIssues = $('#gi-issues').val();
    var headaches = $('#headaches').val();
    var depression = $('#depression').val();
    var anxiety = $('#anxiety').val();
    var moodSwings = $('#mood-swings').val();
    var poorSleepingPatterns = $('#poor-sleeping-patterns').val();

    var jsonString = {
        firstName: firstName,
        lastName: lastName,
        male: male,
        female: female,
        age: age,
        height: height,
        weight: weight,
        notActive: notActive,
        moderate: moderate,
        active: active,
        muscleAches: muscleAches,
        fatigue: fatigue,
        giIssues: giIssues,
        headaches: headaches,
        depression: depression,
        anxiety: anxiety,
        moodSwings: moodSwings,
        poorSleepingPatterns: poorSleepingPatterns
    }
    
    console.log("Survey submit button fired");
    $.ajax ({
        url: 'http://localhost:2161/survey',
        type: 'get',
        data: jsonString,
        success: function(response) {
            var data = JSON.parse(response);
            if (data.msg === "SUCCESS!") {
                console.log("Submit success");
               // loginInfo(jsonString);      ////connection to the server function for register
            } else if (data.msg === "Failed") {
                // Login invalid (change for survey?)
            } else {
                alert(data.msg);
            }
            
        },
        error: function(err) {
            alert(err);
        }
    })
})