document.getElementById("afficher").addEventListener("click", (evenement) => {
  let xhr = new XMLHttpRequest(); // l'objet pour l'Ajax: pour faire l'appel et stocker les donner
  xhr.open("GET", "./traitement.php"); // methode de l'objet xhr: que tu me charges cette page
  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200 || xhr.status == 304) {
        // je dois prendre le json et le transformer en un array de JS
        // json_decode en PHP | JSON.parse() en JS

        // console.log (xhr.responseText); //la chaine de caractère ne nous sert pas
        // console.log (typeof(xhr.responseText)) //type: string

        let arrayNomsJS = JSON.parse(xhr.responseText); //json_decode: essaye de générer une structure de données en JS à partir de la chaine de json
        console.log(arrayNomsJS); //affiche un array
        console.log(typeof arrayNomsJS); // type: objet

        let div = document.getElementById("contenuReponse");

        let ul = document.createElement("ul");
        for (index in arrayNomsJS) {
          let li = document.createElement("li");
          li.innerHTML = arrayNomsJS[index];
          ul.appendChild(li);
        }
        div.appendChild(ul);

        // document.getElementById("contenuReponse").innerHTML = xhr.responseText; // prend la réponse du serveur au format string // ici n'affiche rien car la réponse n'est pas prête
      } else {
        // window.location.href = "./pageErreur.html"; pour rediriger vers une page d'erreur configurée
        document.getElementById("contenuReponse").innerHTML = "Un chat perdu";
      }
    }
  };
});
