let mybox = document.getElementById("box");

mybox.addEventListener("click",event =>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "I am gonna Kill you now😁,you are my food today";
});

mybox.addEventListener("mouseover",event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Are You sure..!!🙍‍♀️";
});

mybox.addEventListener("mouseout",event =>{
    event.target.style.backgroundColor = "greenyellow";
    event.target.textContent = "Dare to click me..! 😏";
});