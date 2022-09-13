import { Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import mainPhoto from '../asserts/webPhoto.png'
import Typed from 'react-typed'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import doc from '../asserts/dc.xlsx'
const Home = ({match}) => {
  const mobile={
  height: "20rem",
  width: "17rem",
  flexWrap: "wrap",
  boxSizing: "border-box"
}
  const laptop={
    // maxHeight:"25rem",
              // maxWidth:"25rem",
              height: "35rem",
              width: "27rem",
              flexWrap: "wrap",
              boxSizing: "border-box"
  }
  return (
    <>
    <div >
   <Navbar match={match}/>
   <div style={{marginTop:"6rem",marginLeft:"1rem"}}>
    <Grid container spacing={2} sx={{background:" linear-gradient(to right,black,#555555)",boxShadow:"0px 5px 35px #282C2C",borderRadius:"0px 0px 30px 30px"}} >
        <Grid item xs={12} md={7} sx={{alignSelf:'center',textAlign:"center"}}>
          <h1 style={{color:"white",textAlign:"center"}}>Hello everyone! I'm <span style={{fontWeight:'bold',color:"cyan"}}>Shaik Mudam Yaseen</span>, </h1>
         <p style={{color:'white',fontSize:"1.5rem"}}>I'm a <span style={{color:'#FDB827',fontWeight:'bold',fontFamily:"monospace",textAlign:"left"}}><Typed loop strings={["Full Stack Developer","Ethusiastic Dev","MERN Stack Developer","QA Engineer"]} typeSpeed={120} backSpeed={70}/></span></p>
         {/* <Typography sx={{color:"#AAAAAA"}} variant='p'>Software always remain softly for End users! But sometimes hardly to developers!</Typography> */}
         
         
         <div style={{marginTop:"3rem"}}>
          
         <a href={doc} download="Yaseen_Resume" style={{textDecoration:"none",color:"inherit"}}><Button color="inherit" variant='contained' sx={{marginRight:"2rem"}}>Download CV</Button></a>
         <Button color="inherit" variant='outlined' sx={{color:"#EEEEEE"}}>About Me</Button>

         </div>
        </Grid>
        
        <Grid item xs={10} md={3} sx={{alignSelf:'center',textAlign:"center"}}>
          
           <img src={mainPhoto} alt="main" style={match?mobile:laptop
            
            }/>
           
        </Grid>
        <Grid item xs={2} md={2} sx={{alignSelf:'center',textAlign:"center"}}>
        <div style={{display:'flex',color:"white",flexDirection:"column",justifyItems:"center"}}>
        <a href='https://www.facebook.com/yaseen.rock.501' target="_blank" style={{textDecoration:"none",color:"inherit"}}><FacebookIcon sx={{marginBottom:"1rem",alignSelf:'center',marginRight:"1rem"}}/></a>
         <a href='https://www.instagram.com/yaseen_spark/' target="_blank" style={{textDecoration:"none",color:"inherit"}}><InstagramIcon sx={{marginBottom:"1rem",alignSelf:'center',marginRight:"1rem"}}/></a>
         <a href="mailto:mudmyaseen@gmail.com" target="_blank" style={{textDecoration:"none",color:"inherit"}}><MailIcon sx={{marginBottom:"1rem",alignSelf:'center',marginRight:"1rem"}}/></a>
         <a href='https://www.linkedin.com/in/yaseenshaikmudam/' target="_blank" style={{textDecoration:"none",color:"inherit"}}><LinkedInIcon sx={{marginBottom:"1rem",alignSelf:'center',marginRight:"1rem"}}/></a>
         <a href='https://github.com/ShaikMudamYaseen' target="_blank" style={{textDecoration:"none",color:"inherit"}}><GitHubIcon sx={{marginBottom:"1rem",alignSelf:'center',marginRight:"1rem"}}/></a>
         </div>
         </Grid>
    </Grid>
   </div>
   </div>
    </>
  )
}

export default Home