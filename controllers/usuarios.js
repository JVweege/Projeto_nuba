const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const dbKnex = require("../data/db_config");


router.get("/", async (req, res) => {
    try {
        
        const usuarios = await dbKnex("usuarios").orderBy("nome", "asc");
        res.status(200).json(usuarios); 
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});


router.post("/", async (req, res) => {
    
    const {nome,email,senha,cpf,rg,telefone,cep } = req.body;

    
    if (!nome || !email ) {
        res.status(400).json({ msg: "Enviar email e senha" });
        return;
    }

    
    try {
    
        const novo = await dbKnex("usuarios").insert({ nome,email,senha,cpf,rg,telefone,cep});
        res.status(201).json({ id: novo[0] });  
    } catch (error) {
        res.status(400).json({ msg: error.message });   
    }
});

router.get("/usuario/:id", async (req, res) => {
    const id = req.params.id;   
    try {
    
        const usuarios = await dbKnex("usuarios")
            .where("id", id);
        res.status(200).json(usuarios);     
    } catch (error) {
        res.status(400).json({ msg: error.message });   
    }
});


router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { nome,email,senha,cpf,rg,telefone,cep } = req.body; 
    try {
   
        await dbKnex("usuarios").update({ nome,email,senha,cpf,rg,telefone,cep }).where("id", id); 
        res.status(200).json(); 
    } catch (error) {
        res.status(400).json({ msg: error.message }); 
    }
});


router.delete("/:id", async (req, res) => {
    const { id } = req.params; 
    try {
        await dbKnex("usuarios").del().where({ id });
        res.status(200).json(); 
    } catch (error) {
        res.status(400).json({ msg: error.message }); 
    }
});

module.exports = router;