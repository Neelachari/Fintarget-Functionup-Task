import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { WebSocketDemo } from './Components/WebSocketDemo';
import ApexCharts from './Components/ApexCharts';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <ApexCharts/>
    <WebSocketDemo/>
    </div>
    
  );
}

export default App;
