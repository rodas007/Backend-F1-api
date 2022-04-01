const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
const Escuderias = require("../models/Escuderias.model");





const getAllEscuderias = async (req, res, next) => {
    try {
      //const escuderias = await Escuderias.find({}, { "_id": 0 , "createdAt":0,"updatedAt":0, }).populate('driver',{ "_id": 0 , "createdAt":0,"updatedAt":0,"team":0 }); //para qe no se vean los id y cuando se creo y actualizo
	  const escuderias = await Escuderias.find();
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { escuderias }
      });
    } catch (error) {
      return next(error);
    }
  };





const getByEquipo = async (req, res, next) => {
    try {
		const equipo = req.params.constructorId;
      const equipoFind = await Escuderias.find({equipo});
	  if (equipoFind) {
		return res.json({
			status: 200,
			message: HTTPSTATUSCODE[200],
			data: { equipoFind: equipoFind }
		});
	} else {
		return res.json({
			status: 404,
			message: HTTPSTATUSCODE[404],
			data: {equipoFind: equipoFind }
		});
	}
} catch (error) {
	return next(error);
}
};

const getById = async (req, res, next) => {
    try {
		const id = req.params.id;
      const EscuderiaFindId = await Escuderias.findOne({id});
	  if (EscuderiaFindId) {
		return res.json({
			status: 200,
			message: HTTPSTATUSCODE[200],
			data: { EscuderiaFindId: EscuderiaFindId }
		});
	} else {
		return res.json({
			status: 404,
			message: HTTPSTATUSCODE[404],
			data: {EscuderiaFindId: EscuderiaFindId }
		});
	}
} catch (error) {
	return next(error);
}
};

const getByBase = async (req, res, next) => {
    try {
		const base = req.params.base;
      const EscuderiaFindBase = await Escuderias.find({ base });
	  if (EscuderiaFindBase) {
		return res.json({
			status: 200,
			message: HTTPSTATUSCODE[200],
			data: { EscuderiaFindBase: EscuderiaFindBase }
		});
	} else {
		return res.json({
			status: 404,
			message: HTTPSTATUSCODE[404],
			data: {EscuderiaFindBase: EscuderiaFindBase }
		});
	}
} catch (error) {
	return next(error);
}
};
const getByPais = async (req, res, next) => {
    try {
		const pais = req.params.pais;
      const EscuderiaFindPais = await Escuderias.find({ pais });
	  if (EscuderiaFindPais) {
		return res.json({
			status: 200,
		message: HTTPSTATUSCODE[200],
			data: { EscuderiaFindPais: EscuderiaFindPais }
		});
	} else {
		return res.json({
			status: 404,
			message: HTTPSTATUSCODE[404],
			data: {EscuderiaFindPais: EscuderiaFindPais }
		});
	}
} catch (error) {
	return next(error);
}
};
const getByYear = async (req, res, next) => {
    try {
		const year = req.params.year;
      const EscuderiaFindYear = await Escuderias.find({ year: {$gte:year} });
	  if (EscuderiaFindYear) {
		return res.json({
			status: 200,
			message: HTTPSTATUSCODE[200],
			data: { EscuderiaFindYear: EscuderiaFindYear }
		});
	} else {
		return res.json({
			status: 404,
			message: HTTPSTATUSCODE[404],
			data: {EscuderiaFindYear: EscuderiaFindYear }
		});
	}
} catch (error) {
	return next(error);
}
};

const getByDirector = async (req, res, next) => {
    try {
		const director = req.params.director;
      const EscuderiaFindDirector = await Escuderias.find({ director });
	  if (EscuderiaFindDirector) {
		return res.json({
			status: 200,
			message: HTTPSTATUSCODE[200],
			data: { EscuderiaFindDirector: EscuderiaFindDirector }
		});
	} else {
		return res.json({
			status: 404,
			message: HTTPSTATUSCODE[404],
			data: {EscuderiaFindDirector: EscuderiaFindDirector }
		});
	}
} catch (error) {
	return next(error);
}
};

const getByMotor = async (req, res, next) => {
    try {
		const motor = req.params.motor;
      const EscuderiaFindMotor = await Escuderias.find({ motor });
	  if (EscuderiaFindMotor) {
		return res.json({
			status: 200,
			message: HTTPSTATUSCODE[200],
			data: { EscuderiaFindMotor: EscuderiaFindMotor }
		});
	} else {
		return res.json({
			status: 404,
			message: HTTPSTATUSCODE[404],
			data: {EscuderiaFindMotor: EscuderiaFindMotor }
		});
	}
} catch (error) {
	return next(error);
}
};

const postEscuderias = async (req, res, next) => {
    try {
      // Crearemos una instancia de character con los datos enviados
      const newEscuderia = new Escuderias({
        id: req.body.id,
        constructorId: req.body.constructorId,
        url: req.body.url,
		name: req.body.name,
		nationality: req.body.nationality,
		image: req.body.image,
		
      });
  
      // Guardamos el personaje en la DB
      const createdEscuderia = await newEscuderia.save();
      return res.status(201).json(createdEscuderia);
    } catch (error) {
          // Lanzamos la función next con el error para que lo gestione Express
      next(error);
    }
  };



  
  const createPostEscuderias =  async (req, res, next) => {
    try {
        const newLocation = new Location({
			id: req.body.id,
        constructorId: req.body.constructorId,
        url: req.body.url,
		name: req.body.name,
		nationality: req.body.nationality,
		image: req.body.image,
        });
        const createdLocation = await newLocation.save();
        return res.status(201).json(createdLocation);
    } catch (error) {
        next(error);
    }
};


const PutRelationDrivers = async (req, res, next) => {
    try {
        const { escuderiaId } = req.body;
        const { driverId } = req.body;
        const updatedEscuderia = await Escuderias.findByIdAndUpdate(
            escuderiaId,
            { $push: { driver: driverId } },
            { new: true }
        );
        return res.status(200).json(updatedEscuderia);
    } catch (error) {
        return next(error);
    }
};







//router.post('/uploads', [upload.single('picture'), uploadToCloudinary], async (req, res, next) => {
	const postPicture = async (req, res, next) => {
    try {
        
        // Crearemos una instancia de character con los datos enviados
        const newEquip = new Escuderias({

            
			id: req.body.id,
        	constructorId: req.body.constructorId,
        	url: req.body.url,
			name: req.body.name,
			nationality: req.body.nationality,
			image: req.file_url,
			
    
        });
        // Guardamos el personaje en la DB
        const createdCharacter = await newEquip.save();
        return res.status(201).json(createdCharacter);
    } catch (error) {
        // Lanzamos la función next con el error para que lo gestione Express
        next(error);
    }
};






module.exports = { getAllEscuderias, getByEquipo , getById ,getByBase, getByPais ,getByYear ,getByDirector, getByMotor, postEscuderias, createPostEscuderias,PutRelationDrivers,postPicture};