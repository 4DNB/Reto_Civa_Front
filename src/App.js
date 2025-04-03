import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ViewBus from './bus/ViewBus';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/ViewBus/:id" element={<ViewBus/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
