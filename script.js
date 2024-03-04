function calcular(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("txtano")
    let res = document.querySelector("#res")

    if(fano.value.length == 0 || fano.value > ano){
        alert(`[ERRO] Verifique os dados e tente novamente`)
    }
    else {
        let fsex = document.getElementsByName("radsex")
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <= 12) {
                img.setAttribute('src', './Assets/Menino.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', './Assets/AdoleMen.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', './Assets/Homem.jpg')
            }
            else {
                img.setAttribute('src', './Assets/senhor.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if ( idade >= 0 && idade <= 12) {
                img.setAttribute('src', './Assets/Menina.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', './Assets/AdoleWom.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', './Assets/Mulher.jpg')
            }
            else {
                img.setAttribute('src', './Assets/Senhora.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

