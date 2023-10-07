const { nanoid } = require('nanoid');
const books = require ('./books');

// create book
const addBookHandler = (request, h) => {
    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;

   if (name === undefined){
    const response = h.response({
        status : 'fail',
        message : 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400)
    return response
   }

   if (readPage > pageCount){
    const response = h.response({
        status : 'fail',
        message : 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400)
    return response
   }

    const id = nanoid(16)
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt

    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, reading, insertedAt, updatedAt
    }

    books.push(newBook)

    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (isSuccess){
        const response = h.response({
            status : 'success',
            message : 'buku berhasil ditambahkan',
            data : {
                bookId : id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status : 'fail',
        message : 'buku gagal di tambahkan',
    });
    response.code(500);
    return response;
}

const getAllBookHandler = () => ({
    status : 'success',
    data : {
        books,
    },
})

const getIdBookHandler = (request, h) => {
    const {bookId} = request.params;
    const book = books.filter((b) => b.id === bookId)[0];

    if (book !== undefined) {
        return {
            status : 'succes',
            data : {
                book,
            },
        }
    }
    const response = h.response ({
        status : 'fail',
        message : 'Buku tidak ditemukan'
    });
    response.code(404);
    return response;
}

const editBookHandler = (request, h) => {
    const {bookId} = request.params;

    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload

    const updatedAt = new Date().toISOString();

    if (name === undefined) {
        const response = h.response({
            status : 'fail',
            message : 'Gagal memperbarui buku. Mohon isi nama buku'
        })
        response.code(400);
        return response;
    }

    if (readPage > pageCount) {
        const response = h.response({
            status : 'fail',
            message : 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
        })
        response.code(400);
        return response;
    }
    
    if (bookId === undefined) {
        const response = h.response({
            status : 'fail',
            message : 'Gagal memperbarui buku. Id tidak ditemukan'
        })
        response.code(404);
        return response;
    }

    const index = books.findIndex((book) => book.id === bookId);

    if (index !== -1) {
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt
        };
    }
    const response = h.response({
        status : 'success',
        message : 'buku berhasil diperbarui'
    })
    response.code(200);
    return response;
}

const deleteBookHandler = (request, h) => {
    const {bookId} = request.params
    const index = books.findIndex((book) => book.id === bookId);

    if (index !== -1){
        books.splice(index -1);
        const response = h.response ({
            status : 'success',
            message : 'Buku berhasil dihapus'
        })
        response.code(200)
        return response
    }

    const response = h.response ({
        status : 'fail',
        message : 'Buku gagal dihapus. Id tidak ditemukan',
    })
    response.code(404);
    return response;
}


module.exports = {addBookHandler, getAllBookHandler, getIdBookHandler, editBookHandler, deleteBookHandler};

