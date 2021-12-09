// Te ha llegado una carta con todos los regalos que debes preparar.
// El tema es que es una cadena de texto y es muy difícil de leer 
// ¡Menos mal que han puesto cada regalo separado por espacio! 
// (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)
// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra,
//  por ejemplo _playstation, que significa que está tachado y no se tiene que contar.
// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.
//  Por ejemplo, si tenemos el texto:
//  const carta = 'bici coche balón _playstation bici coche peluche'
// Al ejecutar el método debería devolver lo siguiente:
// {
//     bici: 2,
//     coche: 2,
//     balón: 1,
//     peluche: 1
//   }



const letter = 'bici coche balón _playstation bici coche peluche'

const regalos = listGifts(letter)


function listGifts(letter) {
    const regalos = {}
    const palabras = letter.split(' ')
    palabras.forEach(palabra => {
        if (palabra.charAt(0) === '_') {
            return
        }
        if (regalos[palabra]) {
            regalos[palabra]++
        } else {
            regalos[palabra] = 1
        }
    })
    return regalos
}


console.log(regalos)
/*

Expected output:
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/