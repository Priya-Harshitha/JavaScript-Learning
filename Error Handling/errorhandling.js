try{
    const dividend = Number(window.prompt("Enter a dividend"));
    const divisor = Number(window.prompt("Enter a divisor"));


    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }
    const result = dividend/divisor;
    console.log(result);
}

catch(error){
    console.error(error);
}
finally{7
    console.log('This will always execute');
}
console.log('This is after the try-catch-finally');