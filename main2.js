let monTableau = document.querySelector('#tableau');

let tabSize = parseInt (prompt ("Quelle dimension de la grille veux-tu?"));
let mesCellules = "";
for (var iter = 1; iter <= tabSize*tabSize; iter++) {
	mesCellules += '<div class = "divcel divcelsize"></div>'
}
monTableau.innerHTML = mesCellules;

var S = document.createElement('style');
S.setAttribute("type", "text/css");
var cl1 = '.divcelsize { width: ' + (300/tabSize) + 'px; height: ' + (300/tabSize) + 'px; }';
if (S.styleSheet){
	S.styleSheet.cssText=cl1;
}
else{ 
	cl1 = document.createTextNode(cl1); 
	S.appendChild(cl1);
}
document.body.appendChild(S);