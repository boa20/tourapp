import './App.css';
import Navbar from './components/navbar'
import Home from './pages/Home';
import BookForm from './components/bookform';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AddTourForm from './components/addtourform';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/dashboard' element={<Dashboard/>} />
          <Route exact path='/book-tour' element={<BookForm/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/addtourform' element={<AddTourForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
