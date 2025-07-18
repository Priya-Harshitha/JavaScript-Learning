const PI = 3.14;
let radius;
let circumference;
document.getElementById("sb").onclick = function (){
    radius = document.getElementById("ip").value ;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("ma").textContent="Circumference:"+circumference+'cm';
}
