const express = require("express");

const router = express.Router();




const { getAllEscuderias, getByEquipo, getById, getByBase, getByPais, getByYear, getByDirector, getByMotor} = require("../controllers/equipos.controller");

router.get("/escuderias", getAllEscuderias);
router.get("/escuderias/equipo/:equipo", getByEquipo);
router.get("/escuderias/id/:id", getById);
router.get("/escuderias/base/:base", getByBase);
router.get("/escuderias/pais/:pais", getByPais);
router.get("/escuderias/year/:year", getByYear);
router.get("/escuderias/director/:director", getByDirector);
router.get("/escuderias/motor/:motor", getByMotor);







module.exports = router;
