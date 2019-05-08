const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// Criando Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Usando Middleware
app.use(logger);
// Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// User api route
app.use('/api/users', require('./routes/api/users'));

app.use('/api/posts', require('./routes/api/posts'));

app.use('/api/login', require('./routes/api/login'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started in ${PORT}`));