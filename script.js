
let result="";

for (i = 1; i <= 100; i++) {
  //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("fizzbuzz");
    result+=`<div class="btn-fizzbuzz btn"> &#9734; &#9733;</div>`
    //ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
  } else if (i % 3 === 0) {
    console.log("fizz");
    result+=`<div class="btn-fizz btn">&#9734;</div>`
  } else if (i % 5 === 0) {
    console.log("buzz");
    result+=`<div class="btn-buzz btn">&#9733;</div>`
    //altrimenti stampo il i normale
  } else {
    console.log(i);
    result+=`<div class="btn"> ${i}</div>`
  }
}



document.getElementById("game-result").innerHTML = result;