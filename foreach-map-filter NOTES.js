/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
const numbers = [1, 2, 4, 6];
function doubleValues(arr) {
   let newArr = [];
   arr.forEach(function (number) {
      let double = number * 2;
      newArr.push(double);
   });
   return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
   let newArr = [];
   arr.forEach(function (number) {
      if (number % 2 === 0) {
         newArr.push(number);
      }
   });
   return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
const words = ['colt', 'matt', 'tim', 'test'];
function showFirstAndLast(arr) {
   let newArr = [];
   arr.forEach(function (word) {
      newArr.push(word[0] + word[word.length - 1]);
   });
   return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
const cars = [
   {
      make: 'Pontiac',
      model: 'Grandam',
      year: 2002,
      color: 'black',
   },
   {
      make: 'Pontiac',
      model: 'Sunbird',
      year: 1992,
      color: 'white',
   },
   {
      make: 'Mazda',
      model: 'Milenia',
      year: 2001,
      color: 'black',
   },
   {
      make: 'Ford',
      model: 'Fusion',
      year: 2008,
      color: 'red',
   },
   {
      make: 'Honda',
      model: 'Civic',
      year: 2017,
      color: 'white',
   },
];
// NOTE: each object within this array is the (val); the (val[key]) is searching the object for that key;
// so in the below function, if an existing key is entered (example make), it will update each val for each of those keys
// if a new key is entered, it will add the key and value to each object
function addKeyAndValue(arr, key, value) {
   arr.forEach(function (val) {
      val[key] = value;
   });
   return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function isVowel(character) {
   return 'aeiou'.indexOf(character) !== -1;
}

function vowelCount(str) {
   const strArr = Array.from(str);
   const newObj = {};
   const vowels = 'aeiou';
   strArr.forEach(function (letter) {
      let lowerLetter = letter.toLowerCase();
      if (vowels.indexOf(lowerLetter) !== -1) {
         if (newObj[lowerLetter]) {
            newObj[lowerLetter]++;
         } else {
            newObj[lowerLetter] = 1;
         }
      }
   });
   return newObj;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/
const numArr = [1, 2, 3];
function doubleValuesWithMap(arr) {
   return arr.map(function (num) {
      return num * 2;
   });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
   return arr.map(function (num, indx) {
      return num * indx;
   });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/
const extractKeyNames = [
   { name: 'Elie' },
   { name: 'Tim' },
   { name: 'Matt' },
   { name: 'Colt' },
];

function extractKey(arr, key) {
   return arr.map(function (value) {
      return value[key];
   });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/
const extractNames = [
   { first: 'Elie', last: 'Schoppik' },
   { first: 'Tim', last: 'Garcia' },
   { first: 'Matt', last: 'Lane' },
   { first: 'Colt', last: 'Steele' },
];
function extractFullName(arr) {
   return arr.map(function (value) {
      return value.first + ' ' + value.last;
   });
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

const valueFilter = [
   { first: 'Elie', last: 'Schoppik' },
   { first: 'Tim', last: 'Garcia', isCatOwner: true },
   { first: 'Matt', last: 'Lane' },
   { first: 'Colt', last: 'Steele', isCatOwner: true },
];

// NOTE: so we have an array full of objects; we use array.filter; each object is a (val); for each (val) we are searching it for the (key) // val[key]
// if the key within the object matches, it returns it
function filterByValue(arr, key) {
   return arr.filter(function (val) {
      return val[key] !== undefined;
   });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

const findMe = [1, 2, 3, 4, 5];
function find(arr, searchValue) {
   return arr.filter(function (val) {
      return val === searchValue;
   })[0];
}
// NOTE:[0] returns undefined?

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/
const findMeObj = [
   { first: 'Elie', last: 'Schoppik' },
   { first: 'Tim', last: 'Garcia', isCatOwner: true },
   { first: 'Matt', last: 'Lane' },
   { first: 'Colt', last: 'Steele', isCatOwner: true },
];
function findInObj(arr, key, searchValue) {
   return arr.filter(function (value) {
      return value[key] === searchValue;
   })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
   const vowels = 'aeiou';
   const lower = str.toLowerCase();
   const strArr = Array.from(lower);
   return strArr
      .filter(function (letter) {
         return vowels.indexOf(letter) === -1;
      })
      .join('');
}
// NOTE:.join joins together an array into a string; whatever is placed within the parrends is the seperator for each array value; leaving blank mushes it all together

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/
const oddNums = [1, 2, 3, 4, 5];
function doubleOddNumbers(arr) {
   return arr
      .filter(function (num) {
         return num % 2 !== 0;
      })
      .map(function (oddNum) {
         return oddNum * 2;
      });
}
