function calcularPagoAgua(consumo_m3) {
    // Definición de tarifas por abastecimiento y alcantarillado por metro cúbico
    const tarifasAbastecimiento = [11.35, 0.1445, 0.1858, 0.8256, 1.1869, 1.2901];
    const tarifasAlcantarillado = [5.68, 0.0723, 0.0929, 0.4129, 0.5935, 0.6450];

    // Cuotas fijas por abastecimiento y alcantarillado
    const cuotaFijaAbastecimiento = 11.52;
    const cuotaFijaAlcantarillado = 5.77;

    // Inicialización de las tarifas por abastecimiento y alcantarillado
    let tarifaAbastecimiento = tarifasAbastecimiento[tarifasAbastecimiento.length - 1];
    let tarifaAlcantarillado = tarifasAlcantarillado[tarifasAlcantarillado.length - 1];

    // Bucle para determinar la tarifa por abastecimiento según el consumo
    for (let i = 0; i < tarifasAbastecimiento.length; i++) {
        if (consumo_m3 <= (i + 1) * 15) {
            tarifaAbastecimiento = tarifasAbastecimiento[i];
            break;
        }
    }

    // Bucle para determinar la tarifa por alcantarillado según el consumo
    for (let i = 0; i < tarifasAlcantarillado.length; i++) {
        if (consumo_m3 <= (i + 1) * 15) {
            tarifaAlcantarillado = tarifasAlcantarillado[i];
            break;
        }
    }

    // Cálculo del costo total sin IVA
    const costoTotalSinIVA = cuotaFijaAbastecimiento + (tarifaAbastecimiento * consumo_m3) +
        cuotaFijaAlcantarillado + (tarifaAlcantarillado * consumo_m3);

    // Agregar el IVA (10%)
    const costoTotalConIVA = costoTotalSinIVA * 1.10;

    // Retorna el costo total con IVA incluido
    return costoTotalConIVA;
}

// Consumo de agua en metros cúbicos
const consumo = 7;
// Llama a la función calcularPagoAgua con el consumo dado
const pagoTotal = calcularPagoAgua(consumo);
// Imprime el pago total con dos decimales en la consola
console.log("El pago total a realizar es:", pagoTotal.toFixed(2), "€");
