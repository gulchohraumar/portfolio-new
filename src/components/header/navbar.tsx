
import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar() {

  const handleClickLink = (index: number) => {
    const navbar = document.getElementById('nav-bar');
    const navItems = navbar?.querySelectorAll('li');
    if (navItems) {
      for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
      }

      navItems[index].classList.add('active')
    }
  }

  return (
    <ul id='nav-bar' className='nav-bar d-flex align-items-center justify-content-center'>
      <li className='active' onClick={() => handleClickLink(0)}>
        <a href='#home'>Home</a>
      </li>

      <li className='' onClick={() => handleClickLink(1)}>
        <a href='#about'>About</a>
      </li>

      <li className='' onClick={() => handleClickLink(2)}>
        <a href='#portfolio'>Portfolio</a>
      </li>

      <li className='' onClick={() => handleClickLink(3)}>
        <a href='#skills' >Skills</a>
      </li>

      <li className='' onClick={() => handleClickLink(4)}>
        <a href='#experience' >Experience</a>
      </li>

      <li className='' onClick={() => handleClickLink(5)}>
        <a href='#contact'>Contact</a>
      </li>
    </ul>
  );
}

export default Navbar;
