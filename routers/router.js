const express = require('express');
const router = express.Router();

const Plato = require('../models/plato')

router.get('/', async (req, res) => {
    try {
        const arrayPlatos = await Platolato.find();
        console.log(arrayPlatos)
        res.render("platos", {
            listaPlatos: "Aquí irán todas las platos",
            arrayPlatos
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;