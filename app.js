// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= (5-i)+1; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }

// for (let i = 97; i <= 122; i++) {
//     let alphabet = String.fromCharCode(i);
//     let asciiValue = alphabet.charCodeAt(0);
//     console.log("ASCII value of " + alphabet + " is: " + asciiValue);
// }

// console.log("hii");
// let i=1
// while (i<=5) {
//     console.log(`i is ${i}`);
//     i++
// }


// do while loop 
// do {
//     console.log(`i is ${i}`); 
// } while (i>3);


// functions 


// function sayHello(){
//     console.log("hii");
// }
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()

// let a=4
// let b=8
// function sumTwoNumbers(num1,num2){
//    console.log(num1+num2);
//    let ans=num1+num2
//    return num1+num2
//    or 
// return ans
// }
// let sum=sumTwoNumbers(4,6)
// console.log(`sum is ${sum}`);
// console.log("this is an exmaple");
// sumTwoNumbers(a,b)

// function multiply(num1,num2){
//     let ans=num1*num2
//     return ans

// }
// let storedAns=multiply(2,4)
// console.log(storedAns);


// fucntion expression 
// let sayHello=function(){
//     console.log("i am a fucntion expression");
//     return "hii"
// }
// let ans=sayHello()
// console.log(ans);


// arrow fucntions 

// let sayHello=(num1,num2)=>{
//     let ans=num1+num2
//     console.log("i am an arrow fucntion",ans);
// }
// sayHello(3,6)

// let sumTwoNumbers=(num1,num2)=>num1+num2
// let ans=sumTwoNumbers(3,6)
// console.log(`ans is ${ans}`);

// let sumTwoNumbers=num1=>num1
// let ans=sumTwoNumbers(3)
// console.log(`ans is ${ans}`);


// let printMyInfo=(name)=>{
//     return `My name is ${name}`
// }
// let ans=printMyInfo("Sonal")
// console.log(printMyInfo("Sonal"));
// console.log(ans);


// let printMyInfo=name=>`My name is ${name}`

// let ans=printMyInfo("Sonal")
// console.log(printMyInfo("Sonal"));
// console.log(ans);

// Array 


// let arr=[1,2,3,4,5]
// let arr2=["sonal","harsh","nishit","shrey"]
// let arr3=[1,3,"sonal",true,false,null,undefined]


// console.log(arr3.length-1);
// console.log(arr3[arr3.length-1]);    


// console.log(arr2[1]);
// arr2[1]="satya"
// console.log(arr2,"arr2");

// console.log(typeof arr2);
// console.log(typeof {});

// console.log(Array.isArray(arr2));


// array methods 

// push method -- add element in the last of the array 
// let arr2=["sonal","harsh","nishit","shrey"]
// console.log(arr2);
// arr2.push("chinku")
// console.log(arr2,"after push");

// pop method --- remove element from the last of the array 

// let removedElement=arr2.pop()
// console.log(arr2,"after pop");
// console.log(removedElement);

// unshift--add element in ths starting of the arr 
// let arr2=["sonal","harsh","nishit","shrey"]
// arr2.unshift("abcd")
// console.log(arr2);


// shift method --- remove first ele from the arr 
// let arr2=["sonal","harsh","nishit","shrey"]
// let ans=arr2.shift(arr2)
// console.log(arr2);
// console.log(ans);


// primitive vs refernce type 

// a=10
// b=a
// console.log(a);
// console.log(b);
// a++
// console.log(a);

// console.log(b);


// let arr1=["sonal","harsh","shrey"]
// let arr2=arr1
// console.log(`this is arr1 ${arr1}`);
// console.log(`this is arr2 ${arr2}`);

// arr1.push("satya")
// console.log(`this is after arr1 ${arr1}`);
// console.log(`this is after arr2 ${arr2}`);



// array destructuring 
// let arr1=["sonal","harsh","shrey"]
// let name1=arr1[0]
// let name2=arr1[1]
// console.log(name1);
// console.log(name2);

