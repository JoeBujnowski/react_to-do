/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint strict: ["error", {"global": true}] */

'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const logger     = require('morgan');

// this tests to se if we have NODE_ENV in our environment
// only load the dotenv if we need it
const isDev      = !('NODE_ENV' in process.env) && require('dotenv').config() && true;
const app        = express();

const PORT       = process.argv[2] || process.env.PORT || 3000;

app.use(logger(isDev ? 'dev' : 'common'));

/*app.set('views,' '/views');*/

app.use(bodyParser.json());

app.use('/tasks', require('./routes/tasks'));
app.use('/', require('./routes/index'));

/*app.use((err, req, res, next)) {
  res.status(500).send('Something broke!').end(next);
};*/


// Keep at bottom of page

// Let's go!
app.listen(PORT);
/*app.listen(port, () => console.log('Server is listening', port));*/

