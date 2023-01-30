function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        //BOM DIA!
        img.src = "demanha.png"
        document.body.style.background = "#b2adc1"
    }
    else if (hora >= 12 && hora < 19) {
        //BOA TARDE!
        img.src = "meiodia.png"
        document.body.style.background = "#7a92b4"
    }
    else {
        //BOA NOITE!
        img.src = "denoite.png"
        document.body.style.background = "#0f2028"
    }
}
