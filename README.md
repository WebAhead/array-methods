# .map(), .filter(), .reduce(), .forEach()

## Map

The `map()` method is used to apply a function on every element in an array. A new array is then returned.

### When to use?
**When you want to *transform* elements in an array** without missing with the original array.

### Syntax
```js
let newArr = oldArr.map(function(value, index) {
  // return element to new Array
});
```

eg:
```js 
let arr = [1,2,3,4]
let newArr = arr.map(function(value,index) {
  if (value % 2 === 0){
    return value * 2;
  } else {
    return value;
  }
});

```
What does newArr look like?

---
## Filter

The `filter()` method returns a new array created from all elements that pass a certain test preformed on an original array.

### When to use?
**When you want to *filter* out elements in an array**

### Syntax
```js
let newArr = oldArr.filter(function(value, index) {
  return // expression that evaluates to true or false
  // function should return true or false
  // true means keep the element
  // false means discard
});
```

eg:
```js 
let data = [
  {
    country: 'China',
    population: 1409517397,
  },
  {
    country: 'India',
    population: 1339180127,
  },
  {
    country: 'USA',
    population: 324459463,
  },
  {
    country: 'Indonesia',
    population: 263991379,
  }
]

let newArr = data.map(function(value,index) {
  return value.population > 500000000
});

```
What does newArr look like?

---
## Reduce

The `reduce()` method is used to apply a function to each element in the array to reduce the array to a single value (which could be any thing such as string/number/object...).


### When to use?
**When you want to derive a *single* value out of an array**

### Syntax
This time the callback (function argument) function takes 4 arguments, the **accumulator** as well as the value, index and arr.

As well as the callback as with forEach,map & filter, reduce also takes an initial value for the accumulator. If you do not pass an initial value the 0th element of the array is used.

```js
let newArr = oldArr.reduce(function(accumulator, value, index) {
  // return the new value of the accumulator
}, initValue);
```

eg:
```js 
let arr = [1,2,3,4];

let value = arr.reduce(function(accumulator, value) {
  return accumulator - value;
}, 100);

```
What is the value?


---
### Challenge pt 1
Using the reduce() method, can we convert this array of countries and populations to an object, where each key is the country name, and the value is the population?

```js
let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]
```

### Challenge pt 2
Using `Object.keys()` (look it up :D) and one of the other array methods, do the reverse of challenge 1. That is, convert your object of countries into an array that looks like `data` above.

### Challenge pt 3
Using reduce, calculate the sum of all sub-arrays 
for example, the sum of the following array would be 27:
```js
var arr = [
  [1,2,3],
  [1,2,3],
  [4,5,6]
];
```

### Challenge pt 4
You have learned that you can map an array and square every element in it, e.g.:
```js
  return [1,2,3].map(function(element){
    return element*element;
  } // Would return [1,4,9]
```
Implement the same functionality with reduce

---

## For Each

### When to use?
**When you need to execute a function on each element in an array and CANNOT use another method**
Normally one of the other methods will do for manipulating arrays/data. forEach is more commonly used if you want to do something external to your JS - eg: creating DOM nodes, making requests.

- Loops over each element in an array
- nothing is returned, is used to **execute a function on each element**

```js
var array = [1,2,3];
array.forEach(function(element){
  console.log(element);
});
```
### Challenge pt 5
Use forEach to log an x amount of stars `*` where there's an x in the array, for example:
```js
arr = [1,2,3,1];
// would log 
// *
// **
// ***
// *
```
