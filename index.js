// // number 
// // let a=34
// // console.log(a);

// // string 
// // let name="sonal"
// // console.log(name);

// // boolean-true or false 

// // undefined 

// // let b;
// // console.log(b);

// // b=null
// // console.log(b);

// // console.log(typeof undefined);

// // console.log(typeof null);



// // string methods 

// // let newName="sonal"
// // console.log(newName[0]);
// // console.log(newName[1]);
// // console.log(newName[2]);
// // console.log(newName[3]);

// // console.log(newName.length);
// // console.log(newName.length-1,"last");
// // console.log(newName[newName.length-1]);
// // console.log(newName[newName.length-2]);


// // trim ()
// // let newName="  sonal  "
// // console.log(newName.length,"before trim");
// // console.log(newName.trim());
// // console.log(newName.length,"AFTER trim");
// // newName=newName.trim()
// // console.log(newName,"trimmed val");

// // let newName2=newName.trim()
// // console.log(newName2,"new name");
// // newName=newName.trim()
// // let abc=newName.trim()
// // console.log(abc,"abc",abc.length);
// // console.log(newName.length,"after trim",newName);
// // console.log(newName2.length);

// // toUpperCase 
// // let newName="sonal"
// // console.log(newName.toUpperCase());
// // console.log(newName);
// // newName=newName.toUpperCase()
// // console.log(newName);


// // toLowerCase
// // let newName="DFGDFH"
// // console.log(newName.toLowerCase());


// // SLICE 
// // let newName="sonal"
// // console.log(newName.slice(0,2))
// // newName=newName.slice(0,2)
// // console.log(newName);
// // slice(start index,end index)


// // let name1="sonal   "
// // let newName=name1.trim().toUpperCase().slice(1)
// // console.log(newName);
// // console.log(typeof name1);

// // convert number to a string 
// // let number=String(10)
// // or 
// // let number=10+" "
// // console.log(typeof number);

// // convert a string to a number
// // let string="10" 
// // // or 
// // string=Number(string)
// // console.log(typeof string);


// // string concatenation 

// // let firstName="sonal"
// // let lastName="jaiswal"
// // let fullName=firstName+" " +lastName
// // console.log(fullName);
// // console.log("my name is "+ firstName +" "+ lastName);
// // or 
// // template literals `
// // console.log(`my name is ${firstName} ${lastName}`);

// // let a=+"10"
// // let b=10
// // console.log(a==b);
// // console.log(a===b);
// // let sum=a+b
// // console.log(sum);



// // if(""){
// // console.log("inside if");
// // }else{
// // console.log("inside else");
// // }
// // prompt()
// // let input=prompt()
// // console.log(input,"user input");
// // console.log(typeof input);


// // let num = prompt("Enter the Number");
// // // num = +"num";
// // if (num > 9 && num < 100) {
// //     console.log(num, "=> Two Digit Number")
// // }
// // else if (num == 0) {
// //     console.log("Invalid Number 😏");
// // }
// // else if (num < -9 && num > -100) {
// //     console.log(num, "=> Two Digit Number");
// // }
// // else {
// //     console.log(num, "=> Single Digit Number");
// // }


// // if, else if, else

// if (false) {
//     console.log("false");
// } else if(false){
// console.log("true");
// }else{
//     console.log("not valid");
// }


// let day=+prompt("enter number")
// if(day===0){
//     console.log("today is sunday");
// }else if(day===1){
//     console.log("today is m");
// }else if(day===2){
//     console.log("today is tuesday");
// }else if(day===3){
//     console.log("today is wed");
// }else if(day===4){
//     console.log("today is thursday");
// }else if(day===5){
//     console.log("today is friday");
// }else if(day===6){
//     console.log("today is saturday");
// }else{
//     console.log("not a valid day");
// }

// console.log("hello");

// ternary operator 
// let age=20
// let drink;
// if(age>18){
//     drink="drink"
//     console.log(drink);
// }else{
//     drink="coffee"
//     console.log(drink);
// }
// drink=age>18?"drink":"coffee"
// console.log(drink,"drink");


// switch case 
// let day=5
// switch(day){
//     case 0:console.log("today is sunday");
//     break;
//     case 1:console.log("today is monday");
//     break;
//     case 3:console.log("today is tuesday");
//     break;
//     default:console.log("not a valid day");
// }



// loops 
// for loop

// "use strict"
// let a;

// for (let i = 1; i < 11; i++) {
//     a = i
//     console.log("hello world",);
//     for(let j=0;j<10;j++){
//         console.log("value of j",j);
//     }


// }
// console.log(a, "a");

// for(let i=1;i<=10;i++){
// console.log(2*i);
// }

for(let i=1;i<=5;i++){
    let row=""
    for(let j=1;j<=i;j++){
        row=row+"* "
        // row+="* "
    }
    console.log(row);
}
// for(let i=1;i<=5;i++){
//     // let row=""
//     for(let j=1;j<=i;j++){
//         // row="* "
//         console.log("* ");
//     }
//     // console.log(row);
// }
