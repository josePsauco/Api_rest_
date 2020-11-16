const express = require('express');
const morgan = require('morgan');
const corsa = require('cors');  
const mysql = require('mysql');
const path = require('path');
const myConnection = require('express-myconnection');
const app = express();
// importing routes
const fotosRouter = require('./routes/routefotos');
async function main(){
    await app.listen(4000);
    app.use(morgan('dev'));
    app.use(corsa());
    app.use(myConnection(mysql, {
        host: 'localhost',
        user: 'manolo',
        password: '123M',
        port: 3306,
        database: 'fotos'
      }, 'single'));
    app.use('/storage',express.static(path.join(__dirname, '/storage')));
    app.use(express.urlencoded({extended: false}));
    app.use('/', fotosRouter);
    console.log(4000);
  
}
main();


