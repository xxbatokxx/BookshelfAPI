const { nanoid } = require('nanoid');
const books = require ('../src/book');

// create book
const addBook = (request, h) => {
    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;

    const id = nanoid
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

module.exports = {addBook};

