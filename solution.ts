type AssiendType = number | string | boolean;
const formatValue = (value: AssiendType): number | string | boolean => {
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return !value;
};

type StringOrNumber = string | number[];
const getLength = (value: StringOrNumber) => {
  if (Array.isArray(value)) {
    return value.length;
  } else if (typeof value === "string") {
    return value.length;
  } else {
    return "INVALID TYPE";
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface IBook {
  title: string;
  rating: number;
}
const filterByRating = (value: IBook[]): IBook[] => {
  return value.filter(
    (book) =>
      typeof book.rating == "number" && book.rating >= 4 && book.rating <= 5.0
  );
};

interface IUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
const filterActiveUsers = (userItem: IUser[]): IUser[] => {
  return userItem.filter((value) => value.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book): void => {
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${
      value.publishedYear
    }, Available: ${value.isAvailable ? "Yes" : "No"}`
  );
};

type stringOrNumber = (number | string)[];
const getUniqueValues = (
  values1: stringOrNumber,
  values2: stringOrNumber
): stringOrNumber => {
  let mergedArray: stringOrNumber = [];
  for (let i = 0; i < values1.length; i++) {
    mergedArray.push(values1[i]);
  }
  for (let j = 0; j < values2.length; j++) {
    mergedArray.push(values2[j]);
  }
  let result: stringOrNumber = [];
  for (let i = 0; i < mergedArray.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (mergedArray[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(mergedArray[i]);
    }
  }
  return result;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (items: Product[]): number => {
  if (!items || items.length === 0) return 0;
  return items.reduce((acc, value) => {
    const isDiscountAvailable = value.discount
      ? value.price - (value.price * value.discount) / 100
      : value.price;
    return acc + isDiscountAvailable * value.quantity;
  }, 0);
};
