const express = require('express');

const server = express();

server.use(express.json());

const cars = ['Gol Bola', 'Fusca', 
                'Honda Fit', 'Monza'];

// Retorna um carro 

server.get('/cars/:index', (req, res) => {
    const {index } = req.params;

    return res.json(cars[index]);
});

//Retornar todos os carros
server.get('/cars', (req, res) => {
    return res.json(cars);
});

//Inserir um novo carro
server.post('/cars' , (req, res) => {
    const { name } = req.body;
    cars.push(name);

    return res.json(cars);
});

//Modificar um carro
server.put('/cars/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cars[index] = name;

    return res.json(cars);
});

//Excluir um carro
server.delete('/cars/:index', (req, res) =>{
    const { index } = req.params;
    
    cars.splice(index, 1);
    return res.json({ message: " O carro foi deletado"});
});










server.listen(3001);