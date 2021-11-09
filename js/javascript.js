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

const t3iTrigger = document.getElementById("t3i-gallery");
const ae1Trigger = document.getElementById("ae1-gallery");
const instaxTrigger = document.getElementById("instax-gallery");
const t3iBtn = document.getElementById("t3i-btn");
const ae1Btn = document.getElementById("ae1-btn");
const instaxBtn = document.getElementById("instax-btn");


t3iBtn.onclick = function () {
    ae1Trigger.style.display = "none";
    instaxTrigger.style.display = "none";
  if (t3iTrigger.style.display !== "none") {
    // t3iTrigger.style.display = "none";
  } else {
    t3iTrigger.style.display = "grid";
  }
};

ae1Btn.onclick = function () {
    t3iTrigger.style.display = "none";
    instaxTrigger.style.display = "none";
    if (ae1Trigger.style.display !== "none") {
    } else {
      ae1Trigger.style.display = "grid";
    }
  };

  instaxBtn.onclick = function () {
    t3iTrigger.style.display = "none";
    ae1Trigger.style.display = "none";
    if (instaxTrigger.style.display !== "none") {
    } else {
      instaxTrigger.style.display = "grid";
    }
  };





// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
