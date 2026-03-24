import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Nvabar/Navbar";
import { BrowserRouter } from "react-router";
import Router from "./src/routes/Router";

// const element = React.createElement('div',{key: 'header', style:{display:'flex', flex:1, height: '100vh', backgroundColor:'black', justifyContent:'center', alignItems:'center'}},React.createElement('h1',{key: 'h1', style:{color: 'white'}},'Hello, Bibek!'));
// let List = React.createElement(
//         'div', {key :'listContainer'},
//         Array.from({length: 5}).map((_,i)=> React.createElement('li',{key:`${i}`},`Item ${i}`))
//     )
// const rootDiv = React.createElement('div',{key: 'parent'},[element]);
// const element = (
//     <div style={{ display: 'flex', margin: 0, padding: 0, flex: 1, height: '100vh', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
//         <h1 style={{ color: 'white' }}>Hello, Bibek!</h1>
//     </div>
// )

// export const ElementComponent = () => {
//   return (
//     <>
//       <Navbar />
//       <div
//         style={{
//           display: "flex",
//           flex: 1,
//           height: "100vh",
//           backgroundColor: "black",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <h1 style={{ color: "white" }}>Hello, Bibek!</h1>
//       </div>
//     </>
//   );
// };

const content = ReactDOM.createRoot(document.getElementById("root"));
content.render(
  <div style={{backgroundColor: "#F3F4F6", padding: "20px"}}>
  <BrowserRouter>
    <Navbar />
    <Router />
  </BrowserRouter>
  </div>
);
// content.render(element);
