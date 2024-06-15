import express from "express";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";

// INICIALIZANDO EXPRESS Y DEFINIENDO PUERTO A UTILIZAR
const app = express();
const port = 8080;

// ESTABLECIENDO LOS MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ESTABLECIENDO RUTAS
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

// MIDDLEWARE PARA MANEJAR RUTAS NO DEFINIDAS
app.use((req, res, next) => {
  res.status(404).json({
    error: "No se ha encontrado nada con los parámetros ingresados :/ ",
    suggestion: "Modifique los parámetros de su petición",
  });
});

// COLOCAR AL SERVIDOR A ESCUCHAR EN EL PUERTO DEFINIDO
app.listen(port, () => {
  console.log(`El servidor esta atento al puerto ${port}`);
});
