const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const burgers = require('./controllers/burgers_controller');

let app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', burgers);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), '0.0.0.0', () => {
    console.log('Listening on port', app.get('port'));
});

module.exports = app;