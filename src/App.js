
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Nopage from "./Pages/Nopage";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import EmpRegister from './Pages/EmpRegister';
import Viewemployee from './Pages/Viewemployee';


function App() {
  return (
    <div className="App">

        <Routes>     
        <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/register" element={<EmpRegister/>} />
          <Route path="/reports" element={<Viewemployee/>} /> 
    <Route path="*" element={<Nopage />}/> 

      </Routes> 
      
    </div>
  );
}
export default App;


//        <Route path="/" element={<Login/>} />