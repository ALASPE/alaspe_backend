import app from './app.js';
import { sequelize } from './database/database.js';

async function main(){
    const port = 4000;
    try{
        await sequelize.sync({ alter: true }); //Crea las tablas droppeandolas primero si existen
        app.listen(port);
        console.log('Server is listening por 4000')
        console.log('Connection has been established successfully.');
    } catch(e){
        console.error('Unable to connect to the database:', e);
    }
}

main();