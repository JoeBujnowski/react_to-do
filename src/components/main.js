import ReactDom from 'react-dom';
import App from './App/App.jsx';

require('bootstrap/dist/css/bootstrap.css');
require('./App/css/styles.css');
require('./App/images/GA_gear.png');
require('./App/images/GA_logo.png');
require('./App/images/favicon.ico');


//mount our app at #container
ReactDom.render(<App />, document.querySelector('#container'));
