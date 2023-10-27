import express from "express";
import cors from "cors";
import { Produtos } from "./Produtos.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({
    extended : true,
}),
);

app.get("/",(req, res)=>{
    let lista = ["motorola","samsung","iphone","xiaomi","poco"]
    return res.status(200).json(lista);
});

app.post("/novo",(req, res)=>{
    const { codigo, modelo, preco, anolanc } = req.body;
    const produto = new Produtos(codigo, modelo, preco, anolanc);
    return res.status(200).json(produto)
})

app.listen(3000,()=>{
    console.log("api no ar!");
});