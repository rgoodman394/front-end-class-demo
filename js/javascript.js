// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
function renderImgInModal(imageSource){
    modal.style.display = "block";
    modalImg.src = imageSource;
}
var tileImages = document.getElementsByClassName("tile")
for(var i = 0; i < tileImages.length; i++){
console.log(i)
    tileImages[i].onclick = function(event){
        var theCurrentImageWrapper = this;
        var individualImage = theCurrentImageWrapper.querySelector("img").getAttribute("src");
        console.log(individualImage)
        renderImgInModal(individualImage)
    }
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
