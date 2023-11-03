/*Platos */

app.get("/platos", async (req, res) => {
    try {
        const arrayPlatos = await Plato.find();
        return res.send({
            arrayPlatos
        })
    } catch (error) {
        console.log(error);
    }
});

app.post("/setPlato", async (req, res) => {
    const plato = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        calorias: req.body.calorias,
        ingredientes: req.body.ingredientes,
        apto: req.body.apto,
        imagen: req.body.imagen/* ,
      solicitudes: [],
      clienteId: req.body.clienteId */
    }

    try {
        const nuevoPlato = new Plato(plato);
        nuevoPlato.save();
        res.json({ mensaje: "Plato cargado correctamente" });
    }
    catch (error) {
        console.log(error);
    }
})

//update//
app.put("/platoUpdate/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const plato = await Plato.findOneAndUpdate({ _id: id },
        {
            nombre: req.body.nombre,
            telefono: req.body.telefono
        }, {
        new: true
    })
    console.log(plato);
    return res.status(200).json(plato);
})

//delete//

app.delete("/platoDelete/:id", async (req, res) => {
    const { id } = req.params;
    const deletePlato = await Plato.findByIdAndDelete({ _id: id });
    return res.status(200).json(deletePlato);

})
