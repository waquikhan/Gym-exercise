import React from 'react'
import { Box, Stack, Typography, Pagination } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, bodyPart, setExercises }) => {

  console.log(exercises)
  return (
    <Box id='exercises'
    sx={{mt: {lg: '110px'}}}
    mt='50px'
    p='20px'
    >
      <Typography variant='h3' mb='46px'> Showing Result</Typography>
      <Stack display='flex' flexDirection='row' gap='30px'>
        {
          exercises.map((exercise, index) =>(
            <ExerciseCard key={index} exercise={exercise} />
          ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
            {
              exercises.length > 1 && (
                <Pagination 
                  color='standard'
                  shape='circle'
                  defaultPage={1}
                  count={Math.ceil(exercises.length / 1)}
                  // page={currentPage}
                  // onChange={paginate}
                  size='large'
                />
              )
            }
      </Stack>
    </Box>
  )
}

export default Exercises
