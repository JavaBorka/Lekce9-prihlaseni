console.log('Všetko baví')

const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

const formular = document.querySelector('form')

formular.addEventListener('submit', (event) => {
    event.preventDefault()

    const emailInput = document.querySelector('#email')
    const email = emailInput.value
    let passwordInput = document.querySelector('#password')
    let password = passwordInput.value
    const result = document.querySelector('#result')
    const container = document.querySelector('.container')

    if (email === user.email && password === user.password) {
        container.innerHTML = `<p> Přihlášený uživatel: ${user.name}</p>`
    } else {
        result.innerHTML = `<p><b> Neplatné přihlašovací údaje </b></p>`
        password = ''
    }
})