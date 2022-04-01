const Driver = require("../models/Driver.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getAllDrivers = async (req, res, next) => {
    try {
        //const drivers = await Driver.find({},{"_id": 0,"team": 0});
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

const getByName = async (req, res) => {
    
    try {
        const name = req.params.givenName;
        const driverByName = await Driver.find({name});
        return res.status(200).json({        status: 200,
            message: HTTPSTATUSCODE[200],
            data: { drivers: driverByName }
        });
    } catch (error) {
        return next(error);
    }
};



const getByIdDriver = async (req, res, next) => {
    try {
        const id = req.params.id;
        const driver = await Driver.findOne({id});
        if (driver) {
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { drivers: driver }
            });
        } else {
            return res.json({
                status: 404,
                message: HTTPSTATUSCODE[404],
               
            });
        }
    } catch (error) {
        return next(error);
    }
};

const getMongoIdDriver = async (req, res, next) => {
    try {
        const id = req.params._id;
        const driver = await Driver.findById(id);
        if (driver) {
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { drivers: driver }
            });
        } else {
            return res.json({
                status: 404,
                message: HTTPSTATUSCODE[404],
               
            });
        }
    } catch (error) {
        return next(error);
    }
};


const postDrivers = async (req, res, next) => {
    try {
      // Crearemos una instancia de character con los datos enviados
      const newDrivers = new Driver({
        
       
        permanentNumber: req.body.permanentNumber,
        givenName: req.body.givenName,
        familyName: req.body.familyName,
        nationality: req.body.nationality,
        image:  req.body.image,
        
		
      });
  
      // Guardamos el personaje en la DB
      const createdDrivers = await newDrivers.save();
      return res.status(201).json(createdDrivers);
    } catch (error) {
          // Lanzamos la función next con el error para que lo gestione Express
      next(error);
    }
  };

  const getByIdDelete = async (req, res, next) => {
    try {
        const {id} = req.params;
        // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        await Driver.findByIdAndDelete(id);
        return res.status(200).json('Character deleted!');
    } catch (error) {
        return next(error);
    }
};

const putByid = async (req, res, next) => {
    try {
        const { id } = req.params;
        const characterModify = new Driver(req.body) ;
        characterModify._id = id;
        const characterUpdated = await Driver.findByIdAndUpdate(id, characterModify, { new: true });
        return res.status(200).json(characterUpdated);
    } catch (error) {
        return next(error);
    }
};










module.exports = { getAllDrivers, getByIdDriver, getByName ,postDrivers , getByIdDelete, putByid,getMongoIdDriver}
