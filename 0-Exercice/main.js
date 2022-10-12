document.getElementById("afficher").addEventListener("click", (evenement) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./traitement.php");
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4){
            if (xhr.status == 200 | xhr.status == 304){
                let films = JSON.parse (xhr.responseText);

                let div = document.getElementById("resultat");
                let p = document.createElement("p");
                let message = "";
                for (index in films){
                    message += `Le film ${films[index].nom} dure ${films[index].duree} minutes. Voici sa description: ${films[index].description}.<br>`;
                }
                p.innerHTML = message;
                div.appendChild(p);
            }
            else{
                document.getElementById("resultat").innerHTML = "Erreur";
            }
        }
    }
})