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
    const SYMBOLS = {
      EMPTY: '_',
      LEAF: '*',
      TRUNK: '#',
    }
    const TRUNK_HEIGHT = 2
  
    return createTree().join('\n')
  
    function createTree() {
      return [
        ...createTreeTop(),
        ...createTrunk()
      ]
    }
  
    function createTreeTop() {
      const levels = [ ...Array( height ).keys() ]
      return levels.map( level => createTreeTopLineForLevel( height - level ) )
    }
  
    function createTreeTopLineForLevel( level ) {
      const emptySpace = SYMBOLS.EMPTY.repeat( level - 1 )
      const leavesPart = SYMBOLS.LEAF.repeat( ( height - level ) * 2 + 1 )
      return emptySpace + leavesPart + emptySpace
    }
  
    function createTrunk() {
      const trunkLine = createTrunkLine()
      return [ ...Array( TRUNK_HEIGHT ) ].map( () => trunkLine )
    }
  
    function createTrunkLine() {
      const emptySpace = SYMBOLS.EMPTY.repeat( height - 1 )
      return emptySpace + SYMBOLS.TRUNK + emptySpace
    }
  }

console.log(createXmasTree(20));