{
  // 1
  type AssiendType = number | string | boolean;
  const formatValue = (value: AssiendType): AssiendType => {
    if (typeof value === "number") {
      return value * 10;
    } else if (typeof value === "string") {
      return value.toString();
    } else if (typeof value === "boolean") {
      if (value === true) {
        return false;
      } else {
        return true;
      }
    } else {
      return "INVALID";
    }
  };

  // 2

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
  // 3
  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }

  // 4
  interface IBook {
    title: string;
    rating: number;
  }
  const filterByRating = (value: IBook[]): IBook[] => {
    return value.filter((book) => book.rating >= 4.0);
  };

  // 5
  interface IUser {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }
  const filterActiveUsers = (userItem: IUser[]): IUser[] => {
    return userItem.filter((value) => value.isActive === true);
  };
  // 6
  interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
  }

  const printBookDetails = (value: Book) => {
    console.log(
      `Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable}`
    );
  };

  // 7
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

  // 8
  type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  };

  const calculateTotalPrice = (items: Product[]) => {
    return items.reduce((acc, value) => {
      const isDiscountAvailable = value.discount
        ? value.price - (value.price * value.discount) / 100
        : value.price;
      return acc + isDiscountAvailable * value.quantity;
    }, 0);
  };
}
