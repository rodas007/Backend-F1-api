const mongoose = require('mongoose')
const dotenv = require('dotenv');
const Driver = require("../models/Driver.model")

dotenv.config();

const urlDb = process.env.MONGO_DB;

const drivers = [
    {
        "name": "Nicholas Latifi",
        "nationality": "Canadá",
        "birthDate": "29-06-1995",
        "height": 185,
        "weight": 73,
        "number": 6,
        "team": "618d1c2bd38f2b5a312e0f2f",
        "teamHistory": [],
        "championship": [],
        "victories": 0,
        "podium": 0,
        "debut": "2020",
        "image": "https://www.motor.es/fotos-noticias/2019/09/nicholas-latifi-piloto-oficial-williams-2020-201961135-1569495248_1.jpg",
        "officialSite": ["https://www.nicholaslatifi.com/"]
    },
    {
        "name": "George Russell",
        "nationality": "Gran Bretaña",
        "birthDate": "15-02-1998",
        "height": 186,
        "weight": 68,
        "number": 63,
        "team": "618d1c2bd38f2b5a312e0f2f",
        "teamHistory": ["Mercedes"],
        "championship": [],
        "victories": 0,
        "podium": 1,
        "debut": "2021",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYu-UiwrXd_bq91jIQZ5CtnROCJvx5gBH9A&usqp=CAU",
        "officialSite": ["https://www.georgerussell63.com/"]
    },
    {
        "name": "Nikita Mazepin",
        "nationality": "Rusia",
        "birthDate": "02-03-1999",
        "height": 176,
        "weight": 68,
        "number": 9,
        "team": "618d1c2bd38f2b5a312e0f2e",
        "teamHistory": [],
        "championship": [],
        "victories": 0,
        "podium": 0,
        "debut": "2021",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCh4eQvW9hlDnYDscsVzDfCW0Kup6CbVDR0w&usqp=CAU",
        "officialSite": ["http://nikitamazepin.com/"]
    },
    {
        "name": "Mick Schumacher",
        "nationality": "Alemania",
        "birthDate": "22-03-2021",
        "height": 176,
        "weight": 67,
        "number": 47,
        "team": "618d1c2bd38f2b5a312e0f2e",
        "teamHistory": [],
        "championship": [],
        "victories": 0,
        "podium": 0,
        "debut": "2021",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApBIiBb9Ra8UurajMA_6HuXuR6mPPGsqz-A&usqp=CAU",
        "officialSite": ["https://www.mickschumacher.ms/en/"]
    },
    {
        "name": "Antonio Giovinazzi",
        "nationality": "Italia",
        "birthDate": "14-12-1993",
        "height": 183,
        "weight": 70,
        "number": 99,
        "team": "618d1c2bd38f2b5a312e0f2d",
        "teamHistory": ["Sauber"],
        "championship": [],
        "victories": 0,
        "podium": 0,
        "debut": "2017",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIb7e0TcUHWDo1NMWYoDoMwFdWnTfPgyxhbg&usqp=CAU",
        "officialSite": ["http://antoniogiovinazzi.com/"]
    },
    {
        "name": "Kimi Räikkönen",
        "nationality": "Finlandia",
        "birthDate": "05-10-1979",
        "height": 175,
        "weight": 62,
        "number": 7,
        "team": "618d1c2bd38f2b5a312e0f2d",
        "teamHistory": ["Sauber", "McLaren", "Ferrari", "Lotus"],
        "championship": ["2007"],
        "victories": 21,
        "podium": 103,
        "debut": "2001",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/arro-2021-rai-racesuit-fullbody-helmet-0343-1613996103.jpg?crop=1.00xw:0.375xh;0,0.0597xh&resize=1200:*",
        "officialSite": ["https://www.kimiraikkonen.com/"]
    },
    {
        "name": "Yuki Tsunoda",
        "nationality": "Japón",
        "birthDate": "11-05-2000",
        "height": 158,
        "weight": 54,
        "number": 22,
        "team": "618d1c2bd38f2b5a312e0f2c",
        "teamHistory": [],
        "championship": [],
        "victories": 0,
        "podium": 0,
        "debut": "2021",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoj3uAlX8VPZVfMcorNpkjSuOJc_ez00S9bw&usqp=CAU",
        "officialSite": ["https://www.yukitsunoda.com/info/"]
    },
    {
        "name": "Pierre Gasly",
        "nationality": "Francia",
        "birthDate": "07-02-1996",
        "height": 177,
        "weight": 70,
        "number": 10,
        "team": "618d1c2bd38f2b5a312e0f2c",
        "teamHistory": ["Red Bull"],
        "championship": [],
        "victories": 1,
        "podium": 3,
        "debut": "2017",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WoSqyULhay_ZEUxd3gBVePrMLmiFDOAjhQ&usqp=CAU",
        "officialSite": ["https://www.pierregasly.com/fr.html"]
    },
    {
        "name": "Esteban Ocon",
        "nationality": "Francia",
        "birthDate": "17-09-1996",
        "height": 186,
        "weight": 66,
        "number": 31,
        "team": "618d1c2bd38f2b5a312e0f2a",
        "teamHistory": ["id_Manor", "Force India", "Racing Point", "Renault"],
        "championship": [],
        "victories": 1,
        "podium": 2,
        "debut": "2016",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuiiwkQ9TNoJXqZJzlH62GKkvI30lW5o3EA&usqp=CAU",
        "officialSite": ["http://www.esteban-ocon.com/"]
    },
    {
        "name": "Fernando Alonso",
        "nationality": "España",
        "birthDate": "29-07-1981",
        "height": 171,
        "weight": 68,
        "number": 14,
        "team": "618d1c2bd38f2b5a312e0f2a",
        "teamHistory": ["Minardi", "Renault", "McLaren", "Ferrari"],
        "championship": ["2005", "2006"],
        "victories": 32,
        "podium": 97,
        "debut": "2001",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IGTcRDkpLbpbCZMsgQOo7acumbrRxZ8rA&usqp=CAU",
        "officialSite": ["https://www.fernandoalonso.com/"]
    },
    {
        "name": "Lewis Hamilton",
        "nationality": "gran bretaña",
        "birthDate": "07-01-1985",
        "height":174,
        "weight":66,
        "number":4,
        "team": '618d1c2bd38f2b5a312e0f26',
        "teamHistory": ["Mclaren"],
        "championship": ['2008', '2014', '2015', '2017', '2018', '2019', '2020'],
        "victories": 95,
        "podium": 165,
        "debut": "2007",
        "image": "https://cdn-2.motorsport.com/images/mgl/6xEDbp10/s8/lewis-hamilton-mercedes-1.jpg",
        "officialSite": ["https://www.lewishamilton.com/"]
    },
    {
        "name": "Valtteri Bottas",
        "nationality": "Finlandia",
        "birthDate": "28-08-1989",
        "height":173,
        "weight":70,
        "number":77,
        "team": "618d1c2bd38f2b5a312e0f26",
        "teamHistory": ['Williams'],
        "championship": [],
        "victories": 9,
        "podium": 56,
        "debut": "2013",
        "image": "https://static.motor.es/f1/fichas/contenido/valtteri-bottas/valtteri-bottas2021_1617632013.jpg",
        "officialSite": ["https://valtteribottas.com/"]
    },
    {
        "name": "Max Verstappen",
        "nationality": "Holanda",
        "birthDate": "30-09-1997",
        "height":180,
        "weight":67,
        "number":33,
        "team": "618d1c2bd38f2b5a312e0f27",
        "teamHistory": ["Toro Rosso"],
        "championship": [],
        "victories": 10,
        "podium": 42,
        "debut": "2015",
        "image": "https://cdn-4.motorsport.com/images/mgl/0rG4r9d2/s800/max-verstappen-red-bull-racing-1.jpg",
        "officialSite": ["https://verstappen.com/"]
    },
    {
        "name": "Sergio Pérez",
        "nationality": "Mexico",
        "birthDate": "26-01-1990",
        "height":173,
        "weight":63,
        "number":11,
        "team": "618d1c2bd38f2b5a312e0f27",
        "teamHistory": ["Sauber","McLaren","Force India","Racing Point"],
        "championship": [],
        "victories": 1,
        "podium": 10,
        "debut": "2011",
        "image": "https://soymotor.com/sites/default/files/styles/small/public/imagenes/piloto/segio-perez-2021-soymotor.png",
        "officialSite": ["https://checoperez.com/"]
    },
    {
        "name": "Lando Norris",
        "nationality": "Gran bretaña",
        "birthDate": "13-11-1999",
        "height":170,
        "weight":64,
        "number":4,
        "team": "618d1c2bd38f2b5a312e0f28",
        "teamHistory": [],
        "championship": [],
        "victories": 0,
        "podium": 4,
        "debut": "2019",
        "image": "https://cdn-4.motorsport.com/images/mgl/YN1olzb2/s8/lando-norris-mclaren-1.jpg",
        "officialSite": ["https://landonorris.com/"]
    },
    {
        "name": "Daniel Ricciardo",
        "nationality": "Australia",
        "birthDate": "01-07-1989",
        "height":175,
        "weight":66,
        "number":3,
        "team": "618d1c2bd38f2b5a312e0f28",
        "teamHistory": ["HRT","Toro Rosso","Red Bull","Renault"],
        "championship": [],
        "victories": 7,
        "podium": 31,
        "debut": "2011",
        "image": "https://cdn-8.motorsport.com/images/mgl/2d1WwrpY/s8/daniel-ricciardo-mclaren-1.jpg",
        "officialSite": ["https://www.danielricciardo.com/"]
    },
    {
        "name": "Lance Stroll",
        "nationality": "Canada",
        "birthDate": "29-10-1998",
        "height":182,
        "weight":70,
        "number":18,
        "team": "618d1c2bd38f2b5a312e0f29",
        "teamHistory": ["Williams","Racing Point"],
        "championship": [],
        "victories": 0,
        "podium": 3,
        "debut": "2017",
        "image": "https://cdn-1.motorsport.com/images/mgl/2d1WRlDY/s800/lance-stroll-aston-martin-raci-1.jpg",
        "officialSite": ["https://www.lancestroll.com/"]
    },
    {
        "name": "Sebastian Vettel",
        "nationality": "Alemania",
        "birthDate": "03-07-1987",
        "height":175,
        "weight":62,
        "number":5,
        "team": "618d1c2bd38f2b5a312e0f29",
        "teamHistory": ["BMW Sauber","Toro Rosso","Red Bull","Ferrari"],
        "championship": ["2010","2011","2012","2013"],
        "victories": 53,
        "podium": 122,
        "debut": "2007",
        "image": "https://soymotor.com/sites/default/files/styles/small/public/imagenes/piloto/sebastian-vettel-2021-soymotor_0.png",
        "officialSite": ["https://sebastianvettel.de/"]

    },
    {
        "name": "Charles Leclerc",
        "nationality": "Monaco",
        "birthDate": "16-10-1997",
        "height":180,
        "weight":65,
        "number":16,
        "team": "618d1c2bd38f2b5a312e0f2b",
        "teamHistory": ["Sauber"],
        "championship": [],
        "victories": 2,
        "podium": 12,
        "debut": "2018",
        "image": "https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.640.medium.jpg/1617101453619.jpg",
        "officialSite": ["https://www.charlesleclerc.com/"]
    },
    {
        "name": "Carlos Sainz",
        "nationality": "España",
        "birthDate": "01-09-1994",
        "height":178,
        "weight":72,
        "number":55,
        "team": "618d1c2bd38f2b5a312e0f2b",
        "teamHistory": ["Toro Rosso","Renault","McLaren"],
        "championship": [],
        "victories": 0,
        "podium": 3,
        "debut": "2015",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carlos-sainz-of-spain-and-ferrari-looks-on-from-the-grid-news-photo-1625670655.jpg",
        "officialSite": ["https://www.carlossainz.es/"]
    }
]

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