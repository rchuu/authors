const AuthorController = require('../controllers/author.controller');
module.exports = function (app) {
    app.get('./api/authors', AuthorController.index);
    app.post('./api/authors', AuthorController.createAuthor);
}