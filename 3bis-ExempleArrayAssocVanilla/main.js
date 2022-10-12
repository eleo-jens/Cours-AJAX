document.getElementById("afficher").addEventListener("click", (evenement) => {
  let xhr = new XMLHttpRequest(); // l'objet pour l'Ajax: pour faire l'appel et stocker les donner
  xhr.open("GET", "./traitement.php"); // methode de l'objet xhr: que tu me charges cette page
  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200 || xhr.status == 304) {
        console.log(xhr.responseText); //la chaine de caractère ne nous sert pas
        console.log(typeof xhr.responseText); //type: string

        // on recoit un array d'objet suite au décodage de json
        let arrayObj = JSON.parse(xhr.responseText);
        console.log(arrayObj);
        console.log(typeof arrayObj);

        // parcourir en JS avec for...

        // document.getElementById("contenuReponse").innerHTML =
        // obj.nom + " aime bien " + obj.hobby + " et vient de " + obj.location;
      } else {
        // window.location.href = "./pageErreur.html"; pour rediriger vers une page d'erreur configurée
        document.getElementById("contenuReponse").innerHTML = "Un chat perdu";
      }
    }
  };
});
