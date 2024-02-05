const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
require("dotenv").config()
// const syncApiDb= require("./src/controllers/apiDB.js")

conn.sync( false).then(async() => {
// await syncApiDb()
server.listen(process.env.PORT, () => {
  console.log('Server listening on port', process.env.PORT);
})
}).catch(error => console.error(error))
