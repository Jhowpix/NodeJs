const fs = require('fs');
const path = require('path');

// criar uma pasta 
fs.mkdir(path.join(_dirname, '/test'), (error) => {
  if (error){
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
});

fs.writeFile(path.join(_dirname, '/test', 'test.txt'), 'Hello node!', (error) =>{
  if (error){
    return console.log('Error: ', error);
  }

  console.log('Arquivo criado com sucesso!');
});