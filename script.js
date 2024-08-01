const form = document.querySelector('#contact-form')
const successMessage = document.querySelector('#success-message')


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const firstName = document.querySelector('#first-name').value.trim()
    const lastName = document.querySelector('#last-name').value.trim()
    const email = document.querySelector('#email').value.trim()
    const queryType = document.querySelector('input[name="query-type"]:checked')
    const message = document.querySelector('#message').value.trim()
    const consent = document.querySelector('#consent').checked

    const formAlert = document.querySelectorAll('.form-alert')

    let isValid = true

    // first name
    if (firstName === '') {
        isValid = false
        document.querySelector('#first-name + .form-alert').style.display = 'block'
        document.querySelector('#first-name').style.border = '1px solid var(--red)'
    } else {
        document.querySelector('#first-name + .form-alert').style.display = 'none'
        document.querySelector('#first-name').style.border = '1px solid var(--medium-grey)'
    }

    // last name
    if (lastName === '') {
        isValid = false
        document.querySelector('#last-name + .form-alert').style.display = 'block'
        document.querySelector('#last-name').style.border = '1px solid var(--red)'
    } else {
        document.querySelector('#last-name + .form-alert').style.display = 'none'
        document.querySelector('#last-name').style.border = '1px solid var(--medium-grey)'
    }

    // email
    if (!isValidEmail(email)) {
        isValid = false

        document.querySelector('#email + .form-alert').style.display = 'block'
        document.querySelector('#email').style.border = '1px solid var(--red)'
    } else {
        document.querySelector('#email + .form-alert').style.display = 'none'
        document.querySelector('#email').style.border = '1px solid var(--medium-grey)'
    }

    //  query type
    if (!queryType) {
        isValid = false

        document.querySelector('.radio-inputs + .form-alert').style.display = 'block'
    } else {
        document.querySelector('.radio-inputs + .form-alert').style.display = 'none'
    }

    // message
    if (message === '') {
        isValid = false

        document.querySelector('#message + .form-alert').style.display = 'block'
        document.querySelector('#message').style.display = '1px solid var(--red)'
    } else {
        document.querySelector('#message + .form-alert').style.display = 'none'
        document.querySelector('#message').style.display = '1px solid var(--medium-grey)'
    }

    //  consent
    if (!consent) {
        isValid = false

        formAlert[5].classList.add('form-error')
    } else {
        formAlert[5].classList.remove('form-error')
    }

    // form is valid
    if (isValid) {
        successMessage.classList.add('active')
        form.reset()
    }

})

// email validation

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}



