
let spans = document.querySelectorAll(".clickable-span");

spans.forEach(function(span) {
    span.addEventListener("click", function() {
        spans.forEach(function(otherSpan) {
            otherSpan.classList.remove("clicked");
        });

        this.classList.add("clicked");
    });
});

let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");


let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");


let originalImage1Src = image1.src;
let originalImage2Src = image2.src;
let originalImage3Src = image3.src;


span1.addEventListener("click", restoreOriginalImages);
span2.addEventListener("click", changeImages);
span3.addEventListener("click", changeImages3); 

function changeImages() {

  image1.src = "img/hotel1.jpg";
  image2.src = "img/hotel2.png";
  image3.src = "img/hotel3.jpg";
}


function restoreOriginalImages() {

  image1.src = originalImage1Src;
  image2.src = originalImage2Src;
  image3.src = originalImage3Src;
}


function changeImages3() {

  image1.src = "img/urlaub1.jpg";
  image2.src = "img/urlaub2.jpg";
  image3.src = "img/urlaub3.jpg";
}

$("body").keyup(function(event) {
  if (event.keyCode === 13) {
      alert('sdfsdfsdfdsfs');
  }
})

$("#scroll").on("click", function(){

  $(".backgraund").slideToggle();

})


