import './App.css'
import InputBox from './Components/InputBox';

function App() {
  return (
    <>
      <div className="container my-5">
        <div className="d-flex align-items-center justify-content-center">

          {/* Our input box component  */}
          <InputBox />
          
        </div>
      </div>
    </>
  );
}

export default App;
