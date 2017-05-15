//Author:
//Name: Rasmus Riis Nielsen
//Group: 2


(function(){
  var bicBox = document.querySelector("#BIC");
  var ppcBox = document.querySelector("#PPC");
  var swcBox = document.querySelector("#SWC");
  var esdBox = document.querySelector("#ESD");
  var bicDl = document.querySelector("#BICdl");
  var ppcDl = document.querySelector("#PPCdl");
  var swcDl = document.querySelector("#SWCdl");
  var esdDl = document.querySelector("#ESDdl");
var getFormsBtn = document.querySelector("#getFormsBtn");

bicDl.style.display = "hide";
attachEvents();
/*
if(Modernizr.eventlistener){ //check if addEventListener is supported
  attachEvents();
}else{  //inform or change elements that use listeners!
  var buttons = document.querySelectorAll("button");  //change all buttons
  for(var j=0; j<buttons.length; j++){
    buttons[j].textContent = "Event listeners not suppported :(";
  }
}*/

function attachEvents(){
  getFormsBtn.addEventListener('click', getForms);
}

function signUp(){




}
})();
