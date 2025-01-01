"use strict";
var anagram = function (p1, p2) {
    var palabra1 = p1.toLowerCase();
    var palabra2 = p2.toLowerCase();
    if (palabra1 === palabra2)
        return false;
    if (palabra1.length !== palabra2.length)
        return false;
    var sortedPalabra1 = palabra1.split("").sort().join("");
    var sortedPalabra2 = palabra2.split("").sort().join("");
    return sortedPalabra1 === sortedPalabra2;
};
console.log(anagram("amor", "roma"));
