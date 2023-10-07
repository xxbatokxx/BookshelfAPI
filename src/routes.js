const { addBookHandler, getAllBookHandler, getIdBookHandler, editBookHandler, deleteBookHandler } = require("../src/handler");

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
        handler : deleteBookHandler
    }
]

module.exports = routes;