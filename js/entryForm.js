//Author:
//Name: Rasmus Riis Nielsen
//Group: 2


(function(){
  var bicBox = document.querySelector("#bIC");
  var ppcBox = document.querySelector("#pPC");
  var swcBox = document.querySelector("#sWC");
  var esdBox = document.querySelector("#eSD");
  var bicDl = document.querySelector("#bICdl");
  var ppcDl = document.querySelector("#pPCdl");
  var swcDl = document.querySelector("#sWCdl");
  var esdDl = document.querySelector("#eSDdl");
var getFormsBtn = document.querySelector("#getFormsBtn");

bicDl.style.display = 'none';
ppcDl.style.display = 'none';
swcDl.style.display = 'none';
esdDl.style.display = 'none';

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

function getForms(){
  bicDl.style.display = 'none';
  ppcDl.style.display = 'none';
  swcDl.style.display = 'none';
  esdDl.style.display = 'none';
  
  if(bicBox.checked){
    bicDl.style.display = 'block';
  }
  if(ppcBox.checked){
    ppcDl.style.display = 'block';
  }
  if(swcBox.checked){
    swcDl.style.display = 'block';
  }
  if(esdBox.checked){
    esdDl.style.display = 'block';
  }
}
})();
