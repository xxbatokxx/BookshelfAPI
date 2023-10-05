const { addBook } = require("./handler");

const routes = [
    {
        method : 'GET',
        Path : '/books',
        handler : addBook
    }
]

module.exports = routes;