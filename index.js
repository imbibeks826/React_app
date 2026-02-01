
const element = React.createElement('h1',{},'Hello, world!');
const content = ReactDOM.createRoot(document.getElementById('root'));
let List = React.createElement(
        'div', {},
        Array.from({length: 5}).map((_,i)=> React.createElement('li',{key:i},`Item ${i}`))
    )

const rootDiv = React.createElement('div',{},[element, List]);
content.render(rootDiv);