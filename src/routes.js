const { addBookHandler, getAllBookHandler, getIdBookHandler } = require("../src/handler");

const routes = [
    {
        method : 'POST',
        path : '/books',
        handler : addBookHandler,
    },
    {
        method : 'GET',
        path : '/books',
        handler : getAllBookHandler,
    },
    {
        method : 'GET',
        path : '/books/{bookId}',
        handler : getIdBookHandler
    }
]

module.exports = routes;