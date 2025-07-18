let username;

document.getElementById('sb').onclick = function(){
    username = document.getElementById("ip").value;
    document.getElementById("hd").textContent="Hello...!"+username;
}