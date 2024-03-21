import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flashpage from './Pages/Flashpage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Products from './Pages/Products';


function App() {
  return (
    <>

<Router>
       <Routes>
          <Route path="/" element={ <Flashpage/>} />
         <Route path="/signup" element={  <Signup/>} />
         <Route path="/login" element={  <Login/>} />
         <Route path="/products" element={  <Products/>} />
      
         </Routes>
     </Router>
   
  
    </>
  );
}

export default App;
