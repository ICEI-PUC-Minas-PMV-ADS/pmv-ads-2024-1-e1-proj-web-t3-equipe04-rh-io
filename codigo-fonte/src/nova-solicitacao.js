import { db } from "./solicitacao_de_funcionario.js";

const main = document.querySelector('.content-solicitacao');



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
                return `
                <div class="item-solicitacao">
                    <div class="header-solicitacao">
                        <span>${solicitacao.setor}</span>
                    </div>
                    <div class="body-solicitacao">
                        <p>${solicitacao.complement}</p>
                        <div class="actions-solicitacao">
                            <div class="vagas">
                                <span>Vagas:</span>
                                <i>${solicitacao.vacancy}</i>
                            </div>
                        </div>
                    </div>
                </div>
                `;
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
        return `
        <div class="item-solicitacao">
            <div class="header-solicitacao">
                <span>${solicitacao.setor}</span>
            </div>
            <div class="body-solicitacao">
                <p>${solicitacao.complement}</p>
                <div class="actions-solicitacao">
                    <div class="vagas">
                        <span>Vagas:</span>
                        <i>${solicitacao.vacancy}</i>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    main.innerHTML = solicitacoes.join('');

    asideSetores()
}

init()