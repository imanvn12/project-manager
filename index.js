const Application = require('./app/server');
const DB_url = 'mongodb://127.0.0.1:27017/project-managerDB';
const DB_url2 = 'mongodb://127.0.0.1:27017/project-managerDB2';
require('dotenv').config()
new Application(4000, DB_url2)