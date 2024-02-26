function patual() {
            
    var txtp = window.document.getElementById('pais')
    var res = window.document.querySelector('div#res')
    var pais = txtp.value
    if (pais == 'brasil') {
        res.innerHTML = `<p>você vive no ${pais}, você é Brasileiro! </p>`
    }
    res.innerHTML = `<p>Você está vivendo no ${pais}, você é estrangeiro!</p>`
    }