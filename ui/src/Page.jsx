import React from 'react';

import Contents from './Contents.jsx';




function NavBar() {
  return (
    <nav className="nav-a">
      
      <li className='nav-li'><a><img src={'./cupcake.png'} alt="" /></a></li>
      <li className='nav-li'><a href="/#/homepage"  className="navselect">Homepage</a></li>
      <li className='nav-li'><a href="/#/issues" className="navselect">Admin Page</a></li>
      
    </nav>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Contents />
    </div>
  );
}
 