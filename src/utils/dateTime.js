


export function dateTime () {
    let agora = new Date();
    let dateTime = agora.toLocaleDateString() + ' ' + agora.toLocaleTimeString();

    return dateTime;
}