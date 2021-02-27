import bodyParser from "body-parser";
import cors from "cors";
import { MainServer } from "./classes/mainServer";
import personRouter from "./router/person.route";

const server = MainServer.instance;
// import h3 from 'h3-js';
// const cryptr = new Cryptr(ENCRYPT_KEY);

// parse application/x-www-form-urlencoded
server.app.use( bodyParser.urlencoded({ extended: false }) );

// parse json
server.app.use( bodyParser.json() );

// config cors
server.app.use( cors({ credentials: true, origin: true  }) );

server.app.use( personRouter );

server.onRun( (error: any) => {

    if (error) return console.log('Error al levantar servidor, revise dependencias  :(');

    console.log(`Servidor corriendo en puerto : ${ server.port }`);
    setTimeout(() => {
        // server.loadJournal();
        // server.loadConfigSystem();
    }, 4000);
    
});
