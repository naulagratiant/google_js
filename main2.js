let monTableau = document.querySelector('#tableau');


let tabSize = parseInt (prompt ("Quelle dimension de la grille veux-tu?"));
for (var iter = 1; iter <= tabSize*tabSize; iter++) {
  monTableau.innerHTML += '<div class = "divcel">'+ iter + '</div>'
}

