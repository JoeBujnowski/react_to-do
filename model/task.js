const pg = require('pg-promise')({/* OPTIONAL Intialization Options */});

const config = {
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
  password: process.env.DB_PASS
};

const db = ph (config);

module.exports = {

}

getTasks(req, res, next){
  db.any('SELECT * from task;')
  .then((tasks) => {
    res.row = tasks;
    next();
  })
  .catch(error => next(error));
},

/*POST /task*/
/*creates a new tasl, returns the enwly created record*/
addTask(req, res, next) {
  console.log('===addTask===', req.body);
  db.one(
    `INSERT INTO tasks (name, description) VALUES ($/name, $/desc) returning *;`,
    req.body
    )
  .then((task) => {
    console.log('ADDED TASK SUCCESSFUL');
    res.row = task;
    next();
  })
  .catch(error => next(error));
},

// tasks
/*updateTask(req, res) {
  console.log('===addTask===', req.body);
  db.one(
    `INSERT INTO tasks (name, description) VALUES ($1, $2) returning *;`,
    req.body
    )
  .then((task) => {
    console.log('ADDED TASK SUCCESSFUL');
    res.row = task;
    next();
  })
  .catch(error => next(error));
},*/
