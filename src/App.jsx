// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
// uncomment when nav is made
import Nav from './components/nav/Nav';
import FooterPage from './pages/FooterPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <FooterPage />
    </>
  );
}

export default App;
