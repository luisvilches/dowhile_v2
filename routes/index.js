const express = require("express");
const router = express.Router();
const multiparty = require("connect-multiparty");
const body = multiparty();
const controller = require("../controllers/index");
const auth = require("../auth/index");

// rutas main
router.get("/", body, controller.main.main);
// ruta login
router.post("/login", body,auth.auth);
router.post("/signup",body,controller.user.create);
router.post("/formContacto",body,controller.formContacto.enviaMail);

module.exports = router;