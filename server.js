const express = require('express');
const app = express();
require('./server/routes/author.route')(app);
app.listen(8000, () => {
    console.log("live on on port 8000 bish");
})