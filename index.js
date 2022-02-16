const express = require('express')
const app = express()
const body_parser = require('body-parser')
const cors = require('cors');
app.use(cors());


app.set('port', 4300)
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json())


//// ROUTES
const projectRoutes = require('./routes/project');
app.use('/api', projectRoutes.routes);


app.listen(4300, () => {
    console.log('Servidor corriendo en: http://localhost:4300');
});