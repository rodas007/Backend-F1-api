const mongoose = require('mongoose');
//const dotenv = require('dotenv');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname,'../../../.env') });
const Escuderias = require('../models/Escuderias.model');


//dotenv.config();
const urlDb = process.env.MONGO_DB;

const escuderias = [
  {
    "id": 1,
    "constructorId": "alfa",
    "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
    "name": "Alfa Romeo",
    "nationality": "Swiss",
    "image": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252699/images/teams/alfa-romeo_hckzsp.jpg",
    "imageSecondary": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252700/images/teams/secondary/alfa-romeo_gcn8ab.png"
  },
  {
    "id": 2,
    "constructorId": "alphatauri",
    "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
    "name": "AlphaTauri",
    "nationality": "Italian",
    "image": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252699/images/teams/alpha-Tauri_v1unp8.jpg",
    "imageSecondary": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252700/images/teams/secondary/alphaTauri_ekpfhv.png"
  },
  {
    "id": 3,
    "constructorId": "alpine",
    "url": "http://en.wikipedia.org/wiki/Alpine_F1_Team",
    "name": "Alpine F1 Team",
    "nationality": "French",
    "image": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252699/images/teams/alpine_ol0xjg.jpg",
    "imageSecondary": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252700/images/teams/secondary/alpine_htn5yg.png"
  },
  {
    "id": 4,
    "constructorId": "aston_martin",
    "url": "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
    "name": "Aston Martin",
    "nationality": "British",
    "image": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252699/images/teams/aston-Martin_xm8yxs.jpg",
    "imageSecondary": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252700/images/teams/secondary/AstonMartin_zuvg39.png"
  },
  {
    "id": 5,
    "constructorId": "ferrari",
    "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
    "name": "Ferrari",
    "nationality": "Italian",
    "image": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252699/images/teams/ferrari_ladfd7.jpg",
    "imageSecondary": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252700/images/teams/secondary/ferrari_my8n4h.png"
  },
  {
    "id": 6,
    "constructorId": "haas",
    "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
    "name": "Haas F1 Team",
    "nationality": "American",
    "image": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252699/images/teams/hass_aptdsd.jpg",
    "imageSecondary": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252700/images/teams/secondary/hass_or7gih.png"
  },
  {
    "id": 7,
    "constructorId": "mclaren",
    "url": "http://en.wikipedia.org/wiki/McLaren",
    "name": "McLaren",
    "nationality": "British",
    "image": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252699/images/teams/mclaren_ekjkds.jpg",
    "imageSecondary": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252700/images/teams/secondary/mclaren_odsrxd.png"
  },
  {
    "id": 8,
    "constructorId": "mercedes",
    "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
    "name": "Mercedes",
    "nationality": "German",
    "image": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252699/images/teams/mercedes_ewjstp.jpg",
    "imageSecondary": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252700/images/teams/secondary/mercedes_aeflvc.png"
  },
  {
    "id": 9,
    "constructorId": "red_bull",
    "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
    "name": "Red Bull",
    "nationality": "Austrian",
    "image": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252699/images/teams/redbull_ccv5vc.jpg",
    "imageSecondary": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252700/images/teams/secondary/redbull_vv63su.png"
  },
  {
    "id": 10,
    "constructorId": "williams",
    "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
    "name": "Williams",
    "nationality": "British",
    "image": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252701/images/teams/williams_uit1lb.jpg",
    "imageSecondary": "https://res.cloudinary.com/dvkne4kv7/image/upload/v1648252700/images/teams/secondary/williams_fw0bgj.png"
  },
];
const escuderiasDocuments = escuderias.map(escuderias => new Escuderias(escuderias));
mongoose


  .connect(urlDb, {

//Este string puede ser el de MONGOATLAS
//mongodb+srv://nombre_usuario:<password>@cluster0.gmzuc.mongodb.net/elnombredemibasededatos?retryWrites=true&w=majority
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allEscuderias = await Escuderias.find();
    if (allEscuderias.length) {
      await Escuderias.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Escuderias.insertMany(escuderiasDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());