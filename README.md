# Preparar todo

- Tener nodejs y npm instalado
- Linux o MacOS de preferencia
- Instalar ganache
- Instalar web3
  npm install web3@1.2.6

# Levantar servidor de ganache

- Crear un nuevo workspace en ganache y servidor

# Generar archivos del contract

- npm install solc@0.6.4
- node_modules/.bin/solcjs --bin --abi Voting.sol

# Subir contract a blockchain

- Actualizar Puerto de Ganache y una cuenta emisor
- node upload.js
- Guardar address de contrato

# Probar

- Actualizar Address de contrato, ABI y puerto
- Ejecutar index.html
- En Ganache se verá en tiempo real el funcionamiento
