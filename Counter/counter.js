let decrease= document.getElementById("decrease");
let reset= document.getElementById("reset");
let increase= document.getElementById("increase");
let countLable= document.getElementById("countLable");
let count=0;

decrease.onclick = function(){
    count--;
    countLable.textContent=count;
}
reset.onclick = function(){
    count=0;
    countLable.textContent=count;
}
increase.onclick = function(){
    count++;
    countLable.textContent=count;
}