const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const clock = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let mm = dateToday.getMinutes()
    let ss = dateToday.getSeconds()

    if (hr < 10) hr = ('0') + hr

    if (mm < 10) mm = ('0') + mm

    if (ss < 10) ss = ('0') + ss

    hours.textContent = hr
    minutes.textContent = mm
    seconds.textContent = ss

})        // Função para formatar a data
function formatarData() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1; // Os meses em JavaScript são indexados a partir de 0
    const ano = dataAtual.getFullYear();

    // Formata a data no formato DD/MM/YYYY
    return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
}

// Exibe a data no elemento com id "data"
document.getElementById('data').textContent = formatarData();