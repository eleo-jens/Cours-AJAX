<?php
$arr = ['Coco', 'Camille', 'Mariam', 'Anissa'];
//Générer l'html du client dans le serveur

// de array php à une chaine de caractère JSON: json_encode
echo json_encode($arr); //prend un objet et essaye de créer du json à partir de ça
?>