function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert("Verifique os dados e tente novemente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade <= 14) {
                //criança
                img.setAttribute("src", "ninja.png")
            } else if (idade <= 40) {
                //adulto
                img.setAttribute("src", "homem.png")
            } else if (idade > 40) {
                //velho
                img.setAttribute("src", "velho.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade == 0 && idade <= 14) {
                //criança
                img.setAttribute("src", "vaqueira.png")
            } else if (idade <= 40) {
                //adulto
                img.setAttribute("src", "mulher.png")
            } else if (idade > 40) {
                //velha
                img.setAttribute("src", "velha.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos que você é  um ${genero} de ${idade} anos!`
        res.appendChild(img) 
    }
}