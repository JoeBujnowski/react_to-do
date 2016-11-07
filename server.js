/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint strict: ["error", {"global": true}] */

'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const logger     = require('morgan');

const isDev      = !('NODE_ENV' in process.env) && require('dotenv').config() && false;
const app        = express();

const PORT       = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));
/*app.use(logger('isDev ? 'dev' : 'common));*/

/*app.set('views,' '/views');*/

app.use('/tasks', require('./routes/tasks'));
app.use('/', require('./routes/index'));

/*app.use((err, req, res, next)) {
  res.status(500).send('Something broke!').and(next);
};*/











// Keep at bottom of page
app.listen(port, () => console.log('Server is listening', port));

