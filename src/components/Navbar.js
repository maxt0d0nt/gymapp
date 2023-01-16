import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img src={Logo} alt="logo gym"
          style={{
            width: '48px',
            height: '48px',
            margin: '0 20px'
          }} />
      </Link>
      <Stack>
        <Link to="/" style={{ textDecoration: 'none', color: '#ff2625'}} > HOME </Link>
        <a href='#exercises' style={{
          testDecoration: 'none', color: '#3a1212'
        }}>EXERCISES</a>
      </Stack>
    </Stack>
  )
}

export default Navbar