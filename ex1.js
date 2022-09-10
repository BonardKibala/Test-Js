// Calcul de la factorielle
do {
    var nombre = prompt("entrez votre nombre");
    if (nombre>20) {
        alert(nombre +" est superieur à 20");
    }
    else if (nombre<0)
    {
        alert(nombre + " est inférieur à 0");
    }
   else if (isNaN(nombre)){
        alert("Veuillez saisir un nombre, ceci est une chaine");
    }
    else if(nombre==""){
alert("C'est un vide")
    }
} while (nombre>20 || nombre<0 || nombre=="" || isNaN(nombre));

var factoriel = 1;
var MaVraieValeur=nombre;

    while (nombre != 0) {
        factoriel *= nombre;
        nombre = nombre - 1;
    }
alert("la factorielle de "+ MaVraieValeur + " vaut: "+factoriel);

