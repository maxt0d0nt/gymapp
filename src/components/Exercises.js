import { Typography, Stack, Box } from '@mui/material';
import React from 'react';
import { exercisesOptions, fetchData } from '../pages/utils/fetchData';


const Exercises = ({ exercises, setExercises, bodyPart}) => {
  return (
    <Box id="exercises"
    sx={{mt: { lg: '110px'}}}
    mt="50px"
    p="20px"
    >
<Typography variant='h3' mb="46px">
  Resultados
</Typography>
<Stack direction="row" sx={{ gap: { lg: '110pdx', xs: '50px'}}}
flexWrap="wrap" justifyContent="center">
  { exercises.map((exercises, index) => (
    <p>{exercises.Name}</p>
  ))}
</Stack>
    </Box>
  )
}

export default Exercises