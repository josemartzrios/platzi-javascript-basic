// CÓDIGO DEL RECTÁNGULO
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

console.log(perimetroCuadrado(5));
// console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado){
    return lado * lado;
}

console.log(areaCuadrado(5));
// console.log("El área del cuadrado es: " + areaCuadrado + "cm2");


console.groupEnd();


// CÓDIGO DEL TRIANGULO
console.group("Triángulo");
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo (ladoUno, ladoDos, base){
    return ladoUno + ladoDos + base;
}
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return (base * altura) / 2;
} 
// console.log("El área del triangulo es: " + areaTriangulo + "cm2");

// console.log("Los lados de mi triángulo miden: " + ladoTriangulo + "cm, ",
//             ladoTriangulo2 + "cm", "y la base mide: " + baseTriangulo + "cm");
console.groupEnd();


// CÓDIGO DEL CÍRCULO
console.group("Círculo");

// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2;
}
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

const PI = Math.PI;


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);

    return diametro * PI;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

function areaCirculo(radio){
   return (radio * radio) * PI;
}
// console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd();
