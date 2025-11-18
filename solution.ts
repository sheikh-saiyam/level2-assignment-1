//? ------------------ PROBLEM 1 ------------------

type FormatValueType = string | number | boolean;

const formatValue = (value: FormatValueType): FormatValueType => {
  let formattedValue: FormatValueType = "";

  if (typeof value === "string") {
    formattedValue = value.toUpperCase();
  } else if (typeof value === "number") {
    formattedValue = value * 10;
  } else if (typeof value === "boolean") {
    formattedValue = !value;
  } else {
    throw new Error("Invalid data type");
  }

  return formattedValue;
};

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

//? ------------------ PROBLEM 2 ------------------

//? ------------------ PROBLEM 3 ------------------

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());
