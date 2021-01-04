# .map(), .filter(), .reduce(), .forEach()

## Map

The `map()` method is used to apply a function on every element in an array. A new array is then returned.
The index argument is optional.

### When to use?

**When you want to _transform_ elements in an array** without messing with the original array.

### Syntax

```js
const newArr = oldArr.map(function (value, index) {
  // return element to new Array
});
```

eg:

```js
const arr = [1, 2, 3, 4];
const newArr = arr.map(function (value) {
  if (value % 2 === 0) {
    return value * 2;
  } else {
    return value;
  }
});

console.log(newArr);

// Console output:
[1, 4, 3, 8];
```

---

## Filter

The `filter()` method returns a new array created from all elements that pass a certain test preformed on an original array. The index argument is optional.

### When to use?

**When you want to _filter_ out elements in an array**

### Syntax

```js
const newArr = oldArr.filter(function (value, index) {
  return; // expression that evaluates to true or false
  // function should return true or false
  // true means keep the element
  // false means discard the element
});
```

eg:

```js
const data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];

const newArr = data.filter(function (value) {
  return value.population > 500000000;
});

console.log(newArr);

// Console output:
[
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
];
```

---

## For Each

### When to use?

**When you need to execute a function on each element in an array and CANNOT use another method**
Normally one of the other methods will do for manipulating arrays/data. forEach is more commonly used if you want to do something external to your JS - eg: creating DOM nodes, making requests.

- Loops over each element in an array
- nothing is returned, is used to **execute a function on each element**

```js
const array = [1, 2, 3];
array.forEach(function (element) {
  console.log(element);
});
```

### Challenge 1

Use forEach to log an x amount of stars `*` where there's an x in the array, for example:

```js
arr = [1, 2, 3, 2, 1];
// would log
// *
// **
// ***
// **
// *
```

---

## Reduce

The `reduce()` method is used to apply a function to each element in the array to reduce the array to a single value (which could be any thing such as string/number/object...).

### When to use?

**When you want to derive a _single_ value out of an array**

### Syntax

This time the callback (function argument) function takes 4 arguments, the **accumulator** as well as the value, index and arr.

As well as the callback as with forEach,map & filter, reduce also takes an initial value for the accumulator. If you do not pass an initial value the 0th element of the array is used.

```js
const newArr = oldArr.reduce(function (accumulator, value, index) {
  // return the new value of the accumulator
}, initValue);
```

eg:

```js
const arr = [1, 2, 3, 4];

const value = arr.reduce(function (accumulator, value) {
  return accumulator - value;
}, 100);

console.log(value);

// Console output:
// 90
```

---

### Challenge 2

Using the reduce() method, can we convert this array of countries and populations to an object, where each key is the country name, and the value is the population

```js
// The data to test the function
const data = [
  {
    country: "China",
    pop: 1409517397,
  },
  {
    country: "India",
    pop: 1339180127,
  },
  {
    country: "USA",
    pop: 324459463,
  },
  {
    country: "Indonesia",
    pop: 263991379,
  },
];

// Example of the solution
{
  China: 1409517397,
  India: 1339180127,
  USA: 324459463,
  Indonesia: 263991379,
}
```

### Challenge 3

Using `Object.keys()` (look it up :D) and one of the other array methods, do the reverse of challenge 2. That is, convert your object of countries into an array that looks like `data` above.

### Challenge 4

Using reduce, calculate the sum of all sub-arrays
for example, the sum of the following array would be 27:

```js
const arr = [
  [1, 2, 3],
  [1, 2, 3],
  [4, 5, 6],
];
```

---
