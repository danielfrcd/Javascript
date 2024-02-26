function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'fotobebem.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'fotojovemm.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'fotoadultom.png')
            } else {
                // idoso
                img.setAttribute('src', 'fotoidosom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'fotobebef.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'fotojovemf.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'fotoadultof.png')
            } else {
                // idoso
                img.setAttribute('src', 'fotoidosof.png')
            }
        }
        res.style.textalign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

/* 
    CÓDIGOS USADOS NO PROGRAMA

    GETELEMENTSBYID: 
    utilizamos a variável elemento para armazenar a referência ao elemento desejado. O parâmetro passado para o método getElementById() é o ID do elemento que queremos acessar.
    
    GETFULLYEAR:
    O método getFullYear() retorna o ano da data especificada de acordo com a hora local.
    
    GETELEMENTSBYNAME:
    retorna uma coleção de elementos NodeList com um dado name (en-US) no documento.
    (usado quando tem variaveis com o msm nome, como nesse caso dos inputs.)
    
    CREATEELEMENT:
    cria o elemento HTML especificado ou um HTMLUnknownElement (en-US) se o nome do elemento dado não for conhecido. (no caso aki n tem um img no html, entao usamos o JV para cria-lo)
    
    SETATTRIBUTE:
     adiciona um novo atributo ou modifica o valor de um atributo com um namespace e um nome.

    CHECKED:
     usado para determinar se o estouro aritmético será considerado como um erro.
    
    APPENCHILD:
    insere um elemento filho (children) ao elemento pai (parent) na última posição, ela auxilia na criação de um elemento DOM
*/