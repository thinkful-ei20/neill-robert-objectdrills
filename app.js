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

