'use strict';

//Drill 1
const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water/this.flour) * 100;
  }
};

// console.log(`loaf properties are ${loaf.flour} and ${loaf.water}`);
// console.log(loaf.hydration());

//Drill 2
const myObj = {
  foo: 'fizz',
  bar: 'foobar',
  fum: 'fee fye',
  quux: 12,
  spam: false,
};

for (let p in myObj){
 // console.log(myObj[p]);
}

//Drill 3
const hobbitStuff = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

// console.log(hobbitStuff.meals[3]);

//Drill 4
const characters = [
  {name: 'Gandolf', jobTitle: 'Wizard'}, 
  {name: 'Legolas', jobTitle: 'Archer'}, 
  {name: 'Sam', jobTitle: 'Companion'}, 
  {name: 'Sauron', jobTitle: 'Big eye'},
]

characters.forEach(x => console.log(`I am ${x.name} and I am a ${x.jobTitle}`));