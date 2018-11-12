// CREATION ELEMENTS VAGYE
var page = document.getElementById("page-menu");
var waveWidth = 5;
var waveCount = Math.floor(window.innerWidth/waveWidth);
docFrag = document.createElement("div");

for(i=0; i < waveCount; i++){
  var wave = document.createElement("div");
  wave.className += "wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
}
page.appendChild(docFrag);

$(window).resize(function(){
  waveCount = Math.floor(window.innerWidth/waveWidth);
  for(i=0; i < waveCount; i++){
    var wave = document.createElement("div");
    wave.className += "wave";
    docFrag.appendChild(wave);
    wave.style.left = i * waveWidth + "px";
  }
  page.appendChild(docFrag);
});

//
$("body").ready(function(){

  $(".menu-item").toggleClass("ready");

});


// ANIMATION APRES CLICK SUR MENU
$(".menu-item").click(function(){

  $(".menu-item").hide();

  let wordsMenu = document.getElementsByClassName("word-menu");
  for(i=0; i < wordsMenu.length; i++){
    wordsMenu[i].innerHTML = this.innerHTML;
    wordsMenu[i].style.textTransform = "uppercase";
  }

  let waving = new TimelineMax({
     // repeat: -1
   });

  waving.add([
    TweenMax.staggerTo(".wave", .6, {top: "50%", ease: Power1.easeInOut}, .0009),
    TweenMax.staggerFromTo(".word-menu", .3, {autoAlpha:0}, {autoAlpha:1, ease: Power4.easeInOut}, .1),
    TweenMax.staggerTo(".wave", .6, {top: "40%", ease: Power1.easeInOut, delay:.6}, .0009),
    TweenMax.staggerTo(".wave", .6, {top: "60%", ease: Power1.easeInOut, delay:1.2}, .0009),
    TweenMax.staggerTo(".wave", .6, {top: "0%", ease: Power4.easeInOut, delay:1.8}, .0008),
    TweenMax.staggerFromTo(".word-menu", .3, {autoAlpha:1, y:0}, {autoAlpha:0, y:-100, ease: Power4.easeInOut, delay:1.9}, .1),
  ])

  $(".loading-menu").toggleClass("anim-on");
  $("span").toggleClass("off");

});

















// $('body').click(function(){
//
//   let newDiv = document.createElement('div');
//   newDiv.className = "elt_title";
//   $('.elt_title')[0].appendChild(newDiv);
//
//   newDiv.appendChild(newDiv);
//
//
// });











// Shits with mouse pos
    // $(".page-home").mousemove(function(e) {
    //
    //   let mouseX = e.pageX;
    //   let mouseY = e.pageY;
    //
    //   console.log("rapport mouse position : " + "y : " + mouseY);
    //
    //   TweenMax.to($(".elt_title"), 0, {x: mouseX+"px", y:mouseY+"px", ease: Power4.easeInOut});
    // });
