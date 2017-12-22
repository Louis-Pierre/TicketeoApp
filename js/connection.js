$(function(){


});

function connectUser() {
    var xhr = new XMLHttpRequest();
    url=urlApiRest+"userManagement/connection/connectUser"
    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        if (this.response=="True"){
          window.location.href= "main.html";
        }
        else{
          element=document.getElementById('errorConnect');
          element.style.display = 'block';
        }

    }
    };
    mail=document.getElementById("mail").value
    pwd=document.getElementById("password").value
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.withCredentials= true;
    xhr.setRequestHeader("Access-Control-Allow-Credentials",true);
    xhr.setRequestHeader("Access-Control-Allow-Origin","*");
    xhr.crossdomain=true;
    xhr.send(JSON.stringify({mail:mail, password:pwd}));


};
