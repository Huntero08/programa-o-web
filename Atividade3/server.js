const express = require('express');
const app = express();

const PORT = 3000;

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;

    estoque.push({
        id: id,
        nome: nome,
        qtd: parseInt(qtd)
    });

    res.send('Produto adicionado');
});

app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;

    estoque = estoque.filter(produto => produto.id !== id);

    res.send('Produto removido');
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;

    const produto = estoque.find(p => p.id === id);

    if (produto) {
        produto.qtd = parseInt(qtd);
        res.send('Quantidade atualizada');
    } else {
        res.send('Produto não encontrado');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});