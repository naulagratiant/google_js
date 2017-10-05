let centre = document.querySelector('section');
centre.style.display = "none";
let boutonCentral = document.querySelector("#central");
boutonCentral.onclick= function (){
	centre.style.display = "flex";
	document.querySelector('#section_bouton').style.display= "none";

}
document.querySelector("#rech").onclick = function(){
	if (document.querySelector("#search").value !== "")
		document.location.href="https://www.google.com/#q=" + document.querySelector("#search").value.split(" ").join("+");

}