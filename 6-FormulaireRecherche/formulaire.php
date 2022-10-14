<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h5>Recherche d'un film</h5>
    <form action="./traitementRechercheEtendu.php" method="POST" id="formHTML">
        <input type="text" name="title" id="title">
        <input type="submit" value="Chercher">
    </form>
    <div id="resultat"></div>
    <script src="./main.js" type="text/javascript"></script>
</body>
</html>