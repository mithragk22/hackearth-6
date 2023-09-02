import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Solution from './Solution';
import Explore from './Explore';
import Mailbox from './Mailbox';
import Quiz from './Quiz';
import { BrowserRouter , Routes, Route} from 'react-router-dom';


function App() {

 

  return (
    <div className="App">
     
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary"  style={{ background:"#5a287d"}}>
      <Nav>
      <Navbar.Brand style={{ color: 'white'}}>The Green Elements</Navbar.Brand>
            <Nav.Link href="/home" style={{ color: 'white'}}>Home</Nav.Link>
            <Nav.Link eventKey={2}  href="/explore" style={{ color: 'white'}}>
              Solution
            </Nav.Link>
            <Nav.Link eventKey={2}  href="/mailbox" style={{ color: 'white'}}>
              Mailbox
            </Nav.Link>
          </Nav>
          </Navbar>
          <div>
          <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/solution" element={<Solution />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/mailbox" element={<Mailbox />} />
        <Route path="/quiz" element={<Quiz />} />   
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
