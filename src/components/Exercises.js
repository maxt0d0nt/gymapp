import { Typography, Stack, Box } from '@mui/material';
import React from 'react';
import { exercisesOptions, fetchData } from '../pages/utils/fetchData';
import ExerciseCard from './ExerciseCard';

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
<Stack >
  { exercises.map((exercises, index) => (
    <ExerciseCard key={index} exercises={exercises} />
  ))}
</Stack>
    </Box>
  )
  

}


export default Exercises