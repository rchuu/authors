const AuthorController = require('../controllers/author.controller');
module.exports = function (app) {
    app.get('./api/authors', AuthorController.index);
    app.post('./api/authors', AuthorController.createAuthor);
    app.get('./api/authors/', AuthorController.getAllAuthors);
    app.get('./api/authors/:id', AuthorController.getAuthorById);
    app.delete('./api/authors/:id', AuthorController.deleteAuthor);
}