'use strict';

// //Drill 1
// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return (this.water / this.flour) * 100;
//   }
// };

// // console.log(`loaf properties are ${loaf.flour} and ${loaf.water}`);
// // console.log(loaf.hydration());

// //Drill 2
// const myObj = {
//   foo: 'fizz',
//   bar: 'foobar',
//   fum: 'fee fye',
//   quux: 12,
//   spam: false,
// };

// for (let p in myObj) {
//   // console.log(myObj[p]);
// }

// //Drill 3
// const hobbitStuff = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
// };

// // console.log(hobbitStuff.meals[3]);

// //Drill 4
// const characters = [
//   { name: 'Gandolf', jobTitle: 'Wizard' },
//   { name: 'Legolas', jobTitle: 'Archer', boss: 'Gandolf' },
//   { name: 'Sam', jobTitle: 'Companion', boss: 'Gandolf' },
//   { name: 'Sauron', jobTitle: 'Big eye', boss: 'Gandolf' },
// ];

// //characters.forEach(x => console.log(`I am ${x.name} and I am a ${x.jobTitle}`));


// // Drill 5. Properties that aren't there

// // characters.forEach(x => {
// //   if (x.boss) {
// //     console.log(`${x.jobTitle} ${x.name} reports to ${x.boss}.`);
// //   } else {
// //     console.log(`${x.jobTitle} ${x.name} reports to nobody`);
// //   }
// // });

// // 6. Cracking the code

// let secretMessage = 'craft block argon meter bells brown croon droop';

// const cipher = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 5,
// };


// function decode(string) {
//   let splitSecretMessage = string.split(' ');
//   const splitArr = splitSecretMessage.map(x => {

//     if (x[0] in cipher ) {
//       return x[cipher[x[0]]-1];


//     } else {
//       return ' ';
//     }
//   });
//   return splitArr.join('');
// }

// console.log(decode(secretMessage));


// 6. Cracking the code


// function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  
//   return {
//     name,
//     nickname,
//     race,
//     origin,
//     attack,
//     defense,
//     weapon,
//     describe: function() {
//       console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${weapon}.`);
//     },
//     evaluateFight: function(character) {
//       let x = (this.attack - character.defense) >=0 ? this.attack - character.defense : 0;
//       let y = (character.attack - this.defense) >=0 ? character.attack - this.defense : 0;
      
//       return `Your opponent takes ${x} damage and you receive ${y} damage`;
//     }
//   };
// }

// const characters = [
//   createCharacter('Gandalf the White ', 'gandalf' , 'Wizard' , 'Middle Earth' , 10 , 6, 'a wizard staff'), 
//   // { }
//   createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
//   createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
//   createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
//   createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'a Bow and Arrow'),
// ];

// characters.push(createCharacter('Arwen Undomiel', 'Arwen', 'Half-Elf', 'Rivendell', 7, 3, 'Hadhafang'));

// let aragorn = characters.find(x => {
//   return x.nickname === 'aragorn';
// });

// let hobbits = characters.filter(x => {
//   return x.race === 'Hobbit';
// });

// let strongCharacters = characters.filter(x => {
//   return x.attack > 5;
// });

// console.log(aragorn.describe());
// console.log(strongCharacters);

// 8. BONUS: A Database Search
// const HEROES = [
//   { id: 1, name: 'Captain America', squad: 'Avengers' },
//   { id: 2, name: 'Iron Man', squad: 'Avengers' },
//   { id: 3, name: 'Spiderman', squad: 'Avengers' },
//   { id: 4, name: 'Superman', squad: 'Justice League' },
//   { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//   { id: 6, name: 'Aquaman', squad: 'Justice League' },
//   { id: 7, name: 'Hulk', squad: 'Avengers' },
// ];

// function findOne(arr, query) {
//   if (Object.keys(query).length === 0) return null;
//   let holder = arr.find(x => {
//     for (let key in query){
//       if (!x.hasOwnProperty(key) || !(x[key] === query[key])) {
//         return false;
//       }
//     }
//     return true;
//   });
//   return holder ? holder : null;
// }

// console.log(findOne(HEROES, { id: 1 }));

// console.log(findOne(HEROES, { id: 10 }));

// console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));

// console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));

// console.log(findOne(HEROES, { squad: 'Justice League' }));

// console.log(findOne(HEROES, {}));

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query) {
    if (Object.keys(query).length === 0) return null;
    let holder = this.store.heroes.find(x => {
      for (let key in query){
        if (!x.hasOwnProperty(key) || !(x[key] === query[key])) {
          return false;
        }
      }
      return true;
    });
    return holder ? holder : null;
  }
};

console.log(Database.findOne({ id: 1 }));

console.log(Database.findOne({ id: 10 }));

console.log(Database.findOne({ id: 2, name: 'Aquaman' }));

console.log(Database.findOne({ id: 5, squad: 'Justice League' }));

console.log(Database.findOne({ squad: 'Justice League' }));

console.log(Database.findOne({}));