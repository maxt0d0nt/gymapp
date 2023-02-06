import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises';
import { exercisesOptions, fetchData, youTubeOptions} from '../pages/utils/fetchData';

import { useParams } from 'react-router-dom';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exercisesOptions)
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`, youTubeOptions);
     setExerciseVideos(exerciseVideosData.contents)
     
    }
fetchExercisesData()
  }, [id])
  
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />

      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetails