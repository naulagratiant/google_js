let centre = document.querySelector('section');
centre.style.display = "none";
let boutonCentral = document.querySelector("#central");
boutonCentral.onclick= function (){
	centre.style.display = "flex";
	document.querySelector('#section_bouton').style.display= "none";

}
