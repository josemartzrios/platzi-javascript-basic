// CÓDIGO DEL RECTÁNGULO
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();


// CÓDIGO DEL TRIANGULO
console.group("Triángulo");
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + "cm2");

console.log("Los lados de mi triángulo miden: " + ladoTriangulo + "cm, ",
            ladoTriangulo2 + "cm", "y la base mide: " + baseTriangulo + "cm");
console.groupEnd();


// CÓDIGO DEL CÍRCULO
console.group("Círculo");

const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

const PI = Math.PI;


const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd();
