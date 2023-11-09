//import logo from './logo.svg';
import './App.css';

function App() {
  const fullname = 'DO NGOC KHOI';
  const email = 'khoidng13@gmail.com';
  const phone = '0906478889';
  const age = 40;

  const isMale = true;

  const school = {
    schoolname:'Softech-Apptech',
    address:'Quang Trung'
  };

  const jods = ['Lập trình viên','React JS, HTML, CSS','PS, Figma'];
  const listColor = ['red','blue','green'];
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>Họ và tên: {fullname}</p>
        <h2>Email: {email}</h2>
        <h3>Số điện thoại: {phone}</h3>
        <h4>Tuổi: {age}</h4>

        {
          isMale && 
          <>
            <h5>Nam</h5>
            <h1>3</h1>
            <h2>6</h2>
            <h3>9</h3>
          </>
        }
        {!isMale && <h5>Nữ</h5>}

        <h2>{school.schoolname}</h2>
        <h6>{school.address}</h6>

        <ul>
          {jods.map(skills => (
            <li style={{color:"yellow"}}>{skills}</li>
          ))}
        </ul>

        <section>
          {listColor.map(colorItem => (
              <ul>
                <li style={{color:colorItem}}>{colorItem}</li>
              </ul>
            ))}
        </section>


      </header>
    </div>
  );
}

export default App;
