import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import ATC from './pages/ATC';
import HRA from './pages/HRA';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ATC />} />
        <Route path='/house-rent-allowance-calculator' element={<HRA />} />
      </Routes>
    </div>
  );
}

export default App;
