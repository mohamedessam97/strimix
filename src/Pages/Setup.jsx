import { Stack, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import LargeButton from "../Components/UI/LargeButton";
import imglink from "../assets/devices.png";
import bg from '../assets/2022.png';


const ImageContainer = styled(Box)(({ theme }) => ({
  width: "260px",
  height: "100px",

  "& img": {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  width: "300px",
  "& p": {
    marginBottom: "0.3rem",
    textAlign: "center",
  },
}));

const Setup = () => {
  return (
    <Box sx={{ backgroundImage:`url(${bg})` , backgroundSize:'cover' , paddingTop:'3rem' ,  paddingBottom:'3rem'}}>

    <Container
      maxWidth='xs'
      sx={{ height: "90vh", boxSizing: "border-box", paddingTop: "3rem" , backgroundColor:'rgba(7, 9, 17, 0.7)', marginBottom:'3rem' , paddingBottom:'2rem'  }}
    >
      <Typography Variant="p" component='div' sx={{ fontSize: "1rem" , color:'#FFFFFF' , textAlign:'center' , paddingBottom: "3rem" }}>STEP 1 OF 3</Typography>
      <Stack justifyContent="center" alignItems="center" gap={2} >
        <ImageContainer>
          <img src={imglink} alt="devices" />
        </ImageContainer>
        <TextContainer
          Variant="section"
          sx={{ textAlign: "center", width: "350px" }}
        >

          <Typography Variant="p" sx={{ fontSize: "2rem", fontWeight: "bold" ,  color:'#FFFFFF' }}>
            Finish setting up your account
          </Typography>
          <Typography
            Variant="p"
            sx={{
              fontSize: "1.2rem",
              textAlign:'center',
              color:'rgb(255 255 255 / 73%)',
              lineHeight:"41px",}}>
            STRIMIX is personalized for you. Create a password to watch on any
            device<br/> at any time.
          </Typography>
        </TextContainer>

        <LargeButton link="/register" text="Next" />
      </Stack>
    </Container>
              </Box>
  );
};

export default Setup;
