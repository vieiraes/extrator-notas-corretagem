import express from 'express'
require('dotenv').config()
import { ExtractController } from './controller'

const app = express()
const router = express.Router()
app.use(router)
app.use(express.json())


function bootstrap() {
    const server = app.listen(process.env.PORT)

    if (!server) {
        console.log('Server not started')
    }
    if (server) {
        console.log(`Server running ${process.env.PORT}`)
    }
}

app.use('/extract', ExtractController)


bootstrap()