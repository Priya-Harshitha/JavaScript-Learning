let timeId;
function sto(){
   timeId = setTimeout(()=>window.alert('Hello, I am Ammu..!!'),3000);
   console.log("Started");
}
function stop(){
 clearTimeout(timeId);
 console.log("Cleared");
}