const hashUrl = window.location.search;
const { searchParams } = new URL(window.location.href)

const DB_NAME_TABLE = 'db_candidate'

function addDateInInputs() {

}

function displayMessage(msg) {
    const msgElement = document.getElementById('msg');
    msgElement.innerHTML = '<div class="alert alert-warning">' + msg + '</div>';
}

function main() {
    const cpf = searchParams.get('cpf')
    const name = searchParams.get('name')
    const email = searchParams.get('email')
    const telefone = searchParams.get('telefone')
    const birthDate = searchParams.get('birthDate')

    const $cpf = document.querySelector('.editar-cpf')
    const $name = document.querySelector('.editar-name')
    const $email = document.querySelector('.editar-email')
    const $telefone = document.querySelector('.editar-telefone')
    const $birthDate = document.querySelector('.editar-birthDate')
    const $work = document.querySelector('.editar-work')
    const $submit = document.querySelector('.btn-save-editar')

    $cpf.value = cpf
    $name.value = name
    $email.value = email
    $telefone.value = telefone
    $birthDate.value = birthDate

    $submit.addEventListener('click', function () {
        const candidate = {
            cpf: $cpf.value,
            name: $name.value,
            email: $email.value,
            telefone: $telefone.value,
            birthDate: $birthDate.value
        }

        const candidates = JSON.parse(localStorage.getItem(DB_NAME_TABLE))
        const newCandidates = candidates.cadidate.map((item) => {
            if (item.cpf === candidate.cpf) {
                return candidate
            }
            return item
        })

        const newCandidatesObj = {
            cadidate: newCandidates
        }
        localStorage.setItem(DB_NAME_TABLE, JSON.stringify(newCandidatesObj))

        displayMessage('Candidato alterado com sucesso')
    })
}

main()

