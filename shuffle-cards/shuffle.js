let cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];

shuffle(cards);
console.log(cards);
function shuffle(array){
  for(let i = array.length-1 ; i>0 ; i--){
    const random = Math.floor(Math.random()*(1+1));                 //Fisher-Vates algorithm
    [array[i],array[random]] = [array[random], array[i]];
  }
}