import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Signup';
import './semantic/dist/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
