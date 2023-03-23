// Factorial de 10 - bucle while, con bifurcacion if y sentencia break
let $factorial = 1;
let i = 1;

while (true) {
    $factorial *= i;
    i++;

    if (i > 10) {
        break;
    }
}

console.log($factorial);