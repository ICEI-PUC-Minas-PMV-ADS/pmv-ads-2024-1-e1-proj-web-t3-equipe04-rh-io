// declara um conjunto inicial de contatos

var db_candidate_inicial = {
    "cadidate": [
        {
            id: 1,
            name: "João da Silva",
            email: "joao_da_silva@email.com",
            telefone: "(11) 99999-8888",
            cpf: "123.456.789-00",
            birthDate: "01/01/1990",
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
export var db = JSON.parse(localStorage.getItem('db_candidate'));

if (!db) {
    db = db_candidate_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    const msgElement = document.getElementById('msg');
    msgElement.innerHTML = '<div class="alert alert-warning">' + msg + '</div>';
}

function insertContato(cadidate) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.cadidate.length != 0)
        novoId = db.cadidate[db.cadidate.length - 1].id + 1;

    let novoCadidate = {
        "id": novoId,
        "name": cadidate.nome,
        "email": cadidate.email,
        "telefone": cadidate.telefone,
        "cpf": cadidate.cpf,
        "birthDate": cadidate.birthDate
    };

    const cpfAlreadyExists = db.cadidate.some(c => c.cpf === novoCadidate.cpf);
    if (cpfAlreadyExists) {
        displayMessage("CPF já cadastrado");
        return;
    }

    // Insere o novo objeto no array
    db.cadidate.push(novoCadidate);
    displayMessage("Candidato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_candidate', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.cadidate.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.cadidate[index].nome = contato.nome,
        db.cadidate[index].email = contato.email,
        db.cadidate[index].telefone = contato.telefone,
        db.cadidate[index].cidade = contato.cidade,
        db.cadidate[index].categoria = contato.categoria,
        db.cadidate[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_candidate', JSON.stringify(db));
}

function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    db.cadidate = db.cadidate.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_candidate', JSON.stringify(db));
}

function init() {
    const btn = document.getElementById('salve-candidate') ?? null;
    if (btn == null) return;
    btn?.addEventListener('click', function () {
        const nome = document.querySelector('.name-cadidato').value;
        const email = document.querySelector('.email-cadidato').value;
        const telefone = document.querySelector('.cel-cadidato').value;
        const cpf = document.querySelector('.cpf-cadidato').value;
        const birthDate = document.querySelector('.birth-cadidato').value;

        if (nome == "" || email == "" || telefone == "" || cpf == "" || birthDate == "") {
            alert('Informe todos os campos para continuar!');
            return;
        }

        insertContato({ nome, email, telefone, cpf, birthDate });
    })
}

init()