const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
const Escuderias = require("../models/Escuderias.model");




const getAllEscuderias = async (req, res, next) => {
    try {
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
		const equipo = req.params.equipo;
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
      const EscuderiaFindId = await Escuderias.findById(id);
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


module.exports = { getAllEscuderias, getByEquipo , getById ,getByBase, getByPais ,getByYear ,getByDirector, getByMotor};