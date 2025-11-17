What are some differences between interfaces and types in TypeScript?
Ans : Interface and types are smiliar behaviour or overlaping concept , it uses typescript
shape of object, functions signature or more complex types but they has some difference
syntax
interface IUser{
name:string;
age:number;
}
type User{
name:string;
age:number;
}
Extending / Inheritance (interface)

- Interface can extend multiple interfaces:
- Interface supports declaration merging:
- preferred for public API definitions and when you want extensibility via merging or multiple inheritance.
- Flexibility medium
  type
- Type can use intersection types for similar behavior

- Type cannot be merged; redeclaring a type with the same name causes an error.
  preferred for unions, tuples, primitives, or complex type combinations.
- Flexibility high
  What is the use of the keyof keyword in TypeScript? Provide an example.
  Answer : "keyof is an operator in TypeScript that takes an object type and produces a union of its keys as string literal types.
  -Ensures type safety when accessing object properties dynamically.
  -Prevents runtime errors due to typos in property names.
  -Works well with generic functions to make them type-safe.

example:
function getValue<T, K extends keyof T>(obj: T, key: K) {
return obj[key];
}
const user = { name: "Alice", age: 25 };
const name = getValue(user, "name");
const invalid = getValue(user, "salary");

Explain the difference between any, unknown, and never types in TypeScript?
any:
-> Disable type checking. You can assign anything to it and do anything with it. and it is Quick escape hatch, but unsafe. Also ite hide bugs
let a:any;
a= 5
a= '5'
unknown:
-> Safe counterpart of any. You can assign anything to it, but cannot use it directly without type checking or type assertion.
-> When you don’t know the type yet but want type safety.
let u: unknown;
u = 5;
u = "hello";
never:
-> Represents a value that never occurs. Commonly used for:
Functions that throw errors or never return
Exhaustive checks in switch statements

What is the use of enums in TypeScript? Provide an example of a numeric and string enum?
Answer:
-> Enums (short for enumerations) allow you to define a set of named constants.
-> They make code more readable and type-safe, instead of using plain numbers or strings.

enum Direction {
Up, // 0
Down, // 1
Left, // 2
Right // 3
}

let move: Direction = Direction.Up;
console.log(move); // 0

Provide an example of using union and intersection types in TypeScript?
Answer:

1. Union Types (|)
   A union type allows a value to be one of multiple types.
   Use it when a variable can hold different types of values.
   Example:
   type ID = string | number;
   let userId: ID;
   userId = 123;  
    userId = "abc";
   2.Intersection Types (&)
   An intersection type combines multiple types into one.
   The resulting type must satisfy all included types.


Story of interface and type and keyof

TypeScript গ্রামের গল্প: Interface, Type আর Keyof

একটা সুন্দর TypeScript গ্রামে দুই ভাই থাকত— Interface আর Type।
দেখতে একই রকম, কিন্তু চরিত্রে পুরো ভিন্ন।

Interface – শান্ত, নম্র, মানুষদের object-এর structure ঠিক রাখে।

Type – আধুনিক, flexible, union, tuple, primitive সব বানাতে পারে, কিন্তু একটু রেগে যাওয়া প্রকৃতির।

Interface এর সুপারপাওয়ার

একদিন রতন নামে একজন প্রোগ্রামার Interface কে ডাকল—
“আমার User নামে একটা object দরকার, নাম থাকবে।”
Interface structure বানিয়ে দিল।

পরের দিন রতন আবার বলল—
“এবার Age যোগ করো।”
Interface merge করে সব ঠিক রাখল।

গ্রামবাসী বলল: “Interface ভাই সত্যিই helpful!”

Type এর আধুনিক শক্তি

Type কে ডাকল সোহাগ—
“আমার Status বানাও, শুধু success বা error।”
Type সঙ্গে সাথেই flexible structure বানাল।
Interface এটা পারতো না।
কিন্তু Type একই নাম reuse করলে রেগে যেত।

গ্রামবাসী বলল: “Type ভাই শক্তিশালী কিন্তু একটু রাগী।”

ছোট কিন্তু শক্তিশালী ছেলে keyof

গ্রামে ছোট ছেলে keyof সব object-এর keys জানত।
ভুল key দিলে কাজ হত না, সঠিক key দিলে safe access।

গ্রামবাসী exclaimed: “keyof ভাই ছাড়া কাজ unsafe হতো!”

গ্রামের শান্তি

শেষে গ্রামের বড়রা সিদ্ধান্ত নিল—

Object shape দরকার → Interface

Flexible/union দরকার → Type

Key-safe access চাইলে → keyof

তিনজন মিলেমিশে TypeScript গ্রামকে শক্তিশালী, নিরাপদ আর সুন্দর করে তুলল।
