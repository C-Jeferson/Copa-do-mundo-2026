AOS.init(); 

const dataEvento = new Date("jun 11, 2026 08:00:00");
const timeEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeAtual = agora.getTime();

    const distanciaEvento = timeEvento - timeAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasEvento = Math.floor(distanciaEvento % diaEmMs / horaEmMs)
    const minutosEvento = Math.floor(distanciaEvento % horaEmMs / minutoEmMs)
    const segundosEvento = Math.floor(distanciaEvento % minutoEmMs / 1000)

    document.getElementById('contador').innerHTML = `Faltam ${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`

    if (distanciaEvento <= 0) {
        clearInterval(contaHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    } 

}, 1000)