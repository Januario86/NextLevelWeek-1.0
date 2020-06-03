import express, { response } from 'express';

const app = express();

const users = [
    'Felipe',
    'Miguel',
    'Maria',
    'Gabriel',
    'Felizes'
];

app.get('/users/:id',(request, response) => {

    const id = Number(request.params.id);
    
    const user = users[id];

    return response.json(user);    
});

app.post('/users', (request, response) => {
   
    const user ={
        name: 'Felipe',
        email:'januario86fp@gmail.com'
    };
    return response.json(user);
});

app.listen(3333)