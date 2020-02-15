const express = require("express");
const routes = require('./routes');
const morgan = require('morgan');

const app = express();

// Middlewear
app.use(express.json());
app.use('/', routes);
app.use(morgan('dev'));

// Error Handlers
app.use((err, req, res, next) => {
    console.warn(err.stack);
    res.status(500).send("Something broke!");
});

// Estabishing Port
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`fun at port: ${PORT}`));