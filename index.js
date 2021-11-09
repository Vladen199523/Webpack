import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App/index';
import './src/style/default.scss';


const element = document.querySelector('#root')

ReactDOM.render(<App/>, element);