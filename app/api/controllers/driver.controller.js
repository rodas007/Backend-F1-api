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




module.exports = { getAllDrivers, getByIdDriver, getByName }
