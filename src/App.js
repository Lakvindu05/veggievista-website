import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import Features from './Components/Features';
import Download from './Components/Download';
import Team from './Components/Team';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container/>
      <Features />
      <Team />
      <Download/>
    </div>
  );
}

export default App;
