
import Database from './src/Database/Database.js';
import Person from './src/Database/models/People.js';

let db = new Database();

 //let person = new Person({
 //   name : 'Loukou Koffi ',
   //  age : 21,
     //favoriteFoods : ['Tajin', 'Thiep']
 //});
 //person.name = 'Luca-David';
 //person.age = 20;
 //person.favoriteFoods = ['Sauce Feuille', 'Garba'];


// Person.create([
//     {
//      name : 'Yayus',
//     age : 20,
//     favoriteFoods : ['Gbofloto', 'Yassa']
//     },

//     {
//         name : 'Ange Lenoir',
//        age : 26,
//        favoriteFoods : ['Tacos', 'Chips']
//        }
// ]);

// person.save().then((person) => {
  //   console.log(person);
//})


// Trouver toutes les personnes avec model.find()

// Person.find().then((people) => {
  //   console.log(people);
//})

// Obtenir une personne uniquement par son repas favori

// Person.findOne({favoriteFoods : 'Garba'}).then((person) => {console.log(person);});

// Trouver une personne par son identifiant 

 //let id = "6474dd6e5853f28888b6e2fa";
 //Person.findById(id)
      //  .then((person) => {
      //      console.log(person);
      //  })

      //Mettre à jour par des étapes différentes 

      /*  function findEditThenSave(personId, done) {

            //Déclarez dans une variable la nourriture à ajouter

            var foodAdd = 'hamburger';

            // Trouvez la personne par soin ID

            Person.findById("6474dd6e5853f28888b6e2fa", function(err, data) {
              if (err) {
                return done(err);
              }
              // Ajoutez dans le tableau favoriteFoods

              data.favoriteFoods.push(foodAdd);

              // Utilisez la méthode pour enregistrer

              data.save(function(err, data) {
                if (err) {
                  return done(err);
                }
                done(null, data);
              });
            });
          } */


     // Utilisez la méthode findOneAndUpdate() pour trouver et mettre à jour 

//Person.findOneAndUpdate({name : 'Loukou Koffi'}, {name : "Messi",  age : 32,}, {new:true}, (err)=> {
   // if (err) {
    //    console.log(err)
    //} console.log('data are updated')
//})

//Trouvez l'ID d'un document et le supprimer
//Person.findByIdAndRemove("6474dbdd933cc06431ecbaf3")


          

