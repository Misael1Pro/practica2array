let myString = 'Javascript+es+super+cool'

let miarray=myString.split('+') //Cambiando el + por , entre elementos y convirtiendo en array
console.log(miarray)
let Arraylength= miarray.length  //Mostrando el total del array 
console.log(Arraylength) 
let lastItem =(miarray[miarray.length-1]) //Mostrando el ultimo elemento del array
console.log(lastItem)
myInverseArray= miarray.reverse() //Invirtiendo los elementos del array
console.log(myInverseArray) 
myInverseArray.push('Gusta') //Agregando un elemento al final del arrays
console.log(myInverseArray)