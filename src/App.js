import './App.css';
import Navbar from './components/navbar'
import Home from './pages/Home';
import bookForm from './components/bookform';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/> 
      <bookForm/>
      <Dashboard/>
    </div>
  );
}

export default App;
