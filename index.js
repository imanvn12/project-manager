const Application = require('./app/server')
const DB_url = 'mongodb://127.0.0.1:27017/project-managerDB'
new Application(4000, DB_url)