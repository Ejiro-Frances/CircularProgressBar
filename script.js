let number75 = document.getElementById("num75");
let number65 = document.getElementById("num65");
let number35 = document.getElementById("num35");
let counter = 0;

setInterval((first) => {
    if(counter == 75){
        clearInterval(first);
    } else
    {
        counter += 1;
        number75.innerHTML = `${counter}%`;
    } if (counter == 64){
        counter += 1;
        number65.innerHTML = `${counter}%`;
    } if (counter == 34){
        counter += 1;
        number35.innerHTML = `${counter}%`;
    } 
}, 27);
