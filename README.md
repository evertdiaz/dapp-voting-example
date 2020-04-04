#Preparar todo

- Tener nodejs y npm instalado
- Linux o MacOS de preferencia
- Instalar ganache
- Instalar web3
  npm install web3@1.2.6

#Levantar servidor de ganache

- Crear un nuevo workspace en ganache y servidor

#Generar archivos del contract

- npm install solc@0.6.4
- node_modules/.bin/solcjs --bin --abi Voting.sol

#Subir contract al blockchain

- Ejecutar con node upload.js

#Probar

- Ejecutar index.html
- En Ganache se verá en tiempo real el funcionamiento
