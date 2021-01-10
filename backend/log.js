function log(...elems){
    const date = new Date();
    console.log(date, ...elems);
}



module.exports = log;