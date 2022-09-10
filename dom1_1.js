var personne = {
    nom:"xxx",
    prenom :"yyy",
    age: 22,
    direBonjour(){
        return this.nom + " " + this.prenom + " vous avez " + this.age + " ans";
    }
}
personne.nom = "Bnrd";
// console.log(personne.direBonjour());

const personnes = [
    {nom : "kibala", prenom: "Bonard"},
    {nom : "Tondase", prenom : "Benji"},
    {nom : "Hobed", prenom : "Bayekula"}
]