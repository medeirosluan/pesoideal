const frm = document.querySelector('form')
const resp = document.querySelector('h3')
const aviso = document.querySelector('h4')


frm.addEventListener('submit',(e) => {
    const nome = frm.inNome.value
    const altura = Number.parseFloat(frm.inAltura.value)
    const sexo = frm.inMasculino.checked

    let pesoIdeal  

    if (sexo) {
        pesoIdeal = 22 * Math.pow(altura,2)
        resp.innerText = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(2)} Kg`
    } else{
        pesoIdeal = 21 * Math.pow(altura,2)
        resp.innerText = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(2)} Kg`
    }


    frm.addEventListener('reset', () => {
        resp.innerText = ''
    })

    e.preventDefault()
})

