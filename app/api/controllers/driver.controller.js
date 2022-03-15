const Driver = require("../models/Driver.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getAllDrivers = async (req, res, next) => {
    try {
        const drivers = await Driver.find();
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { drivers: drivers }
        });
    } catch (error) {
        return next(error);
    }
};

const getByIdDriver = async (req, res, next) => {
    try {
        const id = req.params.id;
        const driver = await Driver.findById(id);
        if (driver) {
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { driver: driver }
            });
        } else {
            return res.json({
                status: 404,
                message: HTTPSTATUSCODE[404],
                data: { driver: driver }
            });
        }
    } catch (error) {
        return next(error);
    }
};

const getByName = async (req, res, next) => {
    try {
        const name = req.params.name;
        const drivers = await Driver.find({name});
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { drivers: drivers }
        });
    } catch (error) {
        return next(error);
    }
};

const postDrivers = async (req, res, next) => {
    try {
      // Crearemos una instancia de character con los datos enviados
      const newDrivers = new Driver({
        name: req.body.name,
        nationality: req.body.nationality,
        birthDate: req.body.birthDate,
		height: req.body.height,
		weight: req.body.weight,
        image: req.body.image,
        debut: req.body.debut,
        podium: req.body.podium,
        victories: req.body.victories,
        
		
      });
  
      // Guardamos el personaje en la DB
      const createdDrivers = await newDrivers.save();
      return res.status(201).json(createdDrivers);
    } catch (error) {
          // Lanzamos la función next con el error para que lo gestione Express
      next(error);
    }
  };




module.exports = { getAllDrivers, getByIdDriver, getByName ,postDrivers }
