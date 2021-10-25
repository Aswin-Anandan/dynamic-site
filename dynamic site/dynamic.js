var prev=document.getElementById('prev');
var next=document.getElementById("next");
var thumbnail =document.getElementsByClassName("thumbnail");
var bg=document.getElementById("bg");
var backgroundimg =new Array(
	"file:///D:/games/wallpaper4.jpg",
	"file:///D:/games/wallpaper1.jpg",
	"file:///D:/games/wallpaper2.jpg",
	"file:///D:/games/wallpaper3.jpg",
	"file:///D:/games/wallpaper5.jpg"
	);
let i=0;
next.onclick = function () {
	if(i<4){
	bg.style.backgroundImage ='url("'+backgroundimg[i+1]+'")';
	thumbnail[i+1].classList.add("active");
	thumbnail[i].classList.remove("active");

	i++;
}
}

prev.onclick = function () {
	if(i>0){
	bg.style.backgroundImage ='url("'+backgroundimg[i+1]+'")';
	thumbnail[i-1].classList.add("active");
	thumbnail[i].classList.remove("active");
	i--;
}
}