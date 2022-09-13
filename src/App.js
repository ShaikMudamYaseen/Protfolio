import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

import './App.css';
import AboutMe from './components/AboutMe';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import Home from './components/Home';


function App() {
  const theme=new useTheme()
  const match=useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <>
    <div style={match?{backgroundColor:"black",marginTop:"0rem"}:{background:" black",marginTop:"0rem"}}>
    <Home match={match}/>
    {match?
    <></>:(<div style={{display:"flex",justifyContent:"center",marginTop:"2rem",alignItems:"center"}}>
    <MouseOutlinedIcon sx={{color:"#FDB827",fontSize:"1.8rem",marginRight:"0.5rem"}}/>
    <p style={{color:"white"}}>Scroll Up</p>
    </div>)}
    </div>
    <AboutMe match={match}/>
    </> 
  );
}

export default App;
