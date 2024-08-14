var b1 = document.querySelector("#box1");
var b2 = document.querySelector("#box2");
var b3 = document.querySelector("#box3");
var b4 = document.querySelector("#box4");

b1.addEventListener("mouseenter", function(){
    let r = Math.floor(Math.random()*1000);
    b1.innerHTML=`${r}`;
})

b1.addEventListener("mouseleave", function(){
    b1.innerHTML="1";
})
let clr = "green";
b2.addEventListener("mouseenter", function(){
    if(clr == "green") {
        b2.style.backgroundColor = "green";
        clr = "red";
    }else{
        b2.style.backgroundColor = "red";
        clr = "green";
    }
    
})
b2.addEventListener("mouseleave", function(){
    b2.style.backgroundColor = "aqua";
})

b3.addEventListener("mouseenter",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    b3.style.backgroundColor=`rgb(${a},${b},${c})`;
})
b3.addEventListener("mouseleave", function(){
    b3.style.backgroundColor = "aqua";
})