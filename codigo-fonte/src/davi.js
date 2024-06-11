import { db } from './db.js'

const mapItem = (item) => {
    if (!item) return

    const tbody_candidate = document.querySelector('.tbody-candidate');
    tbody_candidate.innerHTML = '';

    item.cadidate.forEach((item) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-id', item.cpf);

        const tdName = document.createElement('td');
        tdName.textContent = item.name;
        tr.appendChild(tdName);

        const tdEmail = document.createElement('td');
        tdEmail.textContent = item.email;
        tr.appendChild(tdEmail);

        const tdTelefone = document.createElement('td');
        tdTelefone.textContent = item.telefone;
        tr.appendChild(tdTelefone);

        const tdCpf = document.createElement('td');
        tdCpf.textContent = item.cpf;
        tr.appendChild(tdCpf);

        const tdBirthDate = document.createElement('td');
        tdBirthDate.textContent = item.birthDate;
        tr.appendChild(tdBirthDate);

        const tdActions = document.createElement('td');
        tdActions.className = 'td-actions';
        const btnEdit = document.createElement('button');
        btnEdit.className = 'btn-edit';
        const linkEdit = document.createElement('a');
        linkEdit.href = 'EditarcandidatoDavi.html';
        linkEdit.textContent = 'Editar';
        btnEdit.appendChild(linkEdit);
        tdActions.appendChild(btnEdit);

        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn-delete';
        btnDelete.textContent = 'Excluir';
        btnDelete.setAttribute('data-id', item.cpf);
        btnDelete.addEventListener('click', deleteClient);
        tdActions.appendChild(btnDelete);

        tr.appendChild(tdActions);

        tbody_candidate.appendChild(tr);
    });
}

const serachByCpf = () => {
    const $cpf = document.querySelector('.search')

    $cpf.addEventListener('keyup', (event) => {
        const value = event.target.value
        const item = db.cadidate.filter(item => item.cpf.includes(value))
        if (value === '') return mapItem(db)
        mapItem({ cadidate: item })
    })
}


const deleteClient = (event) => {
    const btnCurrent = event.currentTarget
    const $tr = btnCurrent.closest('tr')
    const cpf = $tr.dataset.id
    $tr.remove()
    db.cadidate = db.cadidate.filter(item => item.cpf !== cpf)
    localStorage.setItem('db_candidate', JSON.stringify(db))

}


window.onload = function () {
    mapItem(db)
    serachByCpf()
    deleteClient()

}