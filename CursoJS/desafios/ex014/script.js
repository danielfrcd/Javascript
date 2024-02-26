alert('Olá!')
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA !
        img.src = 'fotodia.png'
        document.body.style.background = '#f3cd8c'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE !
        img.src = 'fototarde.png'
        document.body.style.background = '#8c8d86'
    } else {
        //BOA NOITE !
        img.src = 'fotonoite.png'
        document.body.style.background = '#4e3d61'
    }
}