import { Grid } from "@mui/material";
import React from "react";
import aboutImg from "../asserts/about.jpeg";

const AboutMe = ({match}) => {
  return (
    <>
    <Grid
      container
      style={match?{backgroundColor: "black",}:{
        backgroundColor: "black",
        height:"100vh"
        
      }}
    >
      <Grid item xs={12} md={12} >
      {/* <p
        style={{
          
          marginLeft: "3rem",
          color: "whitesmoke",
          fontSize: "3rem",
          fontFamily: "monospace",
          padding: "3rem"
        }}
      >
        About Me
      </p> */}
      </Grid>
      <Grid item xs={12} md={5} sx={{textAlign:"center",alignSelf:"center"}}>
        <img src={aboutImg} width="190rem" height="250rem" style={match?{boxShadow:"0px 0px 20px #CDC7D5",border:"2px solid white",borderRadius:"20px"}: {boxShadow:"20px 20px 18px #555555",borderRadius:"10px"}}/>
      </Grid>
      <Grid item xs={12} md={6}sx={{alignSelf:"center"}}>
      <p
        style={{
          
          marginLeft: "3rem",
          color: "whitesmoke",
          fontSize: "2.5rem",
          fontFamily: "monospace",
          // padding: "3rem"
        }}
      >
        About Me
      </p>
        <p
          style={{
            color: "whitesmoke",
            fontFamily: "monospace",
            lineHeight: "2.2rem",
            fontSize: "1rem",
            padding:"3.7rem",
            textAlign: "justify",
          }}
        >
          Hey! I'm Shaik Mudam Yaseen, and I'm 21. Since I was young, I have
          grown to love computers and have spent a lot of time around them. I'm
          a full stack developer in the MERN stack. <br></br>
          <br></br>I practice clear structure, solid reasoning, and excellent
          coding practises. Additionally, I have high learning skills, am fast
          to pick up new techniques, and am capable of proactively identifying
          and resolving issues. I enjoy investigating and learning about new
          technology.
        </p>
      </Grid>
    </Grid>
    </>
    
  );
};

export default AboutMe;
