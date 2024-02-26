import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import {useNavigate} from "react-router";
import {StyledButton} from "./styled";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld name={'World'} backgroundColor={'orange'} />
        <StyledButton onClick={() => navigate('/hello')}>
          Go to Hello World
        </StyledButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
