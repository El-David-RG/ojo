function dividirLista(lista) {
    // Calcula el índice de la mitad de la lista
    const mitad = Math.floor(lista.length / 2);

    // Obtiene la primera mitad de la lista desde el principio hasta el índice de la mitad
    const primeraMitad = lista.slice(0, mitad);
    // Obtiene la segunda mitad de la lista desde el índice de la mitad hasta el final
    const segundaMitad = lista.slice(mitad);

    // Retorna un arreglo con las dos mitades de la lista
    return [primeraMitad, segundaMitad];
}

// Lista de nombres
const nombres = ["Juan", "María", "Luis", "Ana", "Pedro", "Elena"];
// Llama a la función dividirLista con la lista de nombres como argumento
const [primeraMitad, segundaMitad] = dividirLista(nombres);
// Imprime la primera y segunda mitad de la lista en la consola
console.log("Primera mitad:", primeraMitad);
console.log("Segunda mitad:", segundaMitad);
