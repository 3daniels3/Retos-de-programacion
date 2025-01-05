for (let n:number = 1; n <= 100; n++) { // Inicia desde 1

    if (n % 3 === 0 && n % 5 === 0) {
        console.log("fizzbuzz"); // Usar "fizzbuzz" en lugar de "fizz buzz"
    } else if (n % 3 === 0) {
        console.log("fizz");
    } else if (n % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(n); // Imprime el número si no es múltiplo de 3 o 5
    }
}
