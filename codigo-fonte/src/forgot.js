
function main() {
    const input_forgot = document.querySelector('.input-password-new')
    const input_forgot_email = document.querySelector('.input-email-register-forgot')

    const btn_forgot = document.querySelector('.btn-forgot')


    btn_forgot.addEventListener('click', () => {
        if (input_forgot.value === '' || input_forgot_email.value === '') {
            alert('Preencha todos os campos')
            return
        }
        const new_password = input_forgot.value
        const email = input_forgot_email.value
        var usuariosJSON = localStorage.getItem('db_usuarios');
        var usuarios = JSON.parse(usuariosJSON);

        var user = usuarios.usuarios.findIndex(user => user.login.trim() === email.trim())
        if (user >= 0) {
            usuarios.usuarios[user].senha = new_password
            localStorage.setItem('db_usuarios', JSON.stringify(usuarios));
            window.location = './login.html';
            return
        }
        alert('Usuário não encontrado')
    })
}



main()