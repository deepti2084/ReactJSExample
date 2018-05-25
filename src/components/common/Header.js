import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div><Link to='/'>Home</Link></div>
    <div><Link to='/addContact'>AddContact</Link></div>
    <div><Link to='/listContact'>ListContact</Link></div>
  </header>
)

export default Header
