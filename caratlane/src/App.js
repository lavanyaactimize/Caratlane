import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flashpage from './Pages/Flashpage';
import Signup from './Pages/Signup';


function App() {
  return (
    <>

<Router>
       <Routes>
          <Route path="/" element={ <Flashpage/>} />
         <Route path="/signup" element={  <Signup/>} />
      
         </Routes>
     </Router>
   
  
    </>
  );
}

export default App;
