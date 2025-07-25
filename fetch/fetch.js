async function Fetch() {
    try{
     let ip = document.getElementById('ip').value;
     ip = ip.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ip}`);

    if(!response.ok){
        throw new Error("Could not fetch resourse");
    }
    const data = await response.json();
    const ps = data.sprites.front_default;
    const i = document.getElementById('i');

    i.src=ps;
    i.style.display = 'block';
    }
    catch(error){
        console.error(error);
    }
} 