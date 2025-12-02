//Scrivi un programma che stampi i numeri da 1 a 100,
for (i = 1; i <= 100; i++) {
  //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("fizzbuzz");
    //ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
    //altrimenti stampo il i normale
  } else {
    console.log(i);
  }
}
