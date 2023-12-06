import { createServer } from 'node:http'
const containerMensagem = document.querySelector(".container-mensagem")

const server = createServer((req,res) => {
    console.log('Deu certo')

    return res.end()
})














server.listen(3000)