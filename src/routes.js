const {addNotesHandler, getAllNoteHandler, getNoteHandler} = require('./handler');

const routes = [{
    method: 'GET', path: '/', handler: () => ('hoho'),
}, {
    method: 'GET', path: '/about', handler: () => ('aboot'),
}, {
    method: 'GET', path: '/gorom', handler: () => ('Uknown'),
}, {
    method: 'GET', path: '/notes', handler: () => getAllNoteHandler(),
}, {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteHandler,
}, {
    method: 'POST',
    path: '/notes',
    handler: addNotesHandler,
    options: {
        cors: {
            origin: ['*'],
        },
    },
}];

module.exports = routes;
