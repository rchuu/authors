const express = require('express');
const app = express();
const cors = require('cors');

require('./server/config/moongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
require('./server/routes/author.route')(app); // This is new
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})