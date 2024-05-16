console.log("hii");
// function printHello(num1,num2){

// }
// let printHello=(num1,num2)=>{
//     console.log("hello");
// }
// or 
// let printHello=(num1,num2)=>num1+num2
//   or 
// let printHello=(num1,num2)=>console.log("hii");
// printHello()



// callback fucntions 

// let sum=(num1,num2,abc)=>{
// console.log(num1+num2);
// abc()
// }

// sum(4,5,()=>{
// console.log("my name is harsh");
// })

// higher order fucntion 

// let printHello=()=>{
//     console.log("hii");
//     return function(){
//         console.log("i am from return function");
//     }
// }
// let ans=printHello()

// let arr=[3,7,8,3]
// arr.map(()=>{

// })


// for of loop 

let arr=[3,7,8,3]
for(let i=0;i<arr.length;i++){
console.log(`value from normal loop ${arr[i]}`);
}
for(let nikunj of arr){
    console.log(`value is ${nikunj}`);
}

