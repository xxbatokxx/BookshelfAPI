const { addBookHandler, getAllBookHandler, getIdBookHandler, editBookHandler } = require("../src/handler");

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
    },
    {
        method : 'PUT',
        path : '/books/{bookId}',
        handler : editBookHandler
    },
    {
        method : 'DELETE',
        path : '/books/{bookId}',
        handler : () => {}
    }
]

module.exports = routes;