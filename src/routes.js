const express = require("express");

const routes = express();

routes.post("/", (req, res) => {
    console.log(req.body);
    const teclasCelular = [
        {
            id: "0",
            nome: " ",
        },
        {
            id: 2,
            nome: "a",
        },
        {
            id: 22,
            nome: "b",
        },
        {
            id: 222,
            nome: "c",
        },
        {
            id: 3,
            nome: "d",
        },
        {
            id: 33,
            nome: "e",
        },
        {
            id: 333,
            nome: "f",
        },
        {
            id: 4,
            nome: "g",
        },
        {
            id: 44,
            nome: "h",
        },
        {
            id: 444,
            nome: "i",

        },
        {
            id: 5,
            nome: "j",
        },
        {
            id: 55,
            nome: "k",
        },
        {
            id: 555,
            nome: "l",
        },
        {
            id: 6,
            nome: "m",
        },
        {
            id: 66,
            nome: "n",
        },
        {
            id: 666,
            nome: "o",
        },
        {
            id: 7,
            nome: "p",
        },
        {
            id: 77,
            nome: "q",
        },
        {
            id: 777,
            nome: "r",
        },
        {
            id: 7777,
            nome: "s",
        },
        {
            id: 8,
            nome: "t",
        },
        {
            id: 88,
            nome: "u",
        },
        {
            id: 888,
            nome: "v",
        },
        {
            id: 9,
            nome: "w",
        },
        {
            id: 99,
            nome: "x",
        },
        {
            id: 999,
            nome: "y",
        },
        {
            id: 9999,
            nome: "z",
        }];

    const chave = req.body.chave;

    const chaveArray = chave.split("-");
    console.log(chaveArray);
    const array = [];
    const chaveArrayTratada = chaveArray.map((item) => {
    
        teclasCelular.filter((tecla) => {
            if (item === String(tecla.id)) {
                array.push(tecla.nome);
            }
        });
    });

    let newArr = "";
    array.map((item) => {
        newArr += item;
    });

    return res.json(newArr);
});

module.exports = routes;