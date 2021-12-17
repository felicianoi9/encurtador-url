import express from 'express';
import { URLController } from './controller/URLController';
import { MongoConnection } from './database/MongoConnection';

const app = express()
app.get( '/test', (Resquest, Response) => {
    Response.send('Rota de testes OK!')
})

app.use(express.json())

const database = new MongoConnection()
database.connect()


const urlController = new URLController()
app.post('/shorten', urlController.shorten)
app.get('/:hash', urlController.redirect)


app.listen(5000, () => console.log('Express rodando na porta 5000'))