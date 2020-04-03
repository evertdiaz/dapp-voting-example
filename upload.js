Web3 = require('web3')

// Cambiar por el puerto que te da tu Ganache Server
web3 = new Web3("http://localhost:7545")

// Muestra todas las cuentas de prueba
web3.eth.getAccounts(console.log)

// Prepara el binario del contrato
bytecode = fs.readFileSync('Voting_sol_Voting.bin').toString()

// Prepara la interfaz ABI del contrato 
abi = JSON.parse(fs.readFileSync('Voting_sol_Voting.abi').toString())

// Objeto para la subida del contrato
deployedContract = new web3.eth.Contract(abi)

// Lista de candidatos u opciones
listOfCandidates = ['geolocation', 'fbsignup', 'streaming', 'social', 'storage']

// Despliegue del contrato con info para el constructor
deployedContract.deploy({
  data: bytecode,
  arguments: [listOfCandidates.map(name => web3.utils.asciiToHex(name))]
}).send({
  // Poner una de las cuentas de donde se debitará los ETHs para el minado
  from: '0xC3579F24923B2b5ffD2be4D81c0e7D11c3d393Be',
  gas: 1500000,
  gasPrice: web3.utils.toWei('0.00003', 'ether')
}).then((newContractInstance) => {
  deployedContract.options.address = newContractInstance.options.address
  // Esto genera nuestra dirección del contrato, se debe guardar.
  console.log(newContractInstance.options.address)
});
