import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from "../assets/icons/gym.png";


const SecondaryMuscles = ({ item, setBodyPart, bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justyfyContent="center"
    className="bodyPart-card"
    sx={{
        borderTop: SecondaryMuscles === item ? '4px solid #ff2625' : '',
            backgroundColor: '#ff0',
            borderBottomLeftRadius: '20px',
            width: '250px',
            height: '150px',
            cursor: 'pointer',
            gap: '47px',
           
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth'})
        }}
    >
        <img src={Icon}
        alt="dumbbell"
        style={{ width:'40px', height: '40px'}}
        />
        <Typography fontSize="24px" fontWeight="bold" color='#3A1212' textTransform="capitalize">{item.SecondaryMuscles}</Typography>
    </Stack>
  )
}

export default SecondaryMuscles