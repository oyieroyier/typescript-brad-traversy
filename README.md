# TypeScript CrashCourse Tutorial with Brad Traversy

These are my personal notes/summary of the TypeScript CrashCourse by Brad Traversy.

[LINK HERE](https://www.youtube.com/watch?v=BCg4U1FzODs)

## Topics Covered:

### 1. Type basics

Declare type of your variables as either `number`, `string`,`boolean` or `any` beforehand.
That's what makes TypeScript different from JavaScript.
Strict typing.

```ts
let name: string = 'Bob'; // `name` declared as a string type

name = 3; // This reassignment will raise an error because the value of name has been declared beforehand as only being able to be of a string type.

let id: number = 3;
id = 'Three'; // This reassignment will raise an error because the value of id has been declared beforehand as only being able to be of a number type.

let status: any = 3;
status = true; // This reassignment will not raise an error because the value of status has been declared beforehand as being able to be of any type.
```

### 2. Tuples

Tuples allow you the specific types you want inside your arrays.

```ts
let person: [number, string, boolean] = [1, 'Hi', false]; // The first element of this array may only be a number while the second element and the third element may strictly be a string and boolean respectively.

let employee: [number, string][]; // This declaration means that the employee array is an array of arrays and each element (each nested array) may only have a number as its first element and a string as its second element.

// Example:
employee = [
	[1, 'John'],
	[2, 'Paul'],
];
```

### 3. Union Types

Allow you to specify that a variable may be of more than one type but just the specified ones.

```ts
let id: number | string; // This variable may be a string or a number but not a boolean or an array or an object etc.
```

### 4. Enums / Enumerated Types

Enums allow us to define a set of named constants.
They are native to TS and are compiled as functions in JS.

```ts
enum Direction1 {
	Up,
	Down,
	Left =,
	Right,
}
console.log(Direction1.Up); //=> 0
console.log(Direction1.Down); //=> 1
console.log(Direction1.Left); //=> 2
console.log(Direction1.Right); //=> 3
```

The values of enums can be changed. Check the attached TS file for examples.

The above enum would be compiled in JavaScript as follows:

```js
var Direction1;
(function (Direction1) {
	Direction1[(Direction1['Up'] = 0)] = 'Up';
	Direction1[(Direction1['Down'] = 1)] = 'Down';
	Direction1[(Direction1['Left'] = 2)] = 'Left';
	Direction1[(Direction1['Right'] = 3)] = 'Right';
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); //=> 0
console.log(Direction1.Down); //=> 1
console.log(Direction1.Left); //=> 2
console.log(Direction1.Right); //=> 3
```

### 5. Objects

We can add types to the properties of an object beforehand.

```ts
const user: {
	id: number;
	name: string;
}; //=> This user object only expects an id that's an integer and a name that's a string. If you pass an integer as a name it will raise exception.

user = {
	id: 2,
	name: 'John',
};
```

We could use the `type` keyword to abstract what a user object would look like and be able to reuse it later:

```ts
type User = {
	id: number;
	name: string;
};
```

### 6. Type Assertion

Explicitly tell a compiler that we want to treat an entity as a different type.

Consider this:

```ts
let id: any = 1;

let customerId = id as number;
// id can be passed as any data type but when we use it as a cutomer id, it may only be a number.
// We are asserting what we want our data to be.
```

### 7. Functions

You can (and should) give your function parameters a type.
Also declare the type of your return value.

```ts
function addNum(x: number, y: number): number {
	return x + y;
}
// This function expects both its parameters to be a number and it returns a number.
```

### 8. Interfaces

Interfaces are a bit like the `type` keyword.
The difference is that types are used with primitive types and/or union types (also objects).
Interfaces are used with objects and classes. They cannot be used with primitive types.

```ts
interface UserInterface {
	id: number;
	name: string;
}

const person: UserInterface = {
	id: 22,
	name: 'Mike',
};
// person inherits its type from the UserInterface interface. It only expects data types as defined in the interface it inherits from and nothing else.
```

In an interface, and objects generally (remember that functions are also objects), optional variables or parameters are denoted with a question mark `?`.

```ts
interface Shenanigans {
	activity: string;
	date?: number;
	readonly attendees: number;
}
// => You don't have to enter the date parameter here.

const nduwano: Shenanigans = {
	activity: 'Kuvuka',
	attendees: 3,
}; //=> Optional variable not passed here.
```

Interfaces allow for modilarity.
Consider this interface:

```ts
interface MathFunc {
	(x: number, y: number): number;
}
```

It lays the structure of a function that takes two numbers as arguments and return a number.

Therefore it is possible to use this interface in any function that performs a mathematical operation with two numbers:

```ts
const add: MathFunc = (x: number, y: number): number => x + y; //=> MathFunc used in an addition function.

const subtract: MathFunc = (x: number, y: number): number => x - y; //=> MathFunc used in an subtraction function.
```

### 9. Classes

Classes can borrow from interfaces.
To use an interface on a class, we use the `implements` keyword.

```ts
interface PersonInterface {
	id: number;
	name: string;
	register(): string;
}

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
console.log(bob); //=> Person {1, 'Bob'}
console.log(bob.register()); //=> Bob is now registered with ID number 1
```

### 10. Extending classes in TypeScript

Classes are extended using the `extends` keyword.

Let us extend the above `Person` class to an `Employee` class.

```ts
class Employee extends Person {
	position: string;
	constructor(id: number, name: string, position: string) {
		super(id, name);
		this.position = position;
	}
}

const emp = new Employee(1, 'Shaun', 'Developer');
```

We don't need to redeclare the data types of `id` and `name` because they were previously declared in the super class.
To reference them, we simply call the `super` method and pass the variables we are inheriting from the super class.

```ts
console.log(emp.name); //=> 'Shaun'
console.log(emp.position); //=> 'Developer'
```

### 11. Generics

Used to build reusable components

Say we hava this generic function that we want to use to build arrays.

```ts
function getArray(items: any[]): any[] {
	return new Array().concat(items);
}
```

We can modify the function by adding a generic that will limit the returned array to be of only one type of elements:

```ts
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items);
}
```

The `<T>` here acts as a generic. A placeholder that will be replaced with a data type we want all the elements of the resulting array to be.

```ts
let numArray = getArray<number>([1, 2, 4, 5, 6, 7, 8, 9, 10]);

let strArray = getArray<string>(['Brad', 'Prince', 'Hammer', 'Ross']);
```

### 12. tsconfig

Generate a tsconfig file by typing the command `tsc --init` in your folder.

1. You can change the `target` property of the tsconfig file to choose which version of JS you want your file to be compiled to.

2. Uncomment the `rootDir` property of the tsconfig file and choose which directory you want your source files to be in from where they will be compiled by tsc.

3. Uncomment the `outDir` property of the tsconfig file and choose which directory you want your compiled files to be in.

4. Watch all the TS files using the `tsc --watch` command or `tsc -w` command. That way you won't need to recompile the code each time.
