let db = JSON.parse(localStorage.getItem('db_solicitacao'));

if (!db) {
    db = null
}

export { db }