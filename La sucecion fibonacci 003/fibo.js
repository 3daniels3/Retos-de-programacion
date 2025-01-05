const fibonacci = (n) => {
    let a = 0;
    let b = 1;
    let temp;
    let array = [a, b];
    for (let i = 0; i < n; i++) {
        temp = (a + b);
        a = b;
        b = temp;
        array.push(temp);
        console.log(temp);
    }
    console.log(array);
};
fibonacci(50);
