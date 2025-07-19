let cb = document.getElementById('cb');
let btn = document.getElementById('btn');

let visa = document.getElementById('visa');
let mastercard = document.getElementById('mastercard');
let paypal = document.getElementById('paypal');

let m = document.getElementById('m');
let v = document.getElementById('v');

btn.onclick = function(){
    if(cb.checked){
        m.textContent = `You are subscribed`;
    }
    else{
        m.textContent = `You are NOT subscribed`;
    }
    if(visa.checked){
        v.textContent = `You are paying through visa`;
    }
    else if(mastercard.checked){
        v.textContent = `You are paying through mastercard`;
    }
    else if(paypal.checked){
        v.textContent = `You are paying through paypal`;
    }
    else{
        v.textContent = `you have to select the payment card`;
    }
}