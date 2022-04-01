const express = require("express");
const router = express.Router();
const { uploadToCloudinary } = require("../../middlewares/file.middlewares")
const { upload } = require("../../middlewares/file.middlewares")




const { getAllEscuderias, getByEquipo, getById, getByBase, getByPais, getByYear, getByDirector, getByMotor,postEscuderias, createPostEscuderias, PutRelationDrivers, postPicture} = require("../controllers/equipos.controller");

//GET
router.get("/", getAllEscuderias);
router.get(":equipo", getByEquipo);
router.get("/:id", getById);
router.get("/:base", getByBase);
router.get("/:pais", getByPais);
router.get("/:year", getByYear);
router.get("/:director", getByDirector);
router.get("/:motor", getByMotor);



//POST
router.post("/", postEscuderias);
router.post("/create", createPostEscuderias);
router.post("/uploads", [ upload.single('picture'), uploadToCloudinary ], postPicture);

//PUT
router.put('/addDriver',PutRelationDrivers);








module.exports = router;
