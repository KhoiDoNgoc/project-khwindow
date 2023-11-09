//import logo from './logo.svg';
//import './App.css';

import ColorBox from './index.js'

//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //NGOC KHOI          
        ////</p>
        //<h2>Heloo React JS</h2>
      //</header>
    //</div>
  //);
//}

//export default App;


export function App() {
  return (
    <select>
      <ColorBox color="red"></ColorBox>
      <ColorBox color="blue"></ColorBox>
      <ColorBox color="green"></ColorBox>
    </select>
  );
}