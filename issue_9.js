// En la fábrica de Papa Noél 🎅 se acerca el día especial... 
// y todavía tenemos un montón de cosas por contar. 😅
// Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, 
// que puede ser de valores u objetos, a través de una función o de una propiedad.

// Como ves, la función groupBy recibe una colección (array) y una función o una propiedad, 
// y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento 
// cada elemento o de la propiedad por cada elemento. 
// Luego los valores son un array de los valores que tengan la misma llave.

function groupBy(collection, it) {
    // ¡No olvides compartir tu solución en redes!
    return collection.reduce((group, item) => {
      const key= typeof it === 'string' ? item[it] : it(item)
      return { ...group, [key]: [...(group[key] ?? []), item]}
    },{})
  }
  console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
    console.log(groupBy(['one', 'two', 'three'], 'length')) // { 3: ['one', 'two'], 5: ['three'] }
    console.log(groupBy([{age: 23}, {age: 24}], 'age')) // { 23: [{age: 23}], 24: [{age: 24}] }
    console.log(groupBy([1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear())) // { 2013: [1363223700000], 2014: [1397639141184] }
    console.log(groupBy([
        { title: 'JavaScript: The Good Parts', rating: 8 },
        { title: 'Aprendiendo Git', rating: 10 },
        { title: 'Clean Code', rating: 9 },
        ], 'rating'))
        // { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
        //   9: [{ title: 'Clean Code', rating: 9 }],
        //   10: [{ title: 'Aprendiendo Git', rating: 10 }] }

