import { Typography, Stack, Box, Pagination } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { exercisesOptions, fetchData } from '../pages/utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPAge = 9;

  const indexLastExercise = currentPage * exercisesPerPAge;
  const indexOfFirtExercise = indexLastExercise - exercisesPerPAge;
  const currentExercise = exercises.slice (indexOfFirtExercise. indexLastExercise)
  
  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: ' smooth'})
  }

useEffect(()  => {
  const fetchExercisesData = async () => {
    let exercisesData = [];

    if(bodyPart === 'all') {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
    } else { 
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions);
    }
    setExercises(exercisesData)
  }
  fetchExercisesData()
},[bodyPart])

  return (
    <Box id="exercises"
    sx={{mt: { lg: '110px'}}}
    mt="50px"
    p="20px"
    >
<Typography variant='h3' mb="46px">
  Resultados
</Typography>
<Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center">
  { currentExercise.map((exercises, index) => (
    <ExerciseCard key={index} exercises={exercises} />
  ))}
</Stack>
<Stack mt='100px' alignItems='center'>
  {exercises.length > 6 && (
    <Pagination
    color='standard'
    shape='circular'
    defaultPage={1}
    count={Math.ceil(exercises.length / exercisesPerPAge)}
    page={currentPage}
    onChange={paginate}
    size='large'
    />
  )}
</Stack>

    </Box>
  )
  

}


export default Exercises