// let div=document.querySelector(".container")
// console.log(div.tagName);
// console.log(div.innerHTML);
// console.log(div.innerText);

// let para=document.querySelector("#para")
// console.log(para);
// console.log(para.tagName);
// console.log(para.innerHTML);
// console.log(para.innerText);


// let heading=document.querySelector(".test-Class")
// heading.style.backgroundColor="green"


// attributes --> additional information about tags 
// getAttributes -- to get the attribute value
// let para=document.querySelector("#para")
// console.log(para.getAttribute("id"));


// setAttributes -- to set the attribute value
// console.log(para.setAttribute("id","new-id"));


// insert elements 

// let div=document.querySelector(".container")
// let btn=document.createElement("button")
// btn.innerText="click me"
// btn.innerText="click me"
// console.log(div);
// console.log(btn);

// prepend ---- adds at the start of the node (inside)
// div.prepend(btn)

// append --adds at the end of the node (inside)
// div.append(btn)

// before --adds before  the node (outside)
// div.before(btn)

// after - adds after  the node (outside)
// div.after(btn)

// remove --- removes the node 
// btn.remove()

// homework 
// firstChild()
// lastChild()
// appendChild()
// removeChild()


// console.dir(document)



// let heading=document.querySelector(".container")
// console.log(heading.firstChild);
// console.log(heading[1].tagName);


// let li2=document.querySelector(".li2")
// console.log(li2);
// let li=document.createElement("li")
// li.innerText="submit"
// li2.prepend(li)
// let btn=document.querySelector(".btn")
// console.log(btn);

// let button = document.querySelector(".btn")
// console.log(button);


// event object 
// button.onclick=(e)=>{
//     console.log("event is ",e);
//     console.log("i am clicked again");
// }

// add event listener 

// button.addEventListener("dblclick",()=>{
//     console.log("fired from addEventListener");
//     // document.body.style.backgroundColor="lightGreen"
// })


// let button = document.querySelector(".btn")
// console.log(button);


// event object 
// button.onclick=(e)=>{
//     console.log("event is ",e);
//     console.log("i am clicked again");
// }

// add event listener 

// button.addEventListener("click",()=>{
//     console.log("fired from addEventListener");
//     document.body.style.backgroundColor="lightGreen"
// })

// counter increment and decrement

let counterVar=document.querySelector(".counter")
let counter=+document.querySelector(".counter").innerText
let incrementBtn=document.querySelector(".increment")
let decrementBtn=document.querySelector(".decrement")

let incrementfunction=()=>{
    console.log("incremen btn clicked");
   counter=counter+1
   counterVar.innerText=counter
}

let decrementFunction=()=>{
    console.log("incremen btn clicked");
    if(counter>0){
        counter=counter-1
        counterVar.innerText=counter
    }
}
incrementBtn.addEventListener("click",incrementfunction)
decrementBtn.addEventListener("click",decrementFunction)

// remove event listners
// let incrementBtn=document.querySelector(".increment")
// incrementBtn.addEventListener("click",()=>{
//     console.log("incremen btn clicked");

// })
// incrementBtn.addEventListener("click",()=>{
//     console.log("incremen btn clicked 2nd time");

// })
// let event2=()=>{
//     console.log("incremen btn clicked 3rd time");
// }
// incrementBtn.addEventListener("click",event2)
// incrementBtn.removeEventListener("click",event2)






