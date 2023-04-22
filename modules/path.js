const path = require('path')

// Apenas nome do arquivo atual 
console.log(path.basename(__filename));

//  nome do diretorio atual 
console.log(path.dirname(__filename));

//  Extensao do arquivo
console.log(path.extname(__filename));

//  Criar objeto Path
console.log(path.parse(__filename));

//  Juntar caminhos e adicionar diretorios
console.log(path.join(__dirname, 'test', 'test.html'));


