import { dateTime } from "./dateTime.js";


export function logError ( err ) {
    console.log( dateTime() + ' Error --> ' + err.menssage );   
}