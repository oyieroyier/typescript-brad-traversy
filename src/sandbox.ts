let id: string = '3';

let ids: number[] = [1, 3, 4, 5];

// Tuple

let person: [number, string, boolean] = [1, 'Hi', false];

let employee: [number, string][];

employee = [
	[1, 'John'],
	[2, 'Paul'],
];

// Union types

let identities: string | number;

identities = 22;

identities = 'Woosh';

// Enums aka Enumerated Type

enum Direction1 {
	Up = 5,
	Down,
	Left,
	Right,
}
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}

console.log(Direction2.Right);

// Objects

type User = {
	id: number;
	name: string;
};

const user: User = {
	id: 1,
	name: 'John',
};

// Type Assertion
let cid: any = 1;
// let customerID = <number>cid;

let customerID = cid as number;
customerID = 2;

// Functions

function addNum(x: number, y: number): number {
	return x + y;
}

console.log(addNum(4, 2));

function log(message: string | number): void {
	console.log(message);
}

log('Sssuup');

// Interfaces (kinda like a custom Type.)

interface UserInterface {
	id: number;
	name: string;
}

const mtu: UserInterface = {
	id: 22,
	name: 'Mike',
};

/*  
 Types are used with primitives and unions
 Interfaces cannot be used with primitives.
*/

type Point = number | string;
const p1: Point = 1;

console.log(p1);

// Put a ? operator in front of a variable or parameter you want to be treated as optional

interface Shenanigans {
	activity: string;
	date?: number;
	readonly attendees: number;
}

const nduwano: Shenanigans = {
	activity: 'Kuvuka',
	attendees: 3,
};

console.log(nduwano);

nduwano.activity = 'Happy New Year';
// nduwano.attendees = 77;
console.log(nduwano.activity);

interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

const subtract: MathFunc = (x: number, y: number): number => x - y;

// Classes

interface PersonInterface {
	id: number;
	name: string;
	register(): string;
}

// Using the implements keyword when using an interface on a class
class Person implements PersonInterface {
	id: number;
	name: string;

	constructor(id: number, name: string) {
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
	position: string;
	constructor(id: number, name: string, position: string) {
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
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 4, 5, 6, 7, 8, 9, 10]);
let strArray = getArray<string>(['Brad', 'Prince', 'Hammer', 'Ross']);
