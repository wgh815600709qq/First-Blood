import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';
import RootRouters from './router/index.js'

ReactDOM.render(
  <RootRouters />,
  document.getElementById('root')
);
registerServiceWorker();