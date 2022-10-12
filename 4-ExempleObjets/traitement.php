<?php

include "./Produit.class.php";

$p1 = new Produit('bonbon', 1);

echo json_encode($p1); 
?>