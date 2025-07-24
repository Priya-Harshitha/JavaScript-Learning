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
      const out = true;
      if(out){
        resolve("You take out the trash 🤸‍♀️");
      }
      else{
        reject("you DIDN'T take out the trash");
      }
    },2000);
  });
}

async function doChores(){
  try{
    const wr = await walkdog();
    console.log(wr);

    const cr = await cleankitchen();
    console.log(cr);

    const tr = await takeouttrash();
    console.log(tr);

    console.log("You ended up");
  }
  catch(erro){
    console.error(error);
    
  }
}
doChores();