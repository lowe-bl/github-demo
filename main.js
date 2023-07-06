const  vehicles = [
    {make: "Chevy", model: "Cobalt", year: 2006, type: "sedan", origin: "domestic"},
    {make: "VW", model: "Passat", year: 2013, type: "sedan", origin: "foreign"},
    {make: "Ford", model: "F-150", year: 2022, type: "pickup truck", origin: "domestic"},
    {make: "Nissan", model: "Altima", year: 2010, type: "sedan", origin: "foreign"},
    {make: "Acura", model: "MDX", year: 2015, type: "suv", origin: "foreign"}
];

const ages =[8, 4, 42, 61];

// console.log(vehicles);

// const madeInUSA = vehicles.filter(car => (car.origin === "domestic"));

// console.log(madeInUSA);

// const familySedan = vehicles.filter(car =>(car.type === 'sedan'));

// console.log(familySedan);

// const vehicleNames = vehicles.map(function(car){
//     return car.make;
// });
// console.log(vehicleNames);

// const vehicleModels = vehicles.map(car => `${car.year} ${car.make} ${car.model}`);

// console.log(vehicleModels);

const year = vehicles.map(car =>(car.year));

const sortYear = year.sort((a,b) => a - b);
console.log(sortYear);

const sortAges = ages.sort((a,b) => a - b);
console.log(sortAges);

const totalAges = ages.reduce((total, age) => total + age, 0);
console.log(totalAges);

const combinedMethods = ages
.map(age => age * 3)
// .filter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((a, b) => a + b, 0);

console.log(combinedMethods);
