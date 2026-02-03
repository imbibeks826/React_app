import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement('div',{key: 'header', style:{display:'flex', flex:1, height: '100vh', backgroundColor:'black', justifyContent:'center', alignItems:'center'}},React.createElement('h1',{key: 'h1', style:{color: 'white'}},'Hello, Bibek!'));
const content = ReactDOM.createRoot(document.getElementById('root'));
// let List = React.createElement(
//         'div', {key :'listContainer'},
//         Array.from({length: 5}).map((_,i)=> React.createElement('li',{key:`${i}`},`Item ${i}`))
//     )

const rootDiv = React.createElement('div',{key: 'parent'},[element]);
content.render(rootDiv);