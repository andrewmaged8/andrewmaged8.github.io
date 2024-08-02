
var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;


// Preload images for smoother transitions
function preloadImages() {
	for (var i = 0; i < imageArray.length; i++) {
		var img = new Image();
		img.src = imageArray[i];
	}
}

window.onload = function() {
	preloadImages();
};

function showImage() {
    // Set the image source and text for the current index
    myImage.setAttribute("src", imageArray[imageIndex]);
    myTxt.innerHTML = txtArray[imageIndex];
    
    // Wait for the image to load before proceeding to the next image and text
    myImage.onload = function() {
        setTimeout(function() {
            // Increment the image index
            imageIndex++;
            if (imageIndex >= len) {
                imageIndex = 0;
            }
            // Call the showImage function again to display the next image and text
            showImage();
        }, 4500); // Adjust this delay as needed
    };
}


function play() {
    if (t == 0) {
        myImage.setAttribute("src", "");
        myTxt.innerHTML = "";
        imageIndex = 0;
        clearInterval(showImageInterval);
        clearInterval(imgInterval);
    }
    flag = 1 - flag;
    document.getElementById("typeDiv").style.opacity = flag;
    document.getElementById("imgTxt").style.opacity = 1 - flag;
    if (t == 0) {
        setTimeout(showImage, 1000);
    }
    t++;
}


function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}



function event(){

	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();