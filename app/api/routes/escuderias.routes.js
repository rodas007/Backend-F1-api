const express = require("express");
const router = express.Router();
const { uploadToCloudinary } = require("../../middlewares/file.middlewares")
const { upload } = require("../../middlewares/file.middlewares")




const { getAllEscuderias, getByEquipo, getById, getByBase, getByPais, getByYear, getByDirector, getByMotor,postEscuderias, createPostEscuderias, PutRelationDrivers, postPicture} = require("../controllers/equipos.controller");

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
router.post("/uploads", [ upload.single('picture'), uploadToCloudinary ], postPicture);

//PUT
router.put('/addDriver',PutRelationDrivers);








module.exports = router;
