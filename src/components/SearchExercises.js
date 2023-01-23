import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exercisesOptions, fetchData } from '../pages/utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = () => {

  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fecthExerciesData = async () => {
      const bodyPartsData = await fetchData('https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=pectoralis%20major', exercisesOptions);

      setBodyParts(['all', ...bodyPartsData])
    }
    fecthExerciesData();
  }, []
  )

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=pectoralis%20major', exercisesOptions);

      const searchedExercises = exercisesData.filter(
        (exercises) => exercises.Name.toLowerCase().includes(search)
          || exercises.Type.toLowerCase().includes(search)
          || exercises.Force.toLowerCase().includes(search)
      )

      setSearch('');
      setExercises(searchedExercises)


    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }} mb="50px" textAlign="center" >
        Awesome Exercises you <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundcolor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          type="text"
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{
        position: 'relative', width: '100%', p: '20px'
      }}>
        <HorizontalScrollbar data={bodyParts} />
      </Box>

    </Stack>
  )
}

export default SearchExercises