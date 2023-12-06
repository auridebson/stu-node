import express from 'express'

const app = express()

app.use(express.json())

const produtos = [
    {
        'id': 0,
        'nome': 'Notebook',
        'modelo': 'Dell Orion',
    },
    {
        'id': 1,
        'nome': 'TV',
        'modelo': 'SMT647',
    },
    {
        'id': 2,
        'nome': 'Mobile',
        'modelo': 'Samsung iu',
    },
    {
        'id': 3,
        'nome': 'Microondas',
        'modelo': 'HF647',
    }                


]


app.get('/produtos',(req,res) => {
    res.status(200).json(produtos)

})

app.post('/produtos',(req,res) => {
    const id = produtos.length
    const newProduct = {
        'id': id,
        'nome': req.body.nome,
        'modelo': req.body.modelo
    }
    produtos.push(newProduct)
    res.status(201).json(newProduct)
})








const porta = 3333
app.listen(porta, function() {
    console.log(`Rodando na porta ${porta} - ${new Date()}`)
})

