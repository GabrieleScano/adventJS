// ¡Es hora de poner el árbol de navidad en casa! 🎄
// Para ello vamos a crear una función que recibe la altura del árbol, 
// que será un entero positivo del 1 a, como máximo, 100.
// Creamos un triángulo de asteríscos * con la altura proporcionada y, 
// a los lados, usamos el guión bajo _ para los espacios. 
// Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.
// Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea 
// para que se forme bien el árbol.

function createXmasTree(height) {
    let tree = '';
    for (let i = 0; i < height; i++) {
        let branch = '';
        for (let j = 0; j < height - i - 1; j++) {
            branch += ' ';
        }
        for (let k = 0; k < i * 2 + 1; k++) {
            branch += '*';
        }
        tree += branch + '\n';
    }
    return tree;
}

console.log(createXmasTree(5));