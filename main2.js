let monTableau = document.querySelector('#tableau');

let tabSize = parseInt (prompt ("Quelle dimension de la grille veux-tu?"));
for (var iter = 1; iter <= tabSize*tabSize; iter++) {
	monTableau.innerHTML += '<div id="divcel' + iter +'" class = "divcel"></div>'
	document.querySelector('#divcel'+iter).style.width = (300/tabSize) + "px";
	document.querySelector('#divcel'+iter).style.height = (300/tabSize) + "px";
}