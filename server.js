const express = require('express')

// use process.env variables to keep private variables,
require('dotenv').config()

// Express Middleware
const helmet = require('helmet') // creates headers that protect from attacks (security)
const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests


// db Connection w/ localhost


const { Pool } = require('pg');
const dbParams = require('./lib/db');
const db = new Pool(dbParams);
db.connect();


// Controllers - aka, the db queries
const main = require('./controllers/main')

// App
const app = express()


app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('combined')) // use 'tiny' or 'combined'

const famRepFact = require('./repository/family_member');
const famRoute = require('./routes/familyMember');

const famRep = famRepFact(db);

app.use("/familyMember", famRoute(famRep))

app.get('/', (req, res) => res.send('hello world'))
// app.get('/familyMember', (req, res) => main.getTableData(req, res, db))
// app.post('/familyMember', (req, res) => main.postTableData(req, res, db))
// app.put('/familyMember', (req, res) => main.putTableData(req, res, db))
// app.delete('/familyMember', (req, res) => main.deleteTableData(req, res, db))

// App Server Connection
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 8000}`)
})