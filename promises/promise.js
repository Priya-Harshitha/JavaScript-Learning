function walkdog(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if(dogwalked){
        resolve("You walk the dog 🐕");
      }
      else{
        reject("you DIDN'T walk the dog");
      }
    },1500);
  });
}

function cleankitchen(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleaned = true;
      if(cleaned){
        resolve("You clean the kitchen 🏃‍♀️");
      }
      else{
        reject("you DIDN'T clean the kitchen");
      }
    },2500);
  });
}

function takeouttrash(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const out = false;
      if(out){
        resolve("You take out the trash 🤸‍♀️");
      }
      else{
        reject("you DIDN'T take out the trash");
      }
    },2000);
  });
}

walkdog().then(value => {console.log(value); return cleankitchen()})
         .then(value => {console.log(value); return takeouttrash()})
         .then(value => {console.log(value); console.log("You finished all the tasks")})
         .catch(error => console.error(error));