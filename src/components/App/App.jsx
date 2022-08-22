import logo from './../../logo.svg';
import './../../components/App/App.css';
import Navbar from  '../Navbar/Navbar';
import Home from  '../Home/Home';
import Movies from  '../Movies/Movies';
import TvShow from  '../TvShows/TvShows';
import Pepole from  '../Pepole/Pepole';
import Login from  '../Login/Login';
import Register from  '../Register/Register';
import NotFound from  '../NotFound/NotFound';
import {Routes , Route} from 'react-router-dom';

function App() {
  return (  
     <>
    <Navbar />  
        <div className='container'>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/Movies' element={<Movies />} />
      <Route path='/TvShow' element={<TvShow />} />
      <Route path='/Pepole' element={<Pepole />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
      
</Routes>
  </div>

</>
  );
}

export default App;
