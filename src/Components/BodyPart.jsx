import React from 'react'
import Icon from "../assets/icons/gym.png";
import { Stack, Typography } from '@mui/material';
import "./BodyPart.css"

const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  return (
    <Stack className='bodyPart' type="button" 
    sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' :' ',
        backgroundColor:'#fff',
        borderBottomLeftRadius:'20px',
        width:'270px',
        height:'280px',
        cursor:'pointer',
        gap:'47px'}}
        
        onClick={()=>{
            setBodyPart(item);
            window.scroll({top:1800 , left:100 , behavior:'smooth'})
        }}
        >
      <img src={Icon} alt="dumbbell" style={{width:'40px', height:'40px'}} />
      <Typography className='bodyPart-text' fontWeight="bold" fontSize="24px">{item}</Typography>
      
    </Stack>
  )
}

export default BodyPart
