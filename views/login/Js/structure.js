let showpasswordBtn = document.querySelector('#showpassword');
let forgotPassword = document.querySelector('.forgotPassword')
let extraLoginInfo = document.querySelector('.extraLoginInfo')
let alternativeProcessBtn = document.querySelector('.alternativeProcess')
let submitBtn = document.querySelector('.button-submit');

alternativeProcessBtn.addEventListener('click', () => {
    if (alternativeProcessBtn.innerHTML == 'Sign Up') {
        forgotPassword.style.display = 'none'
        extraLoginInfo.innerHTML = 'Already have an account ? '
        alternativeProcessBtn.innerHTML = 'Log In'
        submitBtn.value = 'Sign Up'
    }
    else {
        forgotPassword.style.display = 'block'
        extraLoginInfo.innerHTML = 'Don\'t have an account ? '
        alternativeProcessBtn.innerHTML = 'Sign Up'
        submitBtn.value = 'Log In'
    }
})


showpasswordBtn.addEventListener('click', () => {
    let inputBox = showpasswordBtn.previousElementSibling;
    if (inputBox.type == 'password')
        inputBox.type = 'text'
    else
        inputBox.type = 'password'
})


let emailBox = document.querySelector('#email')
emailBox.addEventListener('change', () => {
    document.querySelector('.errortext').innerHTML = ''
})
