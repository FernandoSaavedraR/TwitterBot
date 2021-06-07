var today = new Date();
var n = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' y son las '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
module.exports = async function (context, req) {
    context.log('Generating Nonsense...');
    context.res = {
        body: `Hola, hoy es ${n}`
    };
};