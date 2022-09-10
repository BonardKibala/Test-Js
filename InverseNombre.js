function reverse(nombre) {
  // nombre = Number(prompt("Entrez votre nombre"));
  var resultat = 0,x,vraivaleur;

  vraivaleur = nombre;
  while (nombre>=1) {
    x = nombre % 10;
    nombre = parseInt(nombre / 10);
    resultat = resultat * 10 + x;
  }
  // alert(resultat);
  console.log(resultat);
}
reverse(1256);
