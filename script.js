
let name1=document.querySelectorAll(".name");
const btn=document.querySelectorAll(".btn");

let click1=0
let click2=0
let click3=0

// btn.forEach(function(val){
//      val.addEventListener("click",function(){
//           if(click==0){
//                              name1[0].innerHTML="Friend"
//                              val.innerHTML="Remove Friend"
//                              name1[0].style.color="green"
//                              click=1
//                         }     
//                         else{
//                              name1[0].innerHTML="Stranger"
//                              val.innerHTML="+ Add Friend"
//                              name1[0].style.color="red"
//                              click=0
//                         }     
//      })
// })

btn[0].addEventListener("click",function(){
         if(click1==0){
              name1[0].innerHTML="Friend"
              btn[0].innerHTML="Remove Friend"
              name1[0].style.color="green"
              click1=1
         }     
         else{
              name1[0].innerHTML="Stranger"
              btn[0].innerHTML="+ Add Friend"
              name1[0].style.color="red"
              click1=0
         }     
})
btn[1].addEventListener("click",function(){
         if(click2==0){
              name1[1].innerHTML="Friend"
              btn[1].innerHTML="Remove Friend"
              name1[1].style.color="green"
              click2=1
         }     
         else{
              name1[1].innerHTML="Stranger"
              btn[1].innerHTML="+ Add Friend"
              name1[1].style.color="red"
              click2=0
         }     
})
btn[2].addEventListener("click",function(){
         if(click3==0){
              name1[2].innerHTML="Friend"
              btn[2].innerHTML="Remove Friend"
              name1[2].style.color="green"
              click3=1
         }     
         else{
              name1[2].innerHTML="Stranger"
              btn[2].innerHTML="+ Add Friend"
              name1[2].style.color="red"
              click3=0
         }     
})


let priya_img=document.querySelectorAll(".image");
let love=document.querySelectorAll(".love");
priya_img[0].addEventListener("dblclick",function(){
   love[0].style.transform="scale(4)"
   love[0].style.opacity=0.9
   setTimeout(() => {
                  love[0].style.opacity=0  
              //     love.style.transform="scale(0)"    
    }, 2000);
   setTimeout(() => {
              //     love.style.opacity=0  
                  love[0].style.transform="scale(0)"    
    }, 3000);
})
priya_img[1].addEventListener("dblclick",function(){
   love[1].style.transform="scale(4)"
   love[1].style.opacity=0.9
   setTimeout(() => {
                  love[1].style.opacity=0  
              //     love.style.transform="scale(0)"    
    }, 2000);
   setTimeout(() => {
              //     love.style.opacity=0  
                  love[1].style.transform="scale(0)"    
    }, 3000);
})
priya_img[2].addEventListener("dblclick",function(){
   love[2].style.transform="scale(4)"
   love[2].style.opacity=0.9
   setTimeout(() => {
                  love[2].style.opacity=0  
              //     love.style.transform="scale(0)"    
    }, 2000);
   setTimeout(() => {
              //     love.style.opacity=0  
                  love[2].style.transform="scale(0)"    
    }, 3000);
})


// -----------------------------------------------------------
// let crsr=document.querySelector(".cursor");
// let main=document.querySelector("#main");

// document.addEventListener("mousemove",function(det){
//           crsr.style.left=det.x+10+"px"    
//           crsr.style.top=det.y+10+"px"    
// })

// -----------------------------------------------------
// let sbox=document.querySelector(".s-box");
// let simg=document.querySelector(".s-box img");
// sbox.addEventListener("mousemove",function(dets){
//      simg.style.left=dets.x+-80+"px"
//      // simg.style.top=dets.y+"px"
// })

// sbox.addEventListener("mouseenter",function(){
//      simg.style.opacity=1
// })
// sbox.addEventListener("mouseleave",function(){
//      simg.style.opacity=0
// })

let sbox=document.querySelectorAll(".s-box");
let simg=document.querySelectorAll(".s-box img");
sbox.forEach(function(val){
     val.addEventListener("mouseenter",function(){
           val.childNodes[5].style.opacity=1
     })
     val.addEventListener("mouseleave",function(){
          val.childNodes[5].style.opacity=0
     })
     val.addEventListener("mousemove",function(dets){
          val.childNodes[5].style.left=dets.x+-80+"px"
     })
})


// -----------------------------------------------------

// setTimeout(() => {
//      alert("double tap to like a photo")
// }, 3000);


