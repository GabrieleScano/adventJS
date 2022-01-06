// ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...
// Vamos a crear una función que pasándole un array de regalos, 
// nos devuelva otro array pero donde todos los regalos han sido envueltos 
// con asteriscos tanto por arriba como por los lados.
// Sólo tienes que tener en cuenta unas cosillas ✌️:
// Si el array está vacío, devuelve un array vacío
// Los regalos son emojis 🎁... por lo que tenlo en cuenta 
// a la hora de contar su longitud...
// Por suerte, cada posición del array siempre tiene la misma longitud...

wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/
console.log(wrapGifts(["🏈🎸", "🎮🧸"]))

/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

function wrapGifts(gifts) {  
    const giftSize = gifts[ 0 ].length
    const header = '*'.repeat( giftSize + 2 )
    const body = gifts.map( gift => `*${gift}*` )
    const footer = header
    return [ header, body, footer] .flat()
  } 