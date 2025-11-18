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
    throw new Error("Invalid data type!");
  }

  return formattedValue;
};

// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(true));

//? ------------------ PROBLEM 2 ------------------

type GetLengthType<T> = string | Array<T>;

const getLength = <T>(value: GetLengthType<T>): number => {
  let length: number = 0;

  if (Array.isArray(value)) {
    length = value.length;
  } else if (typeof value === "string") {
    length = value.length;
  } else {
    throw new Error("Invalid data type!");
  }

  return length;
};

// console.log(getLength("typescript"));
// console.log(getLength([10, 20, 30, 40]));

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

// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

//? ------------------ PROBLEM 4 ------------------
interface FilterItemType {
  title: string;
  rating: number;
}

const items = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const filterByRating = (items: FilterItemType[]): FilterItemType[] => {
  if (items.find((arr) => arr.rating > 5)) {
    throw new Error("Invalid Data! Rating must be between 0 to 5");
  }

  const filteredItem = items.filter((item) => item.rating >= 4);
  return filteredItem;
};

// console.log(filterByRating(items));

//? ------------------ PROBLEM 5 ------------------

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

interface ActiveUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: ActiveUser[]): ActiveUser[] => {
  const filteredUser = users.filter((user) => user.isActive);
  return filteredUser;
};

// console.log(filterActiveUsers(users));

//? ------------------ PROBLEM 6 ------------------

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

const printBookDetails = (book: Book): void => {
  const { title, author, publishedYear, isAvailable } = book;

  const availability = isAvailable ? "Yes" : "No";
  const details = `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${availability}`;

  console.log(details);
};

// printBookDetails(myBook);

//? ------------------ PROBLEM 7 ------------------

// type UniqueValueType = (string | number)[];

// const getUniqueValues = (
//   arr1: UniqueValueType,
//   arr2: UniqueValueType
// ): UniqueValueType => {
//   let uniqueArray: UniqueValueType = [];
//   const array = [...arr1, ...arr2];

//   for (let index = 0; index < array.length; index++) {
//     const idx = array[index];
//     console.log({ idx });
//     console.log(uniqueArray[idx + 1]);
//     // console.log(arr1[index]);
//     // console.log(arr2[index]);
//     if (arr1[index] === arr2[index]) {
//       uniqueArray[index + 1];
//     }
//   }

//   return uniqueArray;
// };

// const array1 = ["apple", "banana", "orange", 1, 2, 3];
// const array2 = ["banana", "kiwi", "grape"];

// console.log(getUniqueValues(array1, array2));
