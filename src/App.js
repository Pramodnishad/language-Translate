import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import ShowCalendar from './pages/ShowCalendar';
import Navbar from './component/Navbar';


function App() {
  return (
    <div className="App">
       <BrowserRouter>

       <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/calendar' element={<ShowCalendar />}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}
 
export default App;
