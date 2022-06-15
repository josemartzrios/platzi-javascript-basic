const precioOriginal = 345;
const descuento = 15;

// 100 =  100%, no es necesario el por ciento porque es una resta de cifra
let porcentajeDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajeDescuento) / 100;

function calcularPrecioConDescuento(precio, descuento){

    porcentajeDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajeDescuento) / 100;

    return precioConDescuento;
}

console.log(calcularPrecioConDescuento(300, 30));

function onClickButtonPriceDiscount(){
    const priceValue = document.getElementById("input-price").value;
    const discountValue = document.getElementById("input-discount").value;


    const calculo = calcularPrecioConDescuento(priceValue, discountValue);

    const p = document.getElementById("result");
    p.innerText = "El precio a pagar con descuento incluído es de $" + calculo;



}