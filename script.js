const images =
document.querySelectorAll(".gallery-item");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox-img");

const closeBtn =
document.querySelector(".close");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

let currentIndex = 0;

images.forEach((image,index)=>{

image.addEventListener("click",()=>{

currentIndex = index;

showImage();

});

});

function showImage(){

lightbox.classList.add("active");

lightboxImg.src =
images[currentIndex].src;

}

closeBtn.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

nextBtn.addEventListener("click",()=>{

currentIndex++;

if(currentIndex >= images.length){
currentIndex = 0;
}

showImage();

});

prevBtn.addEventListener("click",()=>{

currentIndex--;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

showImage();

});

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active"))
return;

if(e.key === "ArrowRight"){

currentIndex++;

if(currentIndex >= images.length){
currentIndex = 0;
}

showImage();

}

if(e.key === "ArrowLeft"){

currentIndex--;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

showImage();

}

if(e.key === "Escape"){

lightbox.classList.remove("active");

}

});

lightbox.addEventListener("click",(e)=>{

if(e.target === lightbox){

lightbox.classList.remove("active");

}

});