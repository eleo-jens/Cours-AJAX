Mon message est: 

<?php
$arr = ['Coco', 'Camille', 'Mariam', 'Anissa'];
//Générer l'html du client dans le serveur

// ne pas faire la présentation dans le traitement
// le desavantage de ça: c'est pas propre: il ne faut pas générer l'html dans le serveur
// la ça mélange le controleur (données) et la présentation (car dans ce cas, l'affichage sera toujours comme ça)
echo "<ul>";
foreach($arr as $nom){
    echo "<li>" . $nom. "</ul>";
}
echo "</ul>";

// faire la présentation avec des append child
// c'est mieux d'envoyer les données et les traiter comme on veut; pas les enfermer dans de l'html; comme le fonctionnement d'une API par exemple
?>