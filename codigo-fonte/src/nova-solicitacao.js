import { db } from "./solicitacao_de_funcionario.js";

const main = document.querySelector('.content-solicitacao');



function dataFormatada(data) {
    const _data = new Date(data);
    let opcoes = { month: 'long', day: 'numeric', year: 'numeric' };
    return _data.toLocaleDateString('pt-BR', opcoes);

}

function createtemplate(solicitacao) {
    return `
    <div class="item-solicitacao">
        <div class="header-solicitacao">
            <span>${solicitacao.setor}</span>
        </div>
        <div class="body-solicitacao">
            <div class="actions-solicitacao">
                <div class="vagas">
                    <span>Vaga:</span>
                    <i>${solicitacao.vacancy}</i>
                </div>
            </div>
            <p>${solicitacao.complement}</p>
            <div class="dates-container">
                <div class="date date-init">
                    <span>Início:</span>
                    <i>${dataFormatada(solicitacao.date_init)}</i>
                </div>
                <div class="date date-end">
                    <span>Finaliza:</span>
                    <i>${dataFormatada(solicitacao.date_end)}</i>
                </div>
            </div>
        </div>
    </div>
    `;
}

const asideSetores = () => {
    const setores = db.solicitacao.map(solicitacao => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const span = document.createElement('span');
        const i = document.createElement('i');

        img.src = "https://placehold.co/50x50";
        img.alt = "Icon";
        span.textContent = solicitacao.setor;

        li.dataset.setor = solicitacao.setor;
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(i);

        li.addEventListener('click', (event) => {
            const setor = event.currentTarget.dataset.setor;
            const solicitacoes = db.solicitacao.filter(solicitacao => solicitacao.setor === setor);
            main.innerHTML = solicitacoes.map(solicitacao => {
                return createtemplate(solicitacao);
            }).join('');

        });

        return li;
    });

    const setoresMap = document.querySelector('.list-setores');
    setores.forEach(setor => setoresMap.appendChild(setor));
}

function init() {
    if (!db) {
        main.innerHTML = `
            <h1>Não há solicitações de funcionários</h1>
        `;
        return
    }
    const solicitacoes = db.solicitacao.map(solicitacao => {
        return createtemplate(solicitacao);
    });

    main.innerHTML = solicitacoes.join('');

    asideSetores()
}

init()