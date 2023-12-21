import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';

const element = <h1>Hello, world!</h1>;

const root = createRoot(document.getElementById('root'));
root.render(element);