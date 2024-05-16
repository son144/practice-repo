// console.log("hii");
let nameInput = document.querySelector(".fullName");
let emailInput = document.querySelector(".email");
let paswordInput = document.querySelector(".password");
let confirmPasswordInput = document.querySelector(".confirm-password");
let submitBtn = document.querySelector(".btn");
let para=document.querySelector(".para")

let formHandler = (e) => {
  e.preventDefault();
  if (nameInput.value.trim() === "") {
    console.log("enter name");
    alert("enter name");
    para.innerText="enter name"
  } else if (emailInput.value.trim() === "") {
    console.log("enter email");
    para.innerText="enter email"
  }else if(paswordInput.value.trim()!==confirmPasswordInput.value.trim()){
    alert("password does not match")
  }else if(!(emailInput.value.trim().includes("@gmail.com"))){
    alert("not a valid email")
  }
   else {
    console.log("from submitted");
  }
};
submitBtn.addEventListener("click", formHandler);                                                                                                                                                                                       
