const io = require('console-read-write');

async function main () {

  var computerScore = 0
  var userScore = 0

  console.log('Presiona Ctrl + c para salir')
  console.log('¿Piedra, papel o tijera?')
  console.log('1 Piedra\n2 Papel\n3 Tijera \n')
  
  const userInput = await io.read() 

  console.clear()

  console.log('El usuario escribió: ', userInput)

  console.log('Marcador:')
  console.log(`Usuario ${userScore} - ${computerScore} CPU  `)

}

main()



