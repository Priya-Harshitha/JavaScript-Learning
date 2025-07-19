let btn = document.getElementById('btn');
let m = document.getElementById('m');

btn.onclick = function(){
    let age = document.getElementById('age').value;
    age = Number(age);
if(age>100){
   m.textContent = `You Are too old to enter this site`;
}
else if(age < 0 ){
    m.textContent = `You'r age can't be in negative`;
}
else if(age == 0 ){
    m.textContent = `You'r can't enter this site. You are just born`;
}
else if(age > 18){
    m.textContent = `You can enter this site`;
}
else if(age < 18){
    m.textContent = `You must be 18+ to enter this site`;
}
else{
    m.textContent = `Please enetr valid age`;
}
}
