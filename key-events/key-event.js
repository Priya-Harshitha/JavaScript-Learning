const box = document.getElementById("box");
const move = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    box.style.backgroundColor = 'tomato';
    box.textContent = '🙄';
    console.log(event.key);
});

document.addEventListener("keyup", event => {
    box.style.backgroundColor = 'lightblue';
    box.textContent = '😉';
    console.log(event.key);
});

document.addEventListener('keydown',event =>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y -= move;
                break;
            case "ArrowDown":
                y += move;
                break;
            case "ArrowLeft":
                x -= move;
                break;
            case "ArrowRight":
                x += move;
                break;
        }
        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
    }
});
