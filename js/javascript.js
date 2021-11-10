// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
function renderImgInModal(imageSource){
    modal.style.display = "block";
    modalImg.src = imageSource;
    modalImg.classList.add('runanimation')

    setTimeout(function() {
        modalImg.classList.remove('runanimation')
    }, 1000)
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
const t3iGalleryContainer = document.getElementById("t3i-gallery-container");
const ae1GalleryContainer = document.getElementById("ae1-gallery-container");
const instaxGalleryContainer = document.getElementById("instax-gallery-container");

t3iBtn.onclick = function () {
    ae1GalleryContainer.style.display = "none";
    instaxGalleryContainer.style.display = "none";

//   if (t3iTrigger.style.display !== "none") {
//     // t3iTrigger.style.display = "none";
//   } else {
    console.log('clicking on ', t3iGalleryContainer)
    // t3iGalleryContainer.style.block = "block";

    // if (t3iGalleryContainer.style.display !== "none") {
    // } else {
        t3iGalleryContainer.style.display = "block";
    // }
};

ae1Btn.onclick = function () {
    t3iGalleryContainer.style.display = "none";
    instaxGalleryContainer.style.display = "none";
    // // if (ae1Trigger.style.display !== "none") {
    // // } else {
    // console.log(ae1GalleryContainer)

    // if (ae1GalleryContainer.style.display !== "none") {
    // } else {
    console.log('clicking on ', ae1GalleryContainer)

        ae1GalleryContainer.style.display = "block";
    // }
  };

  instaxBtn.onclick = function () {
    t3iGalleryContainer.style.display = "none";
    ae1GalleryContainer.style.display = "none";
    // // if (instaxTrigger.style.display !== "none") {
    // // } else {
    //     console.log(instaxGalleryContainer)
    
    // console.log('clicking')

    // if (instaxGalleryContainer.style.display !== "none") {
    // } else {
        console.log('clicking on ', instaxGalleryContainer)

        instaxGalleryContainer.style.display = "block";
    // }
    // instaxGalleryContainer.style.block = "block";
  };





// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
