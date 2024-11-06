let nombre = "America Renee Galvez Ahumada"
function contarLetras (nombreCompleto){
    return nombreCompleto.replace(/\s+/g, '').length;
}
let numeroDeLetras = contarLetras(nombre);
console.log("El numero de letras en mi nombre es: " + numeroDeLetras);