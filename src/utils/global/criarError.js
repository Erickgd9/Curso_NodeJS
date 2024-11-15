



global.criarError = function criarError ( err ) {
    let obj = {
        error: err.message
    }
    
    return obj;
}