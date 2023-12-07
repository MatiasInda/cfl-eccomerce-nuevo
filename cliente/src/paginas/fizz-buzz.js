/*
Escribir un programa que muestre en pantalla los números del 1 al 100,
Sustituye los múltiplos de 3 por la palabra “fizz”,
los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir,
los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.


Resultado esperado:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16... etc
*/
/*
for(let i = 1;i<=100;i++){
    if(i%15==0){
        console.log("fizzBuzz");
    }else if(i%5==0){
        console.log("Buzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}
*/

for (let i = 1; i <= 100; i++) {
  let Resultado = "";

  if (i % 3 === 0) {
    Resultado += "fizz";
  }

  if (i % 5 === 0) {
    Resultado += "buzz";
  }

  console.log(Resultado || i);

  
}

//   textoentero="";
//   for (let i = 1; i <= 100; i++) {
//       let Resultado = "";

//       if (i % 3 === 0) {
//         Resultado += "fizz\n";
//       }

//       if (i % 5 === 0) {
//         Resultado += "buzz\n";
//       }

//       textoentero+= Resultado|| `${i} \n`;

//     }