// array destructuring 
// let [name1,name2,name3]=["sonal","harsh","shrey"]
// console.log(name1);
// console.log(name2);
// console.log(name3);



// for of loop

// let names=["sonal","harsh","shrey"]
// for(let name of names){
// console.log(`name is ${name}`);
// }

// for in loop
// let names=["sonal","harsh","shrey"]
// for(let name in names){
// console.log(names[name]);
// }


// how to clone array 
// let arr1=["sonal","harsh","shrey"]
// let arr2=arr1
// console.log(arr1);
// console.log(arr2);
// arr1.push("nikunj")
// console.log(arr1);
// console.log(arr2);

// spread operator 
// let arr1=["sonal","harsh","shrey"]
// let arr3=[...arr1]
// console.log("arr 3 is ",arr3);
// arr1.push("abch")
// console.log("afer",arr1);
// console.log("arr 3 is afetr ",arr3);



// let arr1=["sonal","harsh","shrey"]
// let [name, ,name1]=arr1
// console.log(name);
// console.log(name1);

// default parameters 
// function sum(a,b=1){
//     console.log(`value of a is ${a}`);
//     console.log(`value of b is ${b}`);
//     return a+b
// }
// let ans=sum(5,6)
// console.log(ans);


// rest parameters
// function sum(a,b=1,...c){
//     console.log("c is ",c);
//     console.log(`value of a is ${a}`);
//     console.log(`value of b is ${b}`);
//     return a+b
// }
// let ans=sum(5,6,6,7,8,2,6,"sonal")
// console.log(ans);


// lexical scoping 

// let a=10
// let b=12

// let sum=()=>{
//     let a=30
//     let b=70
//     console.log(a);
// let newSum=()=>{
//     let b=15
// console.log("ans is ",a+b);
//  }
//  newSum()
//     // return a+b

// }
// sum()
// console.log(a);
// console.log(b);

// callback 
// function sum(){

//     return function printHello(){
//         console.log("hello");
//     }
// }

// function printHello(){
//     console.log("hello");
// }
// let ans=sum()
// ans();



// let sum=(callback)=>{
// callback()
// }
// function printHello(){
//     console.log("hello");
// }
// sum(()=>console.log("hello"))


// higher order functions of array 
// for each 
// let arr=[1,2,3,4,5,6]
// arr.forEach((value,index,arr)=>{
// console.log(`value is ${value}`);
// console.log(`INDEX is ${index}`);
// console.log(`arr is ${arr}`);
// })

// map 
// let arr=[1,2,3,4,5,6]
// let ans=arr.map((value,index,arr)=>{
//     console.log(value);
//     // return value
//     return index


// })
// console.log(ans);

