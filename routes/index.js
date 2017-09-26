const express = require("express");
const router = express.Router();
const multiparty = require("connect-multiparty");
const body = multiparty();
const controller = require("../controllers/index");

// rutas main
router.get("/", body, controller.main.main);

// rutas servicios
router.get("/servicios",body,controller.servicios.find);
router.post("/servicio",body,controller.servicios.create);
router.delete("/servicios/:id",body,controller.servicios.delete);
router.put("/servicios/:id",body,controller.servicios.update);

// rutas casos
router.post("/casos",body,controller.casos.create);
router.get("/casos",body,controller.casos.find);
router.delete("/casos/:id",body,controller.casos.delete);
router.put("/casos/:id",body,controller.casos.update);
router.get("/casos/:id",body,controller.casos.findById);




module.exports = router;