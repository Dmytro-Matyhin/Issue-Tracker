const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')

const adapter = new FileSync(path.resolve(__dirname, './db.json'))
const db = low(adapter);

// This is an example data. You can use any data you want

db.defaults({
  users: [
  {
    "name": "Michael De Santa",
    "email": "michael_de_santa@gta.com",
    "password": "theSneakyDude",
    "usersId": "DCxOTQ4C-"
  },
  {
    "name": "Trevor Philips",
    "email": "killer_trevor@gta.com",
    "password": "daredevil",
    "usersId": "7gT7SiNMj"
  },
  {
    "name": "Franklin Clinton",
    "email": "franklin@@gta.com",
    "password": "theBlackMess",
    "usersId": "LiCkDJd8i"
  },
  {
    "name": "Lamar Davis",
    "email": "low_lamar@gta.com",
    "password": "lowridergangstaLamar",
    "usersId": "bg8o0-pbo"
  },
  {
    "name": "Lester Crest",
    "email": "fib_hater@gta.com",
    "password": "lame_genius",
    "usersId": "joExAN_XE"
  },
  {
    "name": "Martín Madrazo",
    "email": "martin-matraz@gta.com",
    "password": "cartel",
    "usersId": "TiIsBlRgG"
  }
], 
  issues: [], 
  count: 0})
  .write();

module.exports = db;