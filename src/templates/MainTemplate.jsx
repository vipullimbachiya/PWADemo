import React from 'react';
import PropTypes from 'prop-types';
import { Offline } from 'react-detect-offline';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../assets/icons/icon-72x72.png';

const MainTemplate = ({ children }) => (
  <div className="main-template">
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="PWA Demo App"
        /> PWA Demo App
      </Navbar.Brand>
      <div className="offline text-center">
        <Offline>You are offline</Offline>
      </div>
    </Navbar>
    <main>
      {children}
    </main>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
