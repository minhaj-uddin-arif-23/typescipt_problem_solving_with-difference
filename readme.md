Iterface ও Type
-Interface কী?

Object এর structure / shape নির্ধারণ করতে ব্যবহার হয়
Extend করা যায়
Declaration merging সাপোর্ট করে (একই নাম বারবার ব্যবহার করা যায়)

interface IUser {
name: string;
age: number;
}
Object structure বানাতে হবে

Public API বানাতে হবে

বড় প্রজেক্টে extensible কোড দরকার

-- Type কী?

Object ছাড়াও union, tuple, primitive, complex type বানাতে পারে

Intersection (&) ব্যবহার করে extend করা যায়

Declaration merging সাপোর্ট করে না

type User = {
name: string;
age: number;
};

Union (|) দরকার

Tuple / primitive দরকার

Union Types (|)
ইউনিয়ন টাইপ কোনো ভেরিয়েবলকে একাধিক টাইপের মধ্যে যেকোনো একটিতে রাখা যায়।
ব্যবহার: যখন কোনো ভেরিয়েবল বিভিন্ন ধরনের মান রাখতে পারে।
উদাহরণ:

type ID = string | number;
let userId: ID;
userId = 123;  
userId = "abc";

Intersection Types (&)
ইন্টারসেকশন টাইপ একাধিক টাইপকে মিলিয়ে একটি টাইপ তৈরি করে।
এই টাইপের ভেরিয়েবলকে সব অন্তর্ভুক্ত টাইপের শর্ত পূরণ করতে হবে।

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
