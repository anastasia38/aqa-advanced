const people = [
    {name: "Rose", age: 35, email: "example1@example.com"},
    {name: "Nicola", age: 30, email: "example2@example.com"},
    {name: "Sindey", age: 48, email: "example3@example.com"}
];

for (const {name, age, email} of people) {
   
console.log(`${name} is ${age} years old, and contact info ${email}`);
}
