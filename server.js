const express = require('express');
const app = express();
require('./app');
const Plato = require('./models/plato');
const Cliente = require('./models/cliente');
const Solicitud = require('./models/solicitud'); 
const port = 3000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
        res.send("Hello World");
});

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
  
    try{
      const nuevoCliente = new Cliente(cliente);
      nuevoCliente.save();
      res.json({ mensaje: "Cliente cargado correctamente" });
    }
    catch (error){
      console.log(error);
    }
  })

//update//
 app.put("/clienteUpdate/:id", async (req, res) => {
    const { id } =req.params;
    console.log(id);
    const cliente= await Cliente.findOneAndUpdate({_id:id},
      {
          nombre: req.body.nombre,
          telefono:req.body.telefono
  }, {
  new: true
})
  console.log(cliente);
  return res.status(200).json(cliente);
})

  //delete//

  app.delete("/clientesDelete/:id", async (req, res) => {
      const { id } =req.params;
      const deleteCliente= await Cliente.findByIdAndDelete({_id:id});
      return res.status(200).json(deleteCliente);
      
  })


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
  
    try{
      const nuevoPlato = new Plato(plato);
      nuevoPlato.save();
      res.json({ mensaje: "Plato cargado correctamente" });
    }
    catch (error){
      console.log(error);
    }
  })
  //update//
 app.put("/clienteUpdate/:id", async (req, res) => {
  const { id } =req.params;
  console.log(id);
  const cliente= await Cliente.findOneAndUpdate({_id:id},
    {
        nombre: req.body.nombre,
        telefono:req.body.telefono
}, {
new: true
})
console.log(cliente);
return res.status(200).json(cliente);
})

//delete//

app.delete("/clientesDelete/:id", async (req, res) => {
    const { id } =req.params;
    const deleteCliente= await Cliente.findByIdAndDelete({_id:id});
    return res.status(200).json(deleteCliente);
    
})

/*Solicitud */
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
  
    try{
      const nuevoSolicitud = new Solicitud(solicitud);
      nuevoSolicitud.save();
      res.json({ mensaje: "Solicitud cargada correctamente" });
    }
    catch (error){
      console.log(error);
    }
  })

  //update//
  app.put("/clienteUpdate/:id", async (req, res) => {
    const { id } =req.params;
    console.log(id);
    const cliente= await Cliente.findOneAndUpdate({_id:id},
      {
          nombre: req.body.nombre,
          telefono:req.body.telefono
  }, {
  new: true
  })
  console.log(cliente);
  return res.status(200).json(cliente);
  })
  
  //delete//
  
  app.delete("/clientesDelete/:id", async (req, res) => {
      const { id } =req.params;
      const deleteCliente= await Cliente.findByIdAndDelete({_id:id});
      return res.status(200).json(deleteCliente);
      
  })
  



app.listen(port, () => {
    console.log(`Example App at http://localhost:${port}`);
});

