import { db } from './db.js'

const mapItem = (item) => {
    if (!item) return

    const itemTable = item.cadidate.map((item) => {

        return `<tr>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.telefone}</td>
                    <td>${item.cpf}</td>
                    <td>${item.birthDate}</td>
                    <td>
                        <button class="btn btn-primary" onclick="updateContato(${item.id})">Editar</button>
                        <button class="btn btn-danger" onclick="deleteContato(${item.id})">Excluir</button>
                    </td>
                </tr>`
    }).join('')

    const tbody_candidate = document.querySelector('.tbody-candidate')
    tbody_candidate.innerHTML = itemTable
}

window.onload = function () {
    mapItem(db)

}