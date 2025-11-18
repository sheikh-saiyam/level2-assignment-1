# 🎯 Interview Questions - Typescript

### 1. What are some differences between interfaces and types in TypeScript?

**Interface আর Type কি?**

- **Interface:** Object এর structure define করার একটি rule. মানে কোন object এ কি কি property থাকবে আর তার type কি হবে সেটা আগে থেকে ঠিক করা।
- **Type:** আরও flexible system যেটা দিয়ে object, function, union, tuple সহ প্রায় সবধরনের type define করা যায়।

দুইটাই custom type define করতে ব্যবহার হয়, কিন্তু এদের আলাদা features আর আলাদা use cases আছে, যেটা বিভিন্ন situation এ একটাকে আরেকটার চাইতে বেশি suitable করে তোলে।

**TypeScript এ Interface আর Type এর মধ্যে পার্থক্য**

পার্থক্যগুলো নিয়ে আলোচনা করার আগে, Syntax দেখি:

```typescript
// interface
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
```

```typescript
// type
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
```

**প্রথম নজরে, এগুলি একই রকম মনে হতে পারে। তবে, যখন আমরা এদের বৈশিষ্ট গুলো দেখবো তখন তাদের পার্থক্যগুলি স্পষ্ট হবে**

**1. Structure Definition**

- **Interface**: সাধারণত object এর structure define করতে ব্যবহার হয়।
- **Type**: object ছাড়াও union, tuple, primitive, function সব define করা যায়।

**2. Extending / Inheritance**

- **Interface**: extend করা খুব সহজ।
- **Type**: extend করতে পারে, কিন্তু syntax আলাদা।

```typescript
// interface
interface A {
  x: number;
}
interface B extends A {
  y: number;
}

// type
type C = {
  x: number;
};
type D = C & { y: number };
```

**3. Declaration Merging**

- **Interface**: একই নামে দুইবার declare করলে merge হয়ে যায়।
- **Type**: একই নামে দুইবার declare করলে error দেয়।

```typescript
// interface
interface Screen {
  width: number;
}
interface Screen {
  height: number;
}
```

**4. Union এবং Intersection**

- **Interface**: union support করে না।
- **Type**: union এবং intersection দুইটাই support করে।

```typescript
type Result = "success" | "error";
type Combined = { a: number } & { b: number };
```

**5. Primitive Support**

- **Interface**: শুধু object type define করতে পারে।
- **Type**: primitive define করা যায়।

```typescript
type Age = number;
type Name = string;
```

**6. Computed Types**

- **Interface:** computed type support করে না।
- **Type:** করতে পারে।

```typescript
type Keys = "name" | "age";
type Obj = {
  [K in Keys]: string;
};
```

যদিও `type` এবং `interface` উভয়ই টাইপস্ক্রিপ্টে শক্তিশালী বৈশিষ্ট্য, এদের মধ্যে নির্বাচন করা নির্দিষ্ট ব্যবহারের ক্ষেত্রে নির্ভর করে।

### 2. Provide an example of using union and intersection types in TypeScript.

**Union Type Example**

- **Union type মানে একটি variable বা property একাধিক type এর মধ্যে যেকোনো একটিতে থাকতে পারে।**

```typescript
type UserId = string | number;

let userId: UserId;

userId = 123;        // valid
userId = "user-123"; // valid
userId = true;       // invalid
```

**Use Case: যখন variable একাধিক type নিতে পারে। যেমন, API response এ ID কখনো number, কখনো string হতে পারে।**

**Intersection Type Example**

- **Intersection type মানে দুই বা ততোধিক type একত্রিত করা, এবং নতুন type এ সব property থাকবে।**

```typescript
type Person = {
  name: string;
  age: number;
};

type Student = {
  isStudent: boolean;
};

type Staff = Person & Student;

const staff1: Staff = {
  name: "Karim",
  age: 22,
  isStudent: true,
};
```

**Use Case: যখন দুটি বা ততোধিক object type combine করতে হয়। যেমন, person এবং student info একত্রে represent করতে চাইলে।**
