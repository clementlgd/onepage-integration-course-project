
var home = document.querySelector('.operationContent');
var iphoneBusiness = document.querySelector('.iphoneBusiness');
var iphoneConclusion = document.querySelector('.conclusionIphone')
var iphoneItem1 = document.querySelector('.item1');
var iphoneItem2 = document.querySelector('.item2');
var iphoneItem3 = document.querySelector('.item3');


// Effet d'apparition des iPhone par le bas dans la section #operation
window.addEventListener('scroll', function(){
  var y = window.scrollY;
  if (y > 180) {
    iphoneItem1.classList.add('iphone_appearBottom');
    iphoneItem2.classList.add('iphone_appearBottom2');
    iphoneItem3.classList.add('iphone_appearBottom3');
  }
});

// Effet d'apparition des iPhone par la gauche dans la section #businessPremiere
window.addEventListener('scroll', function(){
var y = window.scrollY;
console.log(y);
  if (y > 1650) {
    iphoneBusiness.classList.add('iphone_appearLeft');
  }
});

// Effet d'apparition des iPhone par la droite dans la section #conclusion
window.addEventListener('scroll', function(){
  var y = window.scrollY;
  if (y > 2331) {
    iphoneConclusion.classList.add('iphone_appearRight');
  }
});
