import React, { useEffect, useState } from 'react'
import "./SearchExercises.css"
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOption, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([])


  useEffect(()=>{
    const fetExercisesDate = async () =>{
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption);
      
      setBodyParts(['all', ...bodyPartData]);
    }

    fetExercisesDate();
  },[])


  const handleSearch = async () =>{
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack className='Container'>
      <Typography className='Container-heading' fontWeight='600' mb='50px' sx={{fontSize: {lg:'50px', xs:'30px'}}}>
        Awesome Exercises You <br/> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
      <TextField 
      sx={{
        input: {
          fontWeight: '700',
          border:'none',
          borderRadius:'4px'
        },
        width:{lg:'900px', xs: '300px'}
      }}
      height="76px"
      value={search}
      onChange={(e)=>setSearch(e.target.value.toLowerCase())}
      className='Search-text-field'
      placeholder='Search Exercises '
      type='text'
      />
      <Button className='search-btn'
      sx={{
        bgcolor:'#ff2625',
        color:'#fff',
        textTransform:'none',
        width:{ lg: '150px', xs:'80px'},
        fontSize:{ lg: '20px', xs:'14px'},
        height:'56px',
        marginLeft:'5px'
      }}
      onClick={handleSearch}
      >
        Search
      </Button>
      </Box>
      <Box sx={{position: 'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollBar data={bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises
