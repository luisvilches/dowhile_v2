const express = require("express");
const router = express.Router();
const multiparty = require("connect-multiparty");
const body = multiparty();
const controller = require("../controllers/index");
const auth = require("../auth/index");

// rutas servicios
router.get("/servicios",body,controller.servicios.find);
router.post("/servicios",body,controller.servicios.create);
router.delete("/servicios/:id",body,controller.servicios.delete);
router.put("/servicios/:id",body,controller.servicios.update);

// rutas casos
router.post("/casos",body,controller.casos.create);
router.get("/casos",body,controller.casos.find);
router.delete("/casos/:id",body,controller.casos.delete);
router.put("/casos/:id",body,controller.casos.update);
router.get("/casos/:id",body,controller.casos.findById);

// rutas usuarios
router.get("/user",body,controller.user.find);
router.delete("/user/:id",body,controller.user.delete);
router.put("/user/:id",body,controller.user.update);
router.get("/user/:id",body,controller.user.findById);

// rutas informacion contacto
router.get("/infoContacto",body,controller.infoContacto.find);
router.post("/infoContacto",body,controller.infoContacto.create);
router.delete("/infoContacto/:id",body,controller.infoContacto.delete);
router.put("/infoContacto/:id",body,controller.infoContacto.update);

// rutas rrss
router.get("/rrss",body,controller.rrss.find);
router.post("/rrss",body,controller.rrss.create);
router.delete("/rrss/:id",body,controller.rrss.delete);
router.put("/rrss/:id",body,controller.rrss.update);



module.exports = router;