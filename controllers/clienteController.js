
app.get("/clientes", async (req, res) => {
    try {
        const arrayClientes = await Cliente.find();//muestro todos los clientes
        return res.send({
            arrayClientes
        })
    } catch (error) {
        console.log(error);
    }
});

//creo clientes

app.post("/setCliente", async (req, res) => {
    const cliente = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        /* platos: req.body.platos,  */
    }

    try {
        const nuevoCliente = new Cliente(cliente);
        nuevoCliente.save();
        res.json({ mensaje: "Cliente cargado correctamente" });
    }
    catch (error) {
        console.log(error);
    }
})

//update//
app.put("/clienteUpdate/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const cliente = await Cliente.findOneAndUpdate({ _id: id },
        {
            nombre: req.body.nombre,
            telefono: req.body.telefono
        }, {
        new: true
    })
    console.log(cliente);
    return res.status(200).json(cliente);
})

//delete//

app.delete("/clientesDelete/:id", async (req, res) => {
    const { id } = req.params;
    const deleteCliente = await Cliente.findByIdAndDelete({ _id: id });
    return res.status(200).json(deleteCliente);

})

