AOS.init();

const dataDoEvento = new Date("Dec 12 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor(distanciaAteOEvento % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutorAteOEvento = Math.floor(distanciaAteOEvento % ((1000 * 60 * 60)) / (1000 * 60));
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % ((1000 * 60)) / 1000);


    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutorAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "evento expirado";
    }

}, 1000)