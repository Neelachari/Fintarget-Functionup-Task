import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CandlestickChart from './Components/CandlestickChart';
import { WebSocketDemo } from './Components/WebSocketDemo';
import ApexCharts from './Components/ApexCharts';


function App() {
  return (
    
    <div className="App">
    <Navbar/>
    {/* <CandlestickChart/> */}
    <ApexCharts/>
    <WebSocketDemo/>
    
    </div>
    
  );
}

export default App;
