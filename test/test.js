// function Vowelcount(str){

// str = str.match(/[aeiou]/ig).length;
// return str;

// }

// console.log(Vowelcount("JE suiaAs BNRD"))
//----------------------------------------------------------------------
// function capitalizeFirstLetter(string) {
//     return string.slice(0,1).toUpperCase() + string.slice(1);
//   }

//   console.log(capitalizeFirstLetter('foo'));
//---------------------------------------------------------------

//   function longestWord(sen){
// sen = sen.split(/[ ,.:!;&]/ig)
// const tab = sen.map(element=>element.length).sort((a,b)=> a-b).slice(-1)
// const elementFinded = sen.find(elt=>elt.length==tab[0])
// return elementFinded
//   }
//   console.log(longestWord("fun&! time"));

//-------------------------------------------------------------------

// function camelCase(str) {
//     const reg = /\W+/ig
//     // str=str.replace(reg,"")
//     // const reg1 = /\b/

//     str = str.slice(0, 1).toUpperCase() + str.slice(1)
//     str = str.split(/[ ,.:!;&]/ig)
//     const reg2 = /[A-Z]/g
//     let strConvert = "";
//     for (let i = 0; i < str.length; i++) {
//         strConvert += reg2.test(str[i].slice(0, 1)) ? str[i].slice(0, 1) + str[i].slice(1).toLowerCase() + " " : str[i].slice(0, 1).toUpperCase() + str[i].slice(1).toLowerCase() + " "

//     }
//     strConvert = strConvert.slice(0,1).toLowerCase() + strConvert.slice(1)
//     strConvert=strConvert.replace(reg,"")

//     return strConvert
// }
// console.log(camelCase())

//---------------------------------------------------------------------

//test 2
//----------------------------------1---------------------------------------------

// function SimpleSymbols(str) {

//     const symbols = /[+][a-z][+][=][0-9][=][+][a-z][+]/ig

//     str = symbols.test(str)
//       return str;

//     }

//     // keep this function call here
//     console.log(SimpleSymbols("+b+=4=+f+"));
//     //--------------------------------------------------2---------------------------------------
// function ABCheck(str) {

//     str=str.split(/\W+/g)
//     const strMap = str.find(element => element.slice(1).length===3)
//     str = strMap? true :false
//       return str;

//     }

//     // keep this function call here
//     console.log(ABCheck("Ab-hrhrhrh?tfgg"));

//---------------------------------------------------4--------------------------------------------------------------------
// function ArrayAddition(arr) {

// arr = arr.sort(function (a, b) { return a - b })
// const largestElement = arr[arr.length - 1]
// arr.pop()
// let sum = arr.reduce((a,b)=>a+b)

// for (let counter = 0; counter < arr.length; counter++) {
//     if (sum-arr[counter] == largestElement) {
//       return true
//     }
//     else if(largestElement-sum ==0){
//       return true
//     }

// }
// return false
// }

// console.log(ArrayAddition([3, 4, -1, 8, 12]));

//----------------------------------------------6---------------------------------------------------------

//-------------------------------------------7------------------------------------------------------

// function ArrayRotation(arr) {
//   const firstElement = arr[0]
//   let listElement = ''
//   for(let i=firstElement;i<arr.length;i++){
//       listElement +=arr[i]
//     }
//   for (let j =0; j<firstElement;j++)
//   {
//     listElement += arr[j]
//   }
//     return listElement
//   }
// console.log(ArrayRotation([4,3,4,3,1,2]));

// function Calculate_Sum_Of_Square_Of_Digits(number) 
// {
// 	let sum = 0;
// 	for( let i=0; i<number.length; i++)
// 	{
// 		sum += Math.pow( +number[i], 2 );
// 	}
// 	return sum;
// }

// function HappyNumbers( num )
// {
// 	let number = String( num );
// 	let numbers = [];

// 	while( true )
// 	{
// 		let sum = Calculate_Sum_Of_Square_Of_Digits( number );
// 		number = String( sum );
// 		if( number == "1" )
// 		{
// 			return true;
// 		}
// 		else if( numbers.includes(number))
// 		{
// 			return false;
// 		}
// 		numbers.push(String(sum));
// 	}

