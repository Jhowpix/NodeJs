const {Person} = require("./person");

// require('./modules/path')

const person = new Person("Jhonatan");
console.log(person.sayMyName());

/*
use a extencao nodemon para vizualizar sua aplicacao automaticamente
*/

// tree options for install this extension 
// npm install -g nodemon
// npm install nodemon 
// npm install nodemon --save-dev


//para rodar nodemon instalado globalmente
//npm rum nodemon index.js 

/* 
 "scripts": {
  "start:dev": "nodemon index.js"

   npm run start:dev    // press enter 
*/

require('./modules/fs');