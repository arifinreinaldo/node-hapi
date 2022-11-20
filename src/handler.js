const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNotesHandler = (request, rtn) => {
    const { title, tags, body } = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const newNote = {
        id, title, tags, body, createdAt, updatedAt,
    };
    notes.push(newNote);
    const isSuccess = notes.filter((note) => note.id === id).length > 0;
    if (!isSuccess) {
        const response = rtn.response({
            status: 'fail',
            message: 'Gagal menyimpan catatan',
        });
        response.code(500);
        return response;
    }
    const response = rtn.response({
        status: 'fail',
        message: 'Sukses menyimpan catatan',
    });
    response.code(200);
    return response;
};
const getAllNoteHandler = () => ({
    status: 'success',
    data: {
        notes,
    },
});
const getNoteHandler = (request, h) => {
    const { id } = request.params;
    const note = notes.filter((n) => n.id === id)[0];
    if (note === undefined) {
        const response = h.response({
            status: 'fail',
            message: 'No Notes Found',
        });
        response.code = 404;
        return response;
    }
    const response = h.response({
        status: 'success',
        message: 'Note Found',
        data: {
            note,
        },
    });
    response.code = 200;
    return response;
};
module.exports = { addNotesHandler, getAllNoteHandler, getNoteHandler };