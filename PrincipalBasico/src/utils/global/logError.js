
import { dateTime } from "../dateTime.js";


global.logError = function logError ( err ) {
    console.log( dateTime() + ' Error --> ' + err.message );   
}