
function getWatches() {
    var xhr = new XMLHttpRequest();
    url=urlApiRest+"userManagement/getWatches/getWatches"
    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var watches=JSON.parse(this.response);
        var container=document.getElementById("container")
        var i;
        for (i = 0; i < watches.length; i++) {
            container.appendChild(buildWatchLine(watches[i]))
            container.appendChild(document.createElement('br'))
        }

    }
    };
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.withCredentials= true;
    xhr.setRequestHeader("Access-Control-Allow-Credentials",true);
    xhr.setRequestHeader("Access-Control-Allow-Origin","*");
    xhr.crossdomain=true;
    xhr.send();


};
