// var anagram = function (p1, p2) {
//     var palabra1 = p1.toLowerCase(); // Tipado inferido como string
//     var palabra2 = p2.toLowerCase(); // Tipado inferido como string
//     if (palabra1 === palabra2)
//         return false;
//     if (palabra1.length !== palabra2.length)
//         return false;
//     var sortedPalabra1 = palabra1.split("").sort().join(""); // Tipo 'string'
//     var sortedPalabra2 = palabra2.split("").sort().join(""); // Tipo 'string'
//     return sortedPalabra1 === sortedPalabra2; // Comparación de tipo 'boolean'
// };
// console.log(anagram("amor", "roma")); // true
