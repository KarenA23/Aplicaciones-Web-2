const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.tutoria = '/tutorias';
        this.dataBase();
        this.middlewares();
        this.routes();
    }

    middlewares(){  
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use( express.static('public') );
    }

    async dataBase(){
     await  dbConnection()
    }

    routes(){
        this.app.use(this.tutoria, require('./routes/tutorias'))
    }

    listen(){
        this.app.listen(this.port, () => {
        console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports=  Server;