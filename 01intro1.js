const name1 = "Rahul";
console.log(name1);

let name2 = "Shubham";
name2 = "sachin";
console.log(name2);

//String Interpolation

let firstName = "Rahul";
let lastName = "Raj";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

//Default Params

// function addTwoNumbers(num1,num2) {
//     return num1+num2;
// }

let addTwoNumbers = (num1, num2) => {
    return num1 + num2;
};
console.log(addTwoNumbers(4, 5));

//Rest and spread Operator

//Spread Operator :
let array = [1, 2, 9, 16, 25, 36];
console.log(...array);

let newArray = [...array, 49, 64, 81, 100];
console.log(...newArray);

//Rest Operator:
let maximumNumber = (...numbers) => {
    let maxi = Number.MIN_VALUE;
    for (let number of numbers) {
        maxi = Math.max(number, maxi);
    }
    return maxi;
}
console.log(maximumNumber(13, 25, 13, 525, 53, 535, 224, 636, 363));

//Objects in Javascript:

let object = {
    name: "Rahul",
    age: 22,
    address: {
        city: "Muzaffarpur",
        state: "Bihar",
        country: "India"
    }
};

let object2 = { ...object };
console.log(object2);

object2.address.city = "Muzaffarpur";
console.log(object);

object2 = JSON.parse(JSON.stringify(object));
object2.address.city = "Patna";
console.log(object);
console.log(object2);