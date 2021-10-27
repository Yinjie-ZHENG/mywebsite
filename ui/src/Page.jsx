import React from 'react';

import Contents from './Contents.jsx';

function NavBar() {
  return (
    <nav>
      <a href="/#/homepage">Homepage</a>
      {' | '}
      <a href="/#/issues">Admin Page</a>
      {' | '}
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
