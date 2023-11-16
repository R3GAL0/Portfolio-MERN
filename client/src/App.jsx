// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
// uncomment when nav is made
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
