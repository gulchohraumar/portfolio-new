
import { Link } from 'react-router-dom';
import './navbar.scss';
import logo from '../../assets/gu1.svg'

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
    <div className="row">
      <div className="col-md-1 d-flex align-items-center ps-4">
        <img src={logo} className='ms-4' alt="" style={{width: '60px'}}/>
      </div>

      <div className="col-md-11 p-0">
        <div className="pe-4 bg-white" style={{boxShadow: '0px 4px 20px 0px rgba(149, 149, 149, 0.15)'}}>
          <ul id='nav-bar' className='nav-bar d-flex align-items-center justify-content-center pe-5'>
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