// filter method 

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let ans=arr.filter((value,index,arr)=>{
//     return (value%2===0)&&(value===4)
// })
// console.log(ans);

// reduce method 
// let arr=[1,2,3,4,5,6,7,8,9,10]
// let ans=arr.reduce((prev,curr,index,arr)=>{
//     console.log(prev,curr);
// return prev+curr
// },0)
// console.log(ans);


// find method 
// let arr=[1,2,3,4,5,6,7,8,9,10]
// let ans=arr.find((element,idx,arr)=>{
// return element===11
// })
// console.log(`ans is ${ans}`);

// some method 
// let arr=[1,3,5,7,9,2]
// let ans=arr.some((element,idx,arr)=>{
// return element%2===0
// })
// console.log(`ans is ${ans}`);

// every method 
// let arr=[1,3,5,7,9,2]
// let ans=arr.every((ele,idx,arr)=>{
//     return ele%2===0
// })
// console.log(`ans is ${ans}`);


// findIndex method 

// let arr=[1,3,5,7,9,2,7]
// let ans=arr.findIndex((elem,idx,arr)=>{
//     return elem===10
// })
// console.log(`ans is ${ans}`);


// find last index 
// const array1 = [5, 12, 50,178, 135,155,44];

// const found = array1.findLast((element,idx) => {
//     console.log(`ans is fdgfd ${idx}`);
//   return   element > 45
// });

// console.log(`new ans is ${found}`);


// splice method 
// const array1 = [5, 12, 50,178, 135,155,44];
// array1.splice(1,2,"sonal")
// let removedElements=array1.splice(1,2)

// console.log(array1);
// console.log(removedElements);


// objects 
// key value 
// no indexing 

// let obj={
//     name:"sonal",
//    education:"b.com"
// }
// console.log(obj);

// let newObj={}
// newObj.name="sonal"
// console.log(newObj);
// console.log(newObj.name);
// let key="newEmail"
// let obj={
//     name:"sonal",
//     education:"b.com",
//     'my address':"fdgdfh"
// }
// obj["profession"]="teaching"
//  console.log(obj["my address"]);
//  console.log(obj);
//  obj[key]="sonal@gmail.com"
//  console.log(obj);

// let key="emailhjghk"
// let obj={
//     name:"sonal",
//     name:"newname"
// }
// obj[key]="sonal@gmail.com"
// console.log(obj);

// question 
// let key1="email"
// let key2="address"

// let value1="sonal@gmail.com"
// let value2="delhi"

// how to iterate objects 

// let person={
//     name:"sonal",
//     address:"delhi",
//     profession:"teaching"
// }
// for in loop 
// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }


// console.log(Object.keys(person));
// for(let key of Object.keys(person)){
//     console.log(`${key} : ${person[key]}`);
// }

// console.log(Object.values(person));


// spread operator 
// let person={
//     name:"sonal",
//     address:"delhi",
//     profession:"teaching"
// }

// let person2={...person}
// person.age="fdh"
// console.log(person);
// console.log(person2);


// destructring 

// let person={
//     name:"sonal",
//     address:"delhi",
//     profession:"teaching"
// }

// dynamic keys and values 
// let keyName="email"
// let keyValue="harsh@gmail.com"
// let obj={
//    firstName:"Sonal",
//     lastName:"Jaswal",

// }
// obj["profession"]="teaching"
// obj[keyName]="teaching"
// or 
// obj[keyName]=keyValue

// console.log(obj);


// practice question 
// let obj={
//    firstName:"Sonal",
//     lastName:"Jaswal",
//     education:"chesmitry"

// }
// let person={}

// for(let key in obj){
//     person[obj[key]]=key
//     // or 
//     // person["sonal"]="firstName"
// // }
// console.log("person is ",person);



// object destructring 

// let obj={
//    firstName:"Sonal",
//    lastName:"Jaswal",
//     education:"chesmitry"

// }
// let firstName=obj.firstName
// let lastName=obj.lastName
// let education=obj.education
// let firstName="harsh"
// let {firstName,lastName,education}=obj
// console.log(`firstname is ${firstName}`);
// console.log(`lastName is ${lastName}`);
// console.log(`education is ${education}`);


// let obj={
//     firstName:"Sonal",
//     lastName:"Jaswal",
//      education:"chesmitry"
 
//  }
// let {firstName:name,lastName:secondName,education:abc}=obj
// console.log(`firstname is ${name}`);
// console.log(`lastName is ${secondName}`);
// console.log(`education is ${abc}`);

// methods 
// let obj={
//     firstName:"Sonal",
//     lastName:"Jaswal",
//      education:"chesmitry",
//     //  about:function(){
//     //     console.log(`my name is sonal `);
//     //  }
//     // or 
//     // about(){
//     //     console.log(`my name is ${this.firstName} ${this.lastName} `);
//     // }
//     about:()=>{
//         console.log(`my name is ${this.firstName} ${this.lastName} `);
//     }
 
//  }
//  obj.about()
// string to number 
// let number=+"10"
// or 
// let number=Number("10")
// console.log(typeof number);

// number to string 

// let num=10+""
// or 
// let num=String(10)
// console.log(typeof num);

// let firstName="sonal"
// let secondName="Jaswal"
// let fullName=firstName+" "+secondName
// console.log(fullName);
// console.log("my name is",firstName+" "+secondName);

// template literals 
// console.log(`my name is ${firstName}  ${secondName}`);

// let a=10
// let b=10
// let sum=a+b
// console.log(sum);

// let ans=10%3
// let res=10/3
// console.log(res);
// console.log(ans);

// let a=10
// let b="10"
// console.log(a==b);
// console.log(a===b);
 

// let a=10
// let b="10"
// console.log(a!=b);

// && ||
// let a=13
// let b=20
// console.log(a%2===0&&a<b);
// console.log(a<b||a%2===0);


//  let a=+prompt("enter a")
//  console.log(a);
// console.log(typeof a);

// let a=10
// let b=+"10"
// console.log(a+b);


// *
// * *
// * * *
// * * * *
// * * * * *

// for(let i =1;i<=5;i++){
//     let ans=""
//     for(let j=1;j<=i;j++){
//         ans=ans+"* "
//         console.log(ans);
//     }
  
// }

// for(let i =1;i<=5;i++){
//     let ans=""
//     for(let j=1;j<=((5-i)+1);j++){
//         ans=ans+"* "
//         console.log(ans);
//     }
  
// }

// for (let i = 5; i >= 1; i--) {
//     let ans = "";
//     for (let j = 1; j <= i; j++) {
//         ans = ans + "* ";
//     }
//     console.log(ans);
// }

// for (let i = 1; i <= 5; i++) {
//     let ans = "";
//     for (let j = 1; j <= (5 - i + 1); j++) {
//         ans = ans + "* ";
//     }
//     console.log(ans);
// }


// function personalInfo(){
//     console.log(` my name is ${this.firstName} ${this.lastName}`);
//         }


// let person={
//     firstName:"sonal",
//     lastName:"Jaswal",
// //     about:function(){
// // console.log(` my name is ${this.firstName} ${this.lastName}`);
// //     }
// about:personalInfo
// }

// let person2={
//     firstName:"Harsh",
//     lastName:"patel",
// //     about:function(){
// // console.log(` my name is ${this.firstName} ${this.lastName}`);
// //     }
// about:personalInfo
// }

// console.log(person);
// person.about();
// console.log(person2);


// call apply bind 

// call method 
// function personalInfo(age){
//     console.log(` my name is ${this.firstName} ${this.lastName} and my age is ${age}`);
//         }

// let person={
//     firstName:"sonal",
//     lastName:"Jaswal"
// }

// let person2={
//     firstName:"Harsh",
//     lastName:"patel",
// }

// let person3={
//     firstName:"abc",
//     lastName:"pfghtel",
// }
// personalInfo.call(person,23)
// personalInfo.call(person2)
// personalInfo.call(person3)
// console.log(person);
// console.log(person2);



// apply method 

// function personalInfo(age,hobby){
//     console.log(` my name is ${this.firstName} ${this.lastName} and my age is ${age} and my hobby is ${hobby}`);
//         }

// let person={
//     firstName:"sonal",
//     lastName:"Jaswal"
// }

// let person2={
//     firstName:"Harsh",
//     lastName:"patel",
// }

// let person3={
//     firstName:"abc",
//     lastName:"pfghtel",
// }
// personalInfo.apply(person,[23,"guitar"])


// bind method 
// function personalInfo(age,hobby){
//     console.log(` my name is ${this.firstName} ${this.lastName} and my age is ${age} and my hobby is ${hobby}`);
//         }

// let person={
//     firstName:"sonal",
//     lastName:"Jaswal"
// }

// let person2={
//     firstName:"Harsh",
//     lastName:"patel",
// }

// let person3={
//     firstName:"abc",
//     lastName:"pfghtel",
// }
// let res=personalInfo.bind(person,23,"guitar")
// res();


// prototype 
// function hello(){
//     console.log("hello");
// }
// hello.prototype.key="harsh"
// hello.prototype.secondKey="value of second key"
// console.log(hello.prototype);
// console.log(typeof hello);


// proto 

// let person={
//     firstName:"satya",
//     lastName:"gohil"
// }
// console.log(person);

// let person2={}
// let person2=Object.create(person)
// person2.firstName="sonal"
// person2.address="gujrat"
// // console.log(person2.firstName);
// console.log(person2);



// console.log("proto is ",person2.__proto__);


// 30 APRIL 2024 

// function hello(){
//     console.log("hello");
// }
// hello()
// hello.prototype.key="value"
// hello.prototype.newKey="NEWvalue"
// console.log(hello.prototype);
// console.log(hello.prototype.key);


// let person={
//     firstName:"harsh",
//     lastName:"patel"
// }
// let person2=Object.create(person)
// console.log(person2);
// console.log("proto is ",person2.__proto__);





// function createUser(firstName,lastName,email,age){
//     const user=Object.create(createUser)
//     user.firstName=firstName,
//     user.lastName=lastName,
//     user.email=email,
//     user.age=age
//     return user
// }
// const user1=createUser("sonal","jaswal","sonal@gmail.com",24)
// const user2=createUser("harsh","dsgdsg","dgdfh",22)
// console.log("user1 is",user1.age);
// console.log("user 2 is",user2.age);



// createUser.prototype.about=function(){
//     return `${this.firstName} is ${this.age} years old`
// }

// console.log(createUser.prototype.about());
// console.log(user1.about());


// array 


// let products=["sonal",1,true,undefined,0]

// for(let i=0;i<array.length;i++){
//     console.log(`value at index ${i} is ${array[i]}`);
// }

// for of loop 
// for(let product of products){
//     console.log(product);
// }

// let array=[1,2,6,7,8]
// let printElementFromArray=(products)=>{
//     console.log(products);
//     for(let product of products){
//         console.log(`my product is ${product}`);
//     }

// }
// printElementFromArray(array)
// array.push("masoom")
// printElementFromArray(array)


// write a function to print the even numbers from array 


// let myArr=[1,5,4,8,3,10,15]
// let printEvenNumbers=(arr)=>{
// for(let number of arr){
//     if(number%2===0){
//         console.log(number);
//     }
// }
// }
// printEvenNumbers(myArr)

// write a function to check if a color is present in the array of color or not if present print the index of the and if not return -1

// let colors=["green","blue","red","white","yellow"]
// let verifyColorIsPresent=(arr,color)=>{
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===color){
//         return i
//     }

// }
// return -1
// }
// let ans=verifyColorIsPresent(colors,"red")
// console.log(ans);

// array of objects 

// let person={
//     firstName:"sonal",
//     lastName:"jaswal"
// }
// let arrayOfPersons=[
//     { firstName:"sonal",
// lastName:"jaswal"},
// {
//     firstName:"nitin",
//     lastName:"jaswal"
// }]

// for(let i=0;i<arrayOfPersons.length;i++){
//     console.log(arrayOfPersons[i].firstName);
//     console.log(arrayOfPersons[i].lastName);
// }

// for(let person of arrayOfPersons){
//     console.log(person.firstName);
//     console.log(person.lastName);
// }

// let person={
//     firstName:"sonal",
//     lastName:"jaswal"
// }
// // addking key value pair to object 
// person.profession="teaching"
// // or 
// person["location"]="gujrat"
// console.log(person.firstName);
// // or 
// console.log(person["lastName"]);


// filter method 

// let arr=[1,4,3,7,9,8]
// let ans=arr.filter((element,index,arr)=>{
// return element<7&&element%2===0
// })
// console.log(ans);


// let obj=[{name:"mobile",price:1200},{name:"tv",price:1500},{name:"fridge",price:32000}]
// let filterByPrice=(arr,price)=>{
//   return arr.filter((element,idx,arr)=>{
//         return  element.price<price
//       })
// }
// console.log(filterByPrice(obj,45000));



    // let temp = + prompt("Enter Temperature in Celcius => ");
    // let answer = temp * 1.8 + 32;
    // console.log(answer," <= Temperature in Fahrenheit");


    //     let firstAngle = + prompt("Enter the First Angle=> ");
    // let secondAngle = + prompt("Enter the Second Angle => ");
    // let thirdAngle = 180 - firstAngle - secondAngle;
    // console.log(thirdAngle, "<= Third Angle is");


  














