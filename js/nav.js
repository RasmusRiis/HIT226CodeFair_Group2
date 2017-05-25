
(function(){
var navHome = document.querySelector(".navHome");
var navEventDetails = document.querySelector(".navEventDetails");
var navStudents = document.querySelector(".navStudents");
var navIndustry = document.querySelector(".navIndustry");

navHome.addEventListener("mouseover", function(){overHoverBox(navHome);});
navEventDetails.addEventListener("mouseover", function(){overHoverBox(navEventDetails);});
navStudents.addEventListener("mouseover", function(){overHoverBox(navStudents);});
navIndustry.addEventListener("mouseover", function(){overHoverBox(navIndustry);});

navHome.addEventListener("mouseout", function(){outHoverBox(navHome);});
navEventDetails.addEventListener("mouseout", function(){outHoverBox(navEventDetails);});
navStudents.addEventListener("mouseout", function(){outHoverBox(navStudents);});
navIndustry.addEventListener("mouseout", function(){outHoverBox(navIndustry);});


function overHoverBox(thisElement){
  var card = thisElement.querySelector(".hoverCard");
  card.style.display = 'block';
}
function outHoverBox(thisElement){
  var card = thisElement.querySelector(".hoverCard");
  card.style.display = 'none';
}
})();
