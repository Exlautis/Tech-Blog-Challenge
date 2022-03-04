const path = require('path');

const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const exbphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./config/connection');


const app = express();
const port = process.env.PORT || 3001;
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret',
    cookie: {},
    resave: false, 
    saveUninitialized: true,
    store: new SequalizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening :p'))
});
