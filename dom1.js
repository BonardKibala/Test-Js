var body = document.body;
var container = document.createElement('div');
container.classList.add('container');

//titre
var title = document.createElement('h1');
title.innerHTML = "Notre page";
container.appendChild(title);

//flex1
var flex1 = document.createElement('div');
flex1.style.display = 'flex';
flex1.style.justifyContent = 'space-evenly';
var p1 = document.createElement(('p'));
p1.style.border = "1px solid red";
p1.style.width = "30%";
p1.style.height = "100px";
p1.innerHTML = 'Text 1';
flex1.appendChild(p1);

var p2 = document.createElement(('p'));
p2.style.border = "1px solid red";
p2.style.width = "30%";
p2.style.height = "100px";
p2.innerHTML = 'Text 2';
flex1.appendChild(p2);
container.appendChild(flex1);

var p3 = document.createElement('p');
p3.style.border = "1px solid red";
p3.style.width = "99%";
p3.style.height = "100px";
p3.innerHTML ="Text 3";
container.appendChild(p3);

// var lien = document.createElement('a');
// lien.style.border = "1px solid red";
// lien.style.width = "100%";
// lien.style.height = "50px";
// lien.innerHTML = "Visiter";
// lien.setAttribute('href', 'https://www.google.com');
// container.appendChild(lien);

var button = document.createElement('button');
button.style.color = 'white';
button.style.backgroundColor = 'black';
button.innerHTML = 'Valider'
button.style.border = '2px solid black'
container.appendChild(button);

body.appendChild(container);


// button.addEventListener('click',function(){
// alert("j'ai cliqué");
// });
p3.addEventListener('',clicked());
function clique(){
    alert('clicked');
};
p3.removeEventListener('click',clique()); // on supprime l'evt click
