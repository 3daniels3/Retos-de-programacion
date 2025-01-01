
const anagram = (p1:string, p2:string):boolean => {
  let palabra1:string  = p1.toLowerCase()

 let  palabra2:string  = p2.toLowerCase()

  if (palabra1 === palabra2) return false;

  if(palabra1.length !== palabra2.length) return false;

  const sortedPalabra1 = palabra1.split("").sort().join("");
  const sortedPalabra2 = palabra2.split("").sort().join("");

  return sortedPalabra1 === sortedPalabra2;
}
console.log(anagram("amor", "roma"))



