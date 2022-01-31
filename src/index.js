const express = require("express");
const routes = require("./routes");
const app = express();
const cors = require('cors');
app.use(
    cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
)
app.use(express.json());

app.use(routes);
app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor rodando na porta 3000");
}
    );