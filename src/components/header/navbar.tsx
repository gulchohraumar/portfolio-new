
import './navbar.scss';

function Navbar() {
  return (
    <ul className='nav-bar d-flex align-items-center justify-content-center'>
        <li className='active'>Home</li>
        <li className=''>About </li>
        <li className=''>Portfolio</li>
        <li className=''>Skills</li>
        <li className=''>Contact</li>
    </ul>
  );
}

export default Navbar;
