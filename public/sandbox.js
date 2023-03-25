"use strict";
let id = '3';
let ids = [1, 3, 4, 5];
// Tuple
let person = [1, 'Hi', false];
let employee;
employee = [
    [1, 'John'],
    [2, 'Paul'],
];
// Union types
let identities;
identities = 22;
identities = 'Woosh';
// Enums aka Enumerated Type
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Right);
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerID = <number>cid;
let customerID = cid;
customerID = 2;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(4, 2));
function log(message) {
    console.log(message);
}
log('Sssuup');
const mtu = {
    id: 22,
    name: 'Mike',
};
const p1 = 1;
console.log(p1);
const nduwano = {
    activity: 'Kuvuka',
    attendees: 3,
};
console.log(nduwano);
nduwano.activity = 'Happy New Year';
// nduwano.attendees = 77;
console.log(nduwano.activity);
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Using the implements keyword when using an interface on a class
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered with ID number ${this.id}`;
    }
}
const bob = new Person(1, 'Bob');
const sam = new Person(3, 'Sam');
console.log(bob);
console.log(sam);
// bob.id = 5;
// console.log(bob);
console.log(bob.register());
// Extending a class. Subclasses.
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, 'Shaun', 'Developer');
console.log(emp.name);
console.log(emp.position);
console.log(emp.id);
console.log(emp.register());
// Generics
// The T here acts as a generic. A placeholder that we can use to replace the type
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 4, 5, 6, 7, 8, 9, 10]);
let strArray = getArray(['Brad', 'Prince', 'Hammer', 'Ross']);
