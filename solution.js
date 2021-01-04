// Challenge 1
arr = [1, 2, 3, 2, 1];
arr.forEach(function (element) {
    console.log('*'.repeat(element));
});


// Challenge 2
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

// our accumulator here is an object
const newData = data.reduce(function (accumulator, countryObj) {
    const country = countryObj.country
    const pop = countryObj.pop

    accumulator[country] = pop

    return accumulator
}, {})

// Challenge 3
const data = {
    China: 1409517397,
    India: 1339180127,
    USA: 324459463,
    Indonesia: 263991379,
}

const newData = Object.keys(data).reduce(function (accumulator, country) {
    const pop = data[country]

    return accumulator.concat({
        country: country,
        pop: pop
    })
}, [])


// Challenge 4
const arr = [
    [1, 2, 3],
    [1, 2, 3],
    [4, 5, 6],
];

const sum = arr.reduce(function (accumulator, subArr) {
    const subArraySum = subArr.reduce(function (subAccumulator, num) {
        return subAccumulator + num
    }, 0)

    return subArraySum + accumulator
}, 0)