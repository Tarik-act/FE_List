import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // const [showSlide,setShowSlide] = useState(false);

  // const active (e)=>{
  //   e.target.classList.a
  // }

  return (
    <div>
      <nav className='navbar'>
        <div className='logo'>FE Task</div>
        <div className='cta'>
          <ul>
            <li>
              <NavLink
                to={'/info'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Info
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                task
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// <div className='cta'>
// <ul>
// <NavLink
// to='/info' className={({isActive})=> isActive?'active':''}>info</NavLink>
// </ul>
// <div className='cta'>
//   <ul>
//     <NavLink
//       to='/info' className={}></NavLink>
//     </ul>
//     <div>
