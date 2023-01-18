import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
    direction="row"
    jsutifyContent="space-around" 
    sx={{ gap: {
      sm: '122px', xs: '40px'},  mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px='20px'
    >
      <Link to="/">
        <img src={Logo} alt="logo gym"
          style={{
            width: '48px',
            height: '48px',
            margin: '0 20px'
          }} />
      </Link>
      <Stack
      direction="row"
      gap="48px"
      fontSize="14px"
      alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#ff2625'}} > HOME </Link>
        <a href='#exercises' style={{
          testDecoration: 'none', color: '#3a1212'
        }}>EXERCISES</a>
      </Stack>
    </Stack>
  )
}

export default Navbar