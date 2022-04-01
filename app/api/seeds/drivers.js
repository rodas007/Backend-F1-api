const mongoose = require('mongoose')
//const dotenv = require('dotenv');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname,'../../../.env') });
const Driver = require("../models/Driver.model")

//dotenv.config();

const urlDb = process.env.MONGO_DB;

const drivers = [{
    "id": 1,
    "driverId": "albon",
    "permanentNumber": "23",
    "code": "ALB",
    "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
    "givenName": "Alexander",
    "familyName": "Albon",
    "dateOfBirth": "1996-03-23",
    "nationality": "Thai",
    "image": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252697/images/drivers/albon_pchcc6.jpg"
    },
    {
      "id": 2,
    "driverId": "alonso",
    "permanentNumber": "14",
    "code": "ALO",
    "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
    "givenName": "Fernando",
    "familyName": "Alonso",
    "dateOfBirth": "1981-07-29",
    "nationality": "Spanish",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252697/images/drivers/alonso_h5bwqc.jpg"
    },
    {
      "id": 3,
    "driverId": "bottas",
    "permanentNumber": "77",
    "code": "BOT",
    "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
    "givenName": "Valtteri",
    "familyName": "Bottas",
    "dateOfBirth": "1989-08-28",
    "nationality": "Finnish",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252697/images/drivers/bottas_uj84ao.jpg"
    },
    {
      "id": 4,
    "driverId": "gasly",
    "permanentNumber": "10",
    "code": "GAS",
    "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
    "givenName": "Pierre",
    "familyName": "Gasly",
    "dateOfBirth": "1996-02-07",
    "nationality": "French",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252697/images/drivers/gasly_vmnto5.jpg"
    },
    {
      "id": 5,
    "driverId": "hamilton",
    "permanentNumber": "44",
    "code": "HAM",
    "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
    "givenName": "Lewis",
    "familyName": "Hamilton",
    "dateOfBirth": "1985-01-07",
    "nationality": "British",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252697/images/drivers/hamilton_m084le.jpg"
    },
    {
      "id": 6,
    "driverId": "hulkenberg",
    "permanentNumber": "27",
    "code": "HUL",
    "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
    "givenName": "Nico",
    "familyName": "Hülkenberg",
    "dateOfBirth": "1987-08-19",
    "nationality": "German",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252699/images/drivers/vettel_t17rxf.jpg"
    },
    {
      "id": 7,
    "driverId": "latifi",
    "permanentNumber": "6",
    "code": "LAT",
    "url": "http://en.wikipedia.org/wiki/Nicholas_Latifi",
    "givenName": "Nicholas",
    "familyName": "Latifi",
    "dateOfBirth": "1995-06-29",
    "nationality": "Canadian",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252697/images/drivers/latifi_qpt5pv.jpg"
    },
    {
      "id": 8,
    "driverId": "leclerc",
    "permanentNumber": "16",
    "code": "LEC",
    "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
    "givenName": "Charles",
    "familyName": "Leclerc",
    "dateOfBirth": "1997-10-16",
    "nationality": "Monegasque",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252697/images/drivers/Leclerc_gmy33z.jpg"
    },
    {
      "id": 9,
    "driverId": "kevin_magnussen",
    "permanentNumber": "20",
    "code": "MAG",
    "url": "http://en.wikipedia.org/wiki/Kevin_Magnussen",
    "givenName": "Kevin",
    "familyName": "Magnussen",
    "dateOfBirth": "1992-10-05",
    "nationality": "Danish",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252698/images/drivers/magnusen_rhkpit.jpg"
    },
    {
      "id":10,
    "driverId": "norris",
    "permanentNumber": "4",
    "code": "NOR",
    "url": "http://en.wikipedia.org/wiki/Lando_Norris",
    "givenName": "Lando",
    "familyName": "Norris",
    "dateOfBirth": "1999-11-13",
    "nationality": "British",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252698/images/drivers/norris_pvnhke.jpg"
    },
    {
      "id": 11,
    "driverId": "ocon",
    "permanentNumber": "31",
    "code": "OCO",
    "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
    "givenName": "Esteban",
    "familyName": "Ocon",
    "dateOfBirth": "1996-09-17",
    "nationality": "French",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252698/images/drivers/ocon_alg2zv.jpg"
    },
    {
      "id": 12,
    "driverId": "perez",
    "permanentNumber": "11",
    "code": "PER",
    "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
    "givenName": "Sergio",
    "familyName": "Pérez",
    "dateOfBirth": "1990-01-26",
    "nationality": "Mexican",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252698/images/drivers/perez_v8zpot.jpg"
    },
    {
      "id": 13,
    "driverId": "ricciardo",
    "permanentNumber": "3",
    "code": "RIC",
    "url": "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
    "givenName": "Daniel",
    "familyName": "Ricciardo",
    "dateOfBirth": "1989-07-01",
    "nationality": "Australian",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252698/images/drivers/ricciardo_jyzn4b.jpg"
    },
    {
      "id": 14,
    "driverId": "russell",
    "permanentNumber": "63",
    "code": "RUS",
    "url": "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
    "givenName": "George",
    "familyName": "Russell",
    "dateOfBirth": "1998-02-15",
    "nationality": "British",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252698/images/drivers/rusell_xvoh5k.jpg"
    },
    {
      "id": 15,
    "driverId": "sainz",
    "permanentNumber": "55",
    "code": "SAI",
    "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
    "givenName": "Carlos",
    "familyName": "Sainz",
    "dateOfBirth": "1994-09-01",
    "nationality": "Spanish",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252698/images/drivers/sainz_wej4ij.jpg"
    },
    {
      "id": 16,
    "driverId": "mick_schumacher",
    "permanentNumber": "47",
    "code": "MSC",
    "url": "http://en.wikipedia.org/wiki/Mick_Schumacher",
    "givenName": "Mick",
    "familyName": "Schumacher",
    "dateOfBirth": "1999-03-22",
    "nationality": "German",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252698/images/drivers/shumacher_cfm8r4.jpg"
    },
    {
      "id": 17,
    "driverId": "stroll",
    "permanentNumber": "18",
    "code": "STR",
    "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
    "givenName": "Lance",
    "familyName": "Stroll",
    "dateOfBirth": "1998-10-29",
    "nationality": "Canadian",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252698/images/drivers/stroll_h6socc.jpg"
    },
    {
      "id": 18,
    "driverId": "tsunoda",
    "permanentNumber": "22",
    "code": "TSU",
    "url": "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
    "givenName": "Yuki",
    "familyName": "Tsunoda",
    "dateOfBirth": "2000-05-11",
    "nationality": "Japanese",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252698/images/drivers/tsunoda_smao7d.jpg"
    },
    {
      "id": 19,
    "driverId": "max_verstappen",
    "permanentNumber": "33",
    "code": "VER",
    "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
    "givenName": "Max",
    "familyName": "Verstappen",
    "dateOfBirth": "1997-09-30",
    "nationality": "Dutch",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252698/images/drivers/verstappen_l5syrs.jpg"
    },
    {
      "id": 20,
    "driverId": "zhou",
    "permanentNumber": "24",
    "code": "ZHO",
    "url": "http://en.wikipedia.org/wiki/Guanyu_Zhou",
    "givenName": "Guanyu",
    "familyName": "Zhou",
    "dateOfBirth": "1999-05-30",
    "nationality": "Chinese",
    "image":"https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252697/images/drivers/guanyu_y8xju9.jpg"
    }]

const driversArr = drivers.map(d => new Driver(d))


mongoose
    .connect(urlDb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {

        const allDrivers = await Driver.find();

        if (allDrivers.length) {
            await Driver.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {

        await Driver.insertMany(driversArr);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))

    .finally(() => mongoose.disconnect());