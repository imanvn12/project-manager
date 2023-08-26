module.exports = class Application {
    #express = require('express')
    #app = this.#express();
    constructor(PORT, DB_url) {
        this.configDatabase(DB_url),
        this.configApplication(),
        this.createServerr(PORT),
        this.createRoutes(),
        this.errorHandler()
    }
    configApplication() {
        const path = require('path')
        this.#app.use(this.#express.json())
        this.#app.use(this.#express.urlencoded({ extended: true }))
        this.#app.use(this.#express.static(path.join(__dirname, '..', 'public')))
    }
    createServerr(PORT) {
        const http = require('http');
        const server = http.createServer();
        server.listen(PORT, () => { console.log(`server run on port : http://localhost:${PORT}`); });
    }
    configDatabase(DB_url) {
        const mongoose = require("mongoose")
        mongoose.connect(DB_url)
    }
    errorHandler() {
        this.#app.use((req, res, next) => {
            res.status(404).json({
                status: 404,
                message: 'not found'
            })

            this.#app((err, req, res, next) => {
                const status = err?.statusCode || 500
                const message = err?.message || 'internal error'
                res.status(status).json({
                    status: status,
                    message: message
                })
            })
        })
    }
    createRoutes() {
        this.#app.get('/', (req, res, next) => {
            try {
                res.status(200).json({ message: 'this is express server' })
            } catch (error) {
                next(error)
            }
        })
    }
}