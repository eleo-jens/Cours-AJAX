<?php

include "./Film.class.php";

$f1 = new Film("Blonde", 210, "La vie de Marylin Monroe");
$f2 = new Film("James Bond", 80, "Aventures de l'espion 007");
$f3 = new Film("Miss FIB", 60, "Une infiltrée du FIB chez les miss USA");

$films = [$f1, $f2, $f3];

echo json_encode($films);

?>