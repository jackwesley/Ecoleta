import express from 'express';

const app = express();

app.get("/users", (request, response) =>{
    console.log("listagem de usuarios")


    response.json(['jack', 'wesley', 'moreira', 'campos']);
});

app.listen(3333);