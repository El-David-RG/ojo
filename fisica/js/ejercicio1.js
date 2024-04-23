function hexToRgb(hex) {
    // Verifica si el valor hexadecimal comienza con "#"
    if (hex.startsWith("#")) {
        hex = hex.substring(1);
    }

    // Convierte los dos primeros caracteres hexadecimales a decimal para el componente rojo

    var red = parseInt(hex.substring(0, 2,), 16);
    // Convierte los siguientes dos caracteres hexadecimales a decimal para el componente verde

    var green = parseInt(hex.substring(2, 4), 16);
    // Convierte los últimos dos caracteres hexadecimales a decimal para el componente azul

    var blue = parseInt(hex.substring(4), 16);

    // Retorna un arreglo con los valores de rojo, verde y azul


    return [red, green, blue];
}


var colorHex = "#FF2800";
// Llama a la función hexToRgb() con el valor hexadecimal como argumento

var rgbValues = hexToRgb(colorHex);
console.log("Valores RGB:", rgbValues);
