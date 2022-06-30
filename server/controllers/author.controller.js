// module.exports.index = (request, response) => {
//     response.send('Hello World!');
// }

const { Author } = require('../models/author.model')
module.exports.index = (request, response) => {
    const { name } = request.body;
    Author.createAuthor({ name })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}