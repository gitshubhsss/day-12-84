let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",()=>{
   if(inp.value!==""){
    let li=document.createElement("li");
    let delBtns=document.createElement("button");
    li.innerText=`${inp.value}`;
    delBtns.innerText=`Delete`;
    delBtns.classList.add("delete");
    li.append(delBtns);
    ul.appendChild(li);
   }
   inp.value="";
})

ul.addEventListener("click",function (event) {
    if(event.target.nodeName==="BUTTON"){
        let li=event.target.parentElement;
        li.remove();
        
    }
})