// }

// // KEEP THIS FUNCTION CALL HERE
// console.log(HappyNumbers(16));

//-----------------------------------------------------------
// Demandez à la fonction MathChallenge( num ) de prendre l'entrée, qui sera un entier compris entre 1 et 250,
//et de renvoyer une sortie entière qui spécifiera le plus petit nombre de pièces qui, une fois ajoutées, seront
//égales à l'entier d'entrée. Les pièces sont basées sur un système comme suit : il existe des pièces
//représentant les nombres entiers 1, 5, 7, 9 et 11. Ainsi, par exemple : si num est 16, alors la sortie
//devrait être 2 car vous pouvez obtenir le nombre 16 avec le pièces 9 et 7. Si num est 25, alors la sortie
//devrait être 3 car vous pouvez obtenir 25 avec soit 11, 9 et 5 pièces ou avec 9, 9 et 7 pièces.

// function MathChallenge(num) {

//   if (num >= 1 && num <= 250) {
//      let counter=Math.floor(num/11);
//      let nbr = num%11;
//      if(nbr==0) return counter;
//      else if (nbr%2==1) return counter+1;
//      else return counter + 2;
//   }
// }
// console.log(MathChallenge(16));

// function Numbers(number) {
//   const elementsContainer = [
//     { id: 1, name: "un" },
//     { id: 2, name: "deux" },
//     { id: 3, name: "trois" },
//     { id: 4, name: "quatre" },
//     { id: 6, name: "cinq" },
//   ];
//   const objectFind = elementsContainer.find(({ id }) => id === number);
//   return objectFind ? objectFind.name : "Valeur non existante";
// }
// console.log(Numbers(6));

// function caracteresCount(stringM) {
//   let output = "";
//   const stringMatch = stringM.match(/a+|b+|c+|d+/gi);
//   for (let i = 0; i < stringMatch.length; i++) {
//     output += stringMatch[i].slice(0, 1) + stringMatch[i].length;

//     // output += stringMatch[i][0] + stringMatch[i].length;
//   }
//   return output;
// }
// console.log(caracteresCount("aaabbbccccdddaab"));

//CAMEL CASE
// function camelSentence(str) {
//   return  (str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr)=>
//   {
//       return chr.toUpperCase();
//   });
// }
// console.log(camelSentence('cats AND*Dogs-are Awesome'));

// function permutation(array, n) {
//   let item;
//   for (i = 1; i <= n; i++) {
//     item = array.pop();
//     array.unshift(item);
//   }
//   return array;
// }
// console.log(permutation([2, 3, 5, 7, 8], 2));

// function deletedoublon(str){
//   const strMatch = str.match(/A+|B+/g);
//   // let strConcat = [];
//   let strConcat = ""
//   for (let i =0;i<strMatch.length;i++){
// // strConcat += strMatch[i].slice(0,1);
// strConcat += strMatch[i][0];
//   }
//   // return strConcat.join('');
//   return strConcat;
// }
// console.log(deletedoublon('AAABBBAB'))

// function makeid(length) {
//   var result           = '';
//   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//  }
//  return result;
// }
// console.log(makeid(9));

// function rot13(str,num) {
//   let decoded = '';
//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i);
//     if (charCode >= 65 && charCode <= 90) {
//       let vary = charCode + num;
//       if (vary > 90) {
//         let newVary = vary - 90 - 1 + 65;
//         decoded += String.fromCharCode(newVary)
//       } else {
//         decoded += String.fromCharCode(vary)
//       };
//     } else {
//       decoded += String.fromCharCode(charCode)
//     }
//   };
//   return decoded;
// };
// console.log(rot13("Caesar Cipher",2));


//------------------------------------------------------------------------------------------------
//Depuis Mozilla : la charCodeAt()méthode renvoie la valeur numérique Unicode du caractère à l'index donné. La méthode statique String.fromCharCode()renvoie une chaîne créée à l'aide de la séquence spécifiée de valeurs Unicode.

