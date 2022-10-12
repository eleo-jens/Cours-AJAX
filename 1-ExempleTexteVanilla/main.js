document.getElementById("afficher").addEventListener("click", (evenement) => {
  let xhr = new XMLHttpRequest(); // l'objet pour l'Ajax: pour faire l'appel et stocker les donner

  //   console.log(xhr.readyState); donne 0

  xhr.open("GET", "./traitement.php"); // methode de l'objet xhr: que tu me charges cette page

  //   console.log(xhr.readyState); donne 1

  xhr.send(null);

  //rajouter un evenement
  xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
    // quand l'état vaut 4 je peux le lancer
    if (xhr.readyState == 4) {
      if (xhr.status == 200 || xhr.status == 304) {
        // 200: le status http
        document.getElementById("contenuReponse").innerHTML = xhr.responseText; // prend la réponse du serveur au format string // ici n'affiche rien car la réponse n'est pas prête
      } else {
        // window.location.href = "./pageErreur.html"; pour rediriger vers une page d'erreur configurée
        document.getElementById("contenuResponse").innerHTML = "Un chat perdu";
      }
    }
  };

  // c'est un systeme asyncrone, le processeur n'a pas eu le temps de processer le demande, l'appel au serveur prend plus de temps

  //   console.log(evenement);
  //   console.log(evenement.target);
});
