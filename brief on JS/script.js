// variables manadatory grammar: A variable can be declared/created/defined only once. In other words, A variable cannot be declared/ defined/created more than once. Though we should not create a variable more than once but we can update a variable as many times as we want.
// when we use an identifier(let, const, var) in front of a variable we say that variable is created/declared/defined.
var ami_variable = 10; // creation/declaration/defining a variable
ami_variable = 100; //updating/changing variables value which is allowed
var ami_variable = 200; //var is allowing this but its against the grammar of variable creation and it makes a programmer confused when debugging
let iamvariable = 10;
let iamvariable = 100; //let doesnt allow us to create the same variable multiple times.
//conditionals
//loops: repeating something for certain amount of times
let i = 1 //iterator: controller variable of a loop; here it initializes a loop while(i<=20){ //limit of a loop: when the loop will be ended}
if(i%2==0){
}
console.log(`${i} is an even number`);
console.log(`${i} is divisible by 5`);
else if(i%5==0){
}
else{
}
console.log('I am just a number: ${i}`)
i++; // updating the iterator variables value by 1}