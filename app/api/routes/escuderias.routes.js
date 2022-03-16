const express = require("express");
const router = express.Router();




const { getAllEscuderias, getByEquipo, getById, getByBase, getByPais, getByYear, getByDirector, getByMotor,postEscuderias, createPostEscuderias} = require("../controllers/equipos.controller");

//GET
router.get("/", getAllEscuderias);
router.get("/equipo/:equipo", getByEquipo);
router.get("/id/:id", getById);
router.get("/base/:base", getByBase);
router.get("/pais/:pais", getByPais);
router.get("/year/:year", getByYear);
router.get("/director/:director", getByDirector);
router.get("/motor/:motor", getByMotor);

//POST
router.post("/", postEscuderias);
router.post("/create", createPostEscuderias);










module.exports = router;
