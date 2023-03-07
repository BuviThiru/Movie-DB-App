
import './App.css';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MovieDescription from './components/MovieDescription';


function App() {
  
  
  return( 
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path =  "/movies/:id" element = {<MovieDescription />} />
 
    </Routes>
    </BrowserRouter>
  )
  
}

export default App;
