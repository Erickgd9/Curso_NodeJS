// Adicionais:


// Endpoints:
import filmeController from './controller/DataBase/filmeController.js';


export default function route ( servidor ) {

    servidor.use( filmeController );


}