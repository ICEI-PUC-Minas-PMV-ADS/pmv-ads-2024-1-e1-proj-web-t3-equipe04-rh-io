//const botao = document.querySelector('.btn');
let input = document.querySelector('.input')

document.getElementById('editProfileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementsByClassName('nome').value;
    const email = document.getElementsByClassName('email').value;
    const password = document.getElementsByClassName('password').value;
    const tel = document.getElementsByClassName('telefone').value;
    const cpf = document.getElementsByClassName('cpf').value;


    setTimeout(() => {
        document.getElementById('message').textContent = 'Perfil atualizado com sucesso!';
    }, 500);
});