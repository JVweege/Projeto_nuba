const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const dbKnex = require("../data/db_config");


router.get("/", async (req, res) => {
    try {

        const empresas = await dbKnex("empresas").orderBy("nome", "asc");
        res.status(200).json(empresas); 
    } catch (error) {
        res.status(400).json({ msg: error.message }); 
    }
});


router.post("/", async (req, res) => {
  
    const {nome,email,senha,cnpj,tipo,telefone,cep} = req.body;

    
    if (!nome ) {
        res.status(400).json({ msg: "Enviar nome e idade da pessoa" });
        return;
    }

    
    try {
       
        const novo = await dbKnex("empresas").insert({ nome,email,senha,cnpj,tipo,telefone,cep});
        res.status(201).json({ id: novo[0] });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

router.get("/empresa/:id", async (req, res) => {
    const id = req.params.id; 
    try {
        
        const empresas = await dbKnex("empresas")
            .where("id", id);
        res.status(200).json(empresas);
    } catch (error) {
        res.status(400).json({ msg: error.message }); 
    }
});


router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { nome,email,senha,cnpj,tipo,telefone,cep } = req.body; 
    try {
        
        await dbKnex("empresas").update({ nome,email,senha,cnpj,tipo,telefone,cep }).where("id", id);
        res.status(200).json(); 
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});


router.delete("/:id", async (req, res) => {
    const { id } = req.params; 
    try {
        await dbKnex("empresas").del().where({ id });
        res.status(200).json(); 
    } catch (error) {
        res.status(400).json({ msg: error.message }); 
    }
});

module.exports = router;