//Nous créons d'abord une variable vide appelée  décodée . Cela nous permettra plus tard de remplir un caractère décodé à la fois jusqu'à ce que nous atteignions la solution.

//Ensuite, nous créons une boucle for. Dans ce cas, j'ai utilisé la notation abrégée for(var i in str)qui est l'équivalent de for(i = 0; i < str.length; i++). Cela parcourra toute la chaîne d'entrée chiffrée.

//Notre première vérification consiste à voir si le caractère de la chaîne n'est pas "A à Z", comme un point ou un espace. A avait un charCode de 65 et Z de 90, nous vérifions donc si notre caractère actuel est en dehors de la plage de 65 à 90. Si c'est le cas, nous l'ajoutons directement à notre chaîne décodée sans aucune manipulation et continuons à exécuter la boucle.

//Ensuite, nous vérifions si un caractère est A - M. La raison pour laquelle nous devons faire cela est que nous ne pouvons pas simplement décaler vers la gauche 13 (soustraire 13) pour les caractères avec des valeurs 65 - 77. Par exemple, prenons la lettre E . Il a une valeur charCode de 69. Si nous soustrayons 13, ce sera 56, qui est le nombre 8. Évidemment, cela ne fonctionne pas. La solution est de boucler à partir de la fin de l'alphabet.

//Nous pourrions le faire en essayant de trouver le reste une fois que nous nous sommes déplacés vers la gauche autant que possible. Le calcul va comme ceci 90 – (13 – (69 – 65)). Cependant, il est plus simple de boucler dans l'autre sens dans l'alphabet, en se déplaçant vers la droite. Donc, à la place, nous ferions 69 + 26 (lettres de l'alphabet) - 13 (décalage à gauche) ou 69 + 13 (26-13).

//Enfin, on peut décaler vers la gauche tous les caractères supérieurs à charCode 77 par 13.

//Chaque nouveau caractère est ajouté à la chaîne décodée avec decoded+=. À la fin, nous renvoyons notre chaîne décodée.
//--------------------------------------------------------------------------------------
//il permet de décoder un chiffrement de César
// function rot13(str,num) {
//   var decoded = "";
//   for (var i in str) {
//     if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91) {
//       // check if char is outside A-Z range
//       decoded += str[i];
//       continue;
//     }
//     // chars A-M will loop back over Z, so you need to add 13(26-13)
//     if (str.charCodeAt(i) < 78) {
//       decoded += String.fromCharCode(str.charCodeAt(i) + num);
//     }
//     // all remaining chars - N-Z
//     else {
//       decoded += String.fromCharCode(str.charCodeAt(i) - num);
//     }
//   }
//   return decoded;
// }
// console.log(rot13("FGGFGDG KDQHS CBCJD",13));


// Mon meilleur algorithme coderbyte pour la candidature kda ------------sans optimiser--------
//Il permet de faire le chiffrement de César Cipher
// function CaesarCipher(str,num) { 
//   var arr =[];
//   var re = /[a-z]/i;
//   for(var i=0; i<str.length; i++){
//       if(str[i].match(re)){
//         // console.log(str.charCodeAt(i) + num);
//           arr.push(str.charCodeAt(i)+num);
//       }
//       else{
//           arr.push(str.charCodeAt(i));
//       }
//   }
//   for(var i=0; i<arr.length; i++){
//       arr[i] = String.fromCharCode(arr[i]);
//     //   console.log(arr[i]);
//   }
//   return arr.join("");
// }
// console.log(CaesarCipher("Hello",4))

//------------------------Son amélioration (debut de l'optimisation(optimiser))------------------------
// function CaesarCipher(str,num) { 
//     var arr =[];
//     var re = /[A-Za-z]/i;
//     for(var i=0; i<str.length; i++){
//         if(str[i].match(re)){
//             arr.push(str.charCodeAt(i)+num);
//         }
//         arr[i] = String.fromCharCode(arr[i]);
//     }
//     return arr.join("");
//   }
//   console.log(CaesarCipher("Hello",4))
  //-------------------Fin de l'optimisation----------------------------


