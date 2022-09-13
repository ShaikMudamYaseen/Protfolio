import React from 'react'
import { AppBar,Button,Toolbar,useTheme,useMediaQuery } from '@mui/material'
// import { Box} from '@mui/system'
import '../App.css'
import DrawerComp from './DrawerComp'
const Navbar = ({match}) => {
  console.log(match);
  return (
    <>
    <AppBar position="fixed"  sx={{boxShadow:"0px 0px 0px",background:" linear-gradient(to right,black,#555555)"}} >
        <Toolbar>
          
          <h1 className='signature' style={{flexGrow:1}}>
            Yaseen
          </h1>
          {match? <DrawerComp/>:
          (<><Button color="inherit" sx={{marginRight:"1rem",}} >Home</Button>
          <Button color="inherit" sx={{marginRight:"1rem",}} >About me</Button>
          <Button color="inherit" sx={{marginRight:"1rem",}} >Resume</Button>

          <Button color='inherit' sx={{color:"#FDB827"}} variant='outlined' >Contact Me</Button>
          </>)}
          </Toolbar>
        
      
      </AppBar>
        
      
    </>
  )
}

export default Navbar
