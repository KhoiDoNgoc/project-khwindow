//import logo from './logo.svg';
//import './App.css';

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

function ColorBox(prop){
  const { color } = prop;
  return (
     <div className="box" style={{backgroundColor:color}}></div>
  )
}

export default ColorBox;
