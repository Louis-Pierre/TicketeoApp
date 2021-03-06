
function buildWatchLine(watch) {
  //Line container
  var divRow=document.createElement('div');

  var caract=["origin","destination","date","fromHour","limitPrice"];
  var j;
  for (j = 0; j < caract.length; j++) {

    //container title and content
     var divInner = document.createElement('div');
     divInner.className="innerWatch";
      //title
      var divT=document.createElement('div');
      divT.innerHTML=keyToLabel(caract[j]);
      divT.className="title";

      //Content
      var divC=document.createElement('div');
      divC.innerHTML=watch[caract[j]];
      if (caract[j]=="fromHour"){
        divC.innerHTML=divC.innerHTML+"h"
      }
      if (caract[j]=="limitPrice"){
        divC.innerHTML=divC.innerHTML+" €"
      }
      divC.className="content";

      divInner.appendChild(divT);
      divInner.appendChild(divC);
      divRow.appendChild(divInner)

  }

  divRow.appendChild(addToggle(watch['_id']["$oid"],watch['active']))
  return divRow

};

function addToggle(id,status){
  var divInner = document.createElement('div');
  divInner.className="innerWatch";
  divInner.setAttribute("id","toggle");

  var labelToggle=document.createElement('label');
  labelToggle.className="switch";

  var inpToggle=document.createElement('input');
  inpToggle.type="checkbox";
  inpToggle.checked=status;
  inpToggle.onchange=function() {changeStatus(id)};

  var spanToggle=document.createElement('span');
  spanToggle.className="slider round";


  labelToggle.appendChild(inpToggle);
  labelToggle.appendChild(spanToggle);
  divInner.appendChild(labelToggle);

  return divInner;

}

function keyToLabel(key) {
  if(key=='origin'){
    return 'Départ'
  }
  else if (key=='destination') {
    return 'Destination'
  }
  else if (key=='date') {
    return 'Date'
  }
  else if (key=='fromHour') {
    return 'A partir de'
  }
  else if (key=='limitPrice') {
    return 'Prix max'
  }

};

function changeStatus(id){
  var xhr = new XMLHttpRequest();
  url=urlApiRest+"userManagement/getWatches/changeStatusWatch"
  xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    if (this.response=="False"){
      window.location.href= "connection.html";
    }   
  }
  };
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.withCredentials= true;
  xhr.setRequestHeader("Access-Control-Allow-Credentials",true);
  xhr.setRequestHeader("Access-Control-Allow-Origin","*");
  xhr.crossdomain=true;
  xhr.send(JSON.stringify({id:id}));
};
