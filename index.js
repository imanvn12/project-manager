const Application = require('./app/server');
const DB_url = 'mongodb://127.0.0.1:27017/pm';
new Application(3000, DB_url)