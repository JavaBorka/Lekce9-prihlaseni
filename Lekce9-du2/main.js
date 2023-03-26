console.log('Všetko baví')


let user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

const formular = document.querySelector('form')

formular.addEventListener('submit', (event) => {
    event.preventDefault()

    let emailInput = document.querySelector('#email')
    let passwordInput = document.querySelector('#password')
    let psw = passwordInput.value
    let result = document.querySelector('#result')
    let container = document.querySelector('.container')

    if (emailInput.value === user.email && passwordInput.value === user.password) {
        container.innerHTML = `<p> Přihlášený uživatel: ${user.name}</p>`
    } else {
        result.innerHTML = `<p><b> Neplatné přihlašovací údaje </b></p>`
        console.log(psw)
        passwordInput.value = '' // toto je OK
        // psw = '' // toto není OK
    }
})
