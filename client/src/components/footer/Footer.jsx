// taking the same logic from the header nav for the footer
// keys are given 'fx' value to separate them

// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from '../nav/Navbar';

export default function Footer() {
  // The Navbar component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={'f1'} className="nav-link text-light" to="https://github.com/R3GAL0">
          Github
        </Link>,
        <Link key={'f2'} className="nav-link text-light" to="https://www.linkedin.com/in/max-walent-32b94216a/">
          LinkedIn
        </Link>,
        <Link key={'f3'} className="nav-link text-light" to="https://stackoverflow.com/users/22923477/r3gal">
          Stack Overflow
        </Link>,
      ]}
    />
  );
}

