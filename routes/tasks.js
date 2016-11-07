const tasks = require('express').Router();
const db = require('../model/task');

// tasks/:id
// this is more specific than the /tasks, so it goes above
tasks.router('/:taskID')
  .get((req, res) => res.json('get tasks/${req.params.taskID}'));
  .put((req, res) => res.json('put tasks/${req.params.taskID}'));
  .delete((req, res) => res.json('delete tasks/${req.params.taskID}'));

// tasks
// this is the most general route so it goes last
tasks.route('/')
  .get(db.getTasks, sendJSONresp);
  .post(db.addTasks, sendJSONresp);

  /*.get((req, res) => res.json('res.rows'))
  .post((req, res) => res.json('res.rows'))*/

// we're only going to accept json
app.use(bodyParser.json());

// bring in the task routes
app.use('/tasks', require('./routes/tasks'));
app.use('/', require('./routes/index'));




// export this so it is available to server
module.exports = router;
