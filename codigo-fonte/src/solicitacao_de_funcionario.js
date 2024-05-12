// declara um conjunto inicial de contatos
var db_solicitacao_inicial = {
    "solicitacao": [
        {
            id: 1,
            setor: "João da Silva",
            vacancy: "TI",
            date_init: "01/01/2021",
            date_end: "01/01/2022",
            complement: "Desenvolvedor Full Stack",
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
export var db = JSON.parse(localStorage.getItem('db_solicitacao'));

if (!db) {
    db = db_solicitacao_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    const msgElement = document.getElementById('msg');
    msgElement.innerHTML = '<div class="alert alert-warning">' + msg + '</div>';
}

function insertSolicitacao(solicitacao) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.solicitacao.length != 0)
        novoId = db.solicitacao[db.solicitacao.length - 1].id + 1;
    let novosolicitacao = {
        "id": novoId,
        "setor": solicitacao.setor,
        "vacancy": solicitacao.vacancy,
        "date_init": solicitacao.date_init,
        "date_end": solicitacao.date_end,
        "complement": solicitacao.complement
    };

    // Insere o novo objeto no array
    db.solicitacao.push(novosolicitacao);
    displayMessage("Candidato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_solicitacao', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.solicitacao.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.solicitacao[index].nome = contato.nome,
        db.solicitacao[index].email = contato.email,
        db.solicitacao[index].telefone = contato.telefone,
        db.solicitacao[index].cidade = contato.cidade,
        db.solicitacao[index].categoria = contato.categoria,
        db.solicitacao[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_solicitacao', JSON.stringify(db));
}

function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    db.solicitacao = db.solicitacao.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_solicitacao', JSON.stringify(db));
}

function init() {
    const btn = document.getElementById('form-solicitacao') ?? null;
    if (btn == null) return;
    btn?.addEventListener('submit', function (e) {
        e.preventDefault();
        const setor = document.querySelector('#setor').value;
        const vacancy = document.querySelector('#vacancy').value;
        const date_init = document.querySelector('#date-init').value;
        const date_end = document.querySelector('#date-end').value;
        const complement = document.querySelector('#complement').value;

        if (setor == "" || vacancy == "" || date_init == "" || date_end == "" || complement == "") {
            alert('Informe todos os campos para continuar!');
            return;
        }

        insertSolicitacao({ setor, vacancy, date_init, date_end, complement });
    })
}

init()