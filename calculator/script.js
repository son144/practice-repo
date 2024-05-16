console.log("hii");
// let firstInput=document.querySelector(".first")
// let secondInput=document.querySelector(".second")
// let addBtn=document.querySelector(".btn")
// let result=document.querySelector(".result")

// let addHandler=()=>{
//     console.log("clciked");
//     let ans=(+firstInput.value)+(+secondInput.value)
//     console.log("ans is ",ans);
//     result.innerText=ans
// }

// addBtn.addEventListener("click",addHandler)



// input event 

let firstInput=document.querySelector(".first")
let secondInput=document.querySelector(".second")
let result=document.querySelector(".result")
let resetBtn=document.querySelector(".btn")

let firstInputHandler=()=>{
    console.log("inside firstInputHandler");
    let ans=(+firstInput.value)+(+secondInput.value)
    result.innerText=ans
}
let resetHandler=()=>{
    firstInput.value=""
    secondInput.value=""
    result.innerText=" "
}

firstInput.addEventListener("input",firstInputHandler)
secondInput.addEventListener("input",firstInputHandler)
resetBtn.addEventListener("click",resetHandler)



