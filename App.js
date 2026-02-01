import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement('h1',{key: 'header'},'Hello, Bibek!');
const content = ReactDOM.createRoot(document.getElementById('root'));
let List = React.createElement(
        'div', {key :'listContainer'},
        Array.from({length: 5}).map((_,i)=> React.createElement('li',{key:`${i}`},`Item ${i}`))
    )

const rootDiv = React.createElement('div',{key: 'parent'},[element, List]);
content.render(rootDiv);