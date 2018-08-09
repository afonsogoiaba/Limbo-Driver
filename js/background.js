//função para trocar o background

var slideIndex = 0;
var images = ['url(img/fundo3.jpeg)'];

carousel();

function carousel() {
    var i;
   
    if (slideIndex >= images.length) {
    	slideIndex = 0
    } 

    document.body.style.background = images[slideIndex];
    console.log(images[slideIndex]);
    slideIndex += 1;
 		document.body.style.backgroundRepeat = "no-repeat";
 		document.body.style.backgroundPosition = "center center";
 		document.body.style.backgroundAttachment ="fixed";
 		document.body.style.webkitBackgroudSize = "cover";
 		document.body.style.mozBackgroundSize = "cover";
 		document.body.style.oBackgroundSize = "cover";
 		document.body.style.backgroundSize = "cover";
    setTimeout(carousel, 6000);
}

