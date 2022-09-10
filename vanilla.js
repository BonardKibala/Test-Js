// var bloc = document.getElementsByClassName('bloc'); recuperer des elts par leurs classes, retourne une collection
//var bloc=document.getElementsByTagName('div') //Recupérer un élément à partir de sa balise, retourne une collection

var bloc = document.querySelector(".bloc #div-enf");
bloc.innerHTML ="Je suis Bnrd";
bloc.style.color = "white";
bloc.style.backgroundColor ="black";
bloc.style.borderRadius ="25px"
console.log(bloc);

var lien = document.querySelector("a");
lien.setAttribute('href', "https://www.facebook.com");