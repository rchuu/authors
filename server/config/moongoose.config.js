const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/authorsdb", {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
})
    .then(() => console.log("we got connection to the db biatch"))
    .catch(err => console.log("it ain't working biatch", err))


