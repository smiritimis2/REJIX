 //import { data } from "./array.js";



 import { data } from "./MOCK_DATA.js";





let details = data;


//let details = data;

console.log(details);

let dir=document.getElementById("message");
 function verify()
 {
     let email=document.getElementById("vemail");
     let pass=document.getElementById("vpass");

     let Email=email.value;

     let Pass=pass.value;

     details.forEach((item)=>{
 if(item.email===Email || item.password===Pass)
{
//let msg=document.createElement("div");
dir.innerHTML=`matched`;
dir.style.color="green";
     }
     else
     {
         //let dir=document.getElementById("div");
         dir.innerHTML=`NOT MATCHED`;
        dir.style.color="red";
     }
    }
     )
 }
 let vbtn=document.getElementById("sign");
vbtn.addEventListener("click",verify);