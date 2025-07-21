const length = 12;
const hasCapital = true;
const hasLower = true;
const hasNumber = true;
const hasSymbol = true;
function generate(length, hasCapital, hasLower, hasNumber, hasSymbol){
  const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower   = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "~!@#$%^&*();";
  let kooli = '';
  let password = '';
  if(hasCapital){
    kooli +=capital;
  }
  if(hasLower){
    kooli +=lower;
  }
  if(hasNumber){
   kooli +=number;
  }
  if(hasSymbol){
   kooli +=symbol;
  }
  for(let i=0;i<length;i++){
   password+=kooli[Math.floor(Math.random()*kooli.length)];
  }
  return password;
}
console.log(generate(length, hasCapital, hasLower, hasNumber, hasSymbol));