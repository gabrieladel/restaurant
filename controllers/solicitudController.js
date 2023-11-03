app.get("/solicitudes", async (req, res) => {
    try {
        const arraySolicitudes = await Solicitud.find();//muestro todos los clientes
        return res.send({
            arraySolicitudes
        })
    } catch (error) {
        console.log(error);
    }
});

//creo Solicitud

app.post("/setSolicitud", async (req, res) => {
    const solicitud = {
        fecha: new Date(),
        detalle: req.body.detalle,
        platoId: req.body.platoId,
        clienteId: req.body.clienteId
    }

    try {
        const nuevoSolicitud = new Solicitud(solicitud);
        nuevoSolicitud.save();
        res.json({ mensaje: "Solicitud cargada correctamente" });
    }
    catch (error) {
        console.log(error);
    }
})

//update//
app.put("/solicitudUpdate/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const solicitud = await Solicitud.findOneAndUpdate({ _id: id },
        {
            nombre: req.body.nombre,
            telefono: req.body.telefono
        }, {
        new: true
    })
    console.log(solicitud);
    return res.status(200).json(solicitud);
})

//delete//

app.delete("/solicitudDelete/:id", async (req, res) => {
    const { id } = req.params;
    const deleteSolicitud = await Solicitud.findByIdAndDelete({ _id: id });
    return res.status(200).json(deleteSolicitud);
})
