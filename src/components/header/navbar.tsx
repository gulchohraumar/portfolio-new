
import './navbar.scss';

function Navbar() {
  return (
    <ul className='nav-bar d-flex align-items-center justify-content-center'>
        <li className='active'>Home</li>
        <li className=''>Skills</li>
        <li className=''>Experience</li>
        <li className=''>Projects</li>
        <li className=''>Contact</li>
    </ul>
  );
}

export default Navbar;
