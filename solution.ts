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

interface FilterItemType {
  title: string;
  rating: number;
}

const filterByRating = (items: FilterItemType[]): FilterItemType[] => {
  if (items.find((arr) => arr.rating > 5)) {
    throw new Error("Invalid Data! Rating must be between 0 to 5");
  }

  const filteredItem = items.filter((item) => item.rating >= 4);
  return filteredItem;
};

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

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const { title, author, publishedYear, isAvailable } = book;

  const availability = isAvailable ? "Yes" : "No";
  const details = `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${availability}`;

  console.log(details);
};

type UniqueValueType = (string | number)[];

const getUniqueValues = (
  arr1: UniqueValueType,
  arr2: UniqueValueType
): UniqueValueType => {
  let uniqueArray: UniqueValueType = [];

  for (let i = 0; i < arr1.length; i++) {
    const idx = arr1[i];

    let isExists = false;

    for (let j = 0; j < arr1.length; j++) {
      if (uniqueArray[j] === idx) {
        isExists = true;
        break;
      }
    }

    if (!isExists) {
      uniqueArray[uniqueArray.length] = idx;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const idx = arr2[i];

    let isExists = false;

    for (let j = 0; j < arr2.length; j++) {
      if (uniqueArray[j] === idx) {
        isExists = true;
        break;
      }
    }

    if (!isExists) {
      uniqueArray[uniqueArray.length] = idx;
    }
  }
  return uniqueArray;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  }

  const total = products.reduce((acc, product) => {
    if (product?.discount && (product.discount < 0 || product.discount > 100)) {
      throw new Error("Invalid value! Discount must be between 0 to 100");
    }

    const price = product.price * product.quantity;
    const discountPrice = product?.discount
      ? price * (product?.discount / 100)
      : 0;

    return acc + price - discountPrice;
  }, 0);

  return total;
};
