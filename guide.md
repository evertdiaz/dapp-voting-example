1. Preparar todo
- Tener nodejs y npm instalado
- Linux o MacOS de preferencia
- Instalar ganache
- Instalar web3
  npm install web3@1.2.6

2. Levantar servidor de ganache
- Crear un nuevo workspace en ganache y servidor

3. Generar archivos del contract
- npm install solc@0.6.4
- node_modules/.bin/solcjs --bin --abi Voting.sol

4. Subir contract al blockchain
- Ejecutar con node upload.js

5. Probar
- Ejecutar index.html
- En Ganache se verá en tiempo real el funcionamiento
