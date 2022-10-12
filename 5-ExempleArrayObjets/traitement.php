<?php

include "./Produit.class.php";

$p1 = new Produit('bonbon', 1);
$p2 = new Produit('chocolat', 2.5);
$p3 = new Produit('livre', 7.5);

//meme effet qu'un tableau associatiaf

$arr = [$p1, $p2, $p3]; //on obtiendra souvent un tableau d'objets

echo json_encode($arr); 
?>