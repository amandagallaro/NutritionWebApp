        const loginText = document.querySelector(".title-text .login");
        const loginForm = document.querySelector("form.login");
        const loginBtn = document.querySelector("label.login");
        const registerBtn = document.querySelector("label.register");
        const registerLink = document.querySelector("form .register-link a");
        registerBtn.onclick = (() => {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
        });
        loginBtn.onclick = (() => {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        });
       

        
$('#login-button').click(function() { //action of login button
    var email = $('#login-email').val();
    var password = $('#login-password').val();

    var jsonString = {
        email: email,
        password: password
    }
    loginInfo(jsonString);      //connection to the server function for login
    
})

$('#register-button').click(function() {
    var email = $('#register-email').val();
    var password = $('#register-password').val();

    var jsonString = {
        email: email,
        password: password
    }
    console.log("Register button fired");
    $.ajax ({
        url: 'http://localhost:2161/register-page',
        type: 'post',
        data: jsonString,
        success: function(response) {
            var data = JSON.parse(response);
            if (data.msg === "SUCCESS!") {
                console.log("Register success");
                loginInfo(jsonString);      ////connection to the server function for register
            } else if (data.msg === "Failed") {
                // Login invalid
            } else {
                alert(data.msg);
            }
            
        },
        error: function(err) {
            alert(err);
        }
    })
})

function loginInfo (jsonString) {
    $.ajax ({
        url: 'http://localhost:2161/login-page',
        type: 'get',
        data: jsonString,
        success: function(response) {
            var data = JSON.parse(response);
            if (data.msg === "SUCCESS!") {
                console.log("Login success");
                localStorage.setItem("user_id" , data.data[0].user_id);
                
                window.location.assign('http://localhost:2161/survey');    //send user to survey
            } else if (data.msg === "Failed") {
                // Login invalid
            } else {
                alert(data.msg);
            }  
        },
        error: function(err) {
            alert(err);
        }
    })
}
