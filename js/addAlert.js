

function addAlert() {

  var xhr = new XMLHttpRequest();
  url=urlApiRest+"userManagement/getWatches/insertWatches";
  xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      if (this.response=="False"){
        window.location.href= "connection.html";
      }
      else{
        window.alert("Nouvelle alerte ajoutée ! ");
        location.reload();
      }
  }
  };
  origin=document.getElementById("depart").value
  destination=document.getElementById("destination").value
  date= dateFormatting1(new Date(document.getElementById("date").value))
  fromHour=parseInt(document.getElementById("time").value.substring(0,2))
  limitPrice=parseInt(document.getElementById("limitPrice").value)
  dData={origin:origin,destination:destination,date:date,fromHour:fromHour,limitPrice:limitPrice}
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.withCredentials= true;
  xhr.setRequestHeader("Access-Control-Allow-Credentials",true);
  xhr.setRequestHeader("Access-Control-Allow-Origin","*");
  xhr.crossdomain=true;
  xhr.send(JSON.stringify(dData));

};

function goToMain() {
  window.location.href= "main.html";
};
