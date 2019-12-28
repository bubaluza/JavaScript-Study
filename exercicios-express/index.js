const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('opa', (req, res) => {
    res.send('ok');
});

app.get('/clientes/relatorio', (req, res) => {
    res.send(req.query.completo + ' ' + req.query.ano);
});

app.post('/corpo', (req, res) => {
    // let corpo = '';
    // req.on('data', function (parte) {
    //     corpo += parte;
    // });
    //
    // req.on('end', function () {
    //     res.send(corpo);
    // });
    res.send(req.body);
});

app.get('/clientes/:id', (req, res) => {
    res.send('opa ' + req.params.id);
});


app.listen(3000, () => console.log('express UP'));