// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};



// Exportamos correctamente las funciones
module.exports = { fromEuroToDollar};
