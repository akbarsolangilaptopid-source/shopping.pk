function signup() {
    event.preventDefault();

    var smail = document.getElementById('smail');
    var spass = document.getElementById('spass');
    var sname = document.getElementById('sname');

    
    if (smail.value == "" || spass.value == "") {
        Swal.fire({
            title: "Error!",
            text: "please fill all the fields",
            icon: "error"
        });
        return;
    }

    var oldArray = JSON.parse(localStorage.getItem("MyArr")) || [];

    var userdata = {
        Email: smail.value,
        name: sname.value,
        Password: spass.value,
    };

    oldArray.push(userdata);
    localStorage.setItem("MyArr", JSON.stringify(oldArray));

Swal.fire({
        title: "Success!",
        text: "Account Created Successfully!",
        icon: "success"
    }).then(() => {
        window.location.href = "index.html";
    });

}

function login() {
    event.preventDefault();

    var lmail = document.getElementById('lmail');
    var lpass = document.getElementById('lpass');
    
    var oldArray = JSON.parse(localStorage.getItem("MyArr")) || [];

    var userFound = false;

    for (var i = 0; i < oldArray.length; i++) {
        if (lmail.value == oldArray[i].Email && lpass.value == oldArray[i].Password) {
            userFound = true;
            break;
        }
    }

    if (userFound) {
        Swal.fire({
            title: "Login Successful!",
            text: "Redirecting you now...",
            icon: "success",
            timer: 2000, 
            showConfirmButton: false
        }).then(() => {
            window.location.href = "homepage.html"; 
        });

    } else {
        Swal.fire({
            title: "Login Failed",
            text: "Please enter correct email and password.",
            icon: "error",
            confirmButtonColor: "#007bff"
        });
    }
}

function logout() {
    Swal.fire({
        title: "Logging out",
        text: "ARE YOU SURE YOU WANT TO LOG OUT?",
        icon: "info",
        confirmButtonColor: "#007bff"
    }).then(() => {
        window.location.href = "index.html";
    });
}

