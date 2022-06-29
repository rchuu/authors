const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
require('./server/routes/author.route')(app); // This is new
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})