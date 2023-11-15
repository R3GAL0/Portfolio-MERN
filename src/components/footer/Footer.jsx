// taking the same logic from the header nav for the footer
// keys are given '1x' value to separate them

// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from '../nav/Navbar';

export default function Footer() {
  // The Navbar component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={11} className="nav-link text-light" to="https://github.com/R3GAL0">
          Github
        </Link>,
        <Link key={12} className="nav-link text-light" to="https://www.linkedin.com/in/max-walent-32b94216a/">
          LinkedIn
        </Link>,
        <Link key={13} className="nav-link text-light" to="#">
          Stack Overflow
        </Link>,
      ]}
    />
  );
}

