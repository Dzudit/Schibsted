import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

it('renders App', () => {
    const div = document.createElement("div");
    ReactDOM.render(<App/>, div);
});
