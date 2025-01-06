const esprimo = (n) => {
    if (n <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
};
const imprimirprimo = (limite) => {
    for (let i = 1; i <= limite; i++) {
        if (esprimo(i)) {
            console.log(`son primos: ${i}`);
        }
        else {
            console.log(`no son primos ${i}`);
        }
    }
};
imprimirprimo(100);
