import { Stack, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import LargeButton from "../Components/UI/LargeButton";
import imglink from "../assets/Group.png";
import CheckIcon from '@mui/icons-material/Check';



const ImageContainer = styled(Box)(({ theme }) => ({
    width: "260px",
    height: "100px",
    textAlign:'center',
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
  

const PlanDetails = () => {
    return (
        <Container
        maxWidth='xs'
        sx={{ height: "90vh", boxSizing: "border-box", paddingTop: "5rem" , backgroundColor:'rgba(7, 9, 17, 0.7)', marginBottom:'3rem'  }}
      >
        <Stack justifyContent="center" alignItems="center" gap={5} >
          <ImageContainer>
            <img src={imglink} alt="devices" />
          </ImageContainer>
          <TextContainer
            Variant="section"
            sx={{ textAlign: "center", width: "350px" }}
          >
  
            <Typography Variant="p" sx={{ fontSize: "2rem", fontWeight: "bold" ,  color:'#FFFFFF' }}>
              Choose your plan
            </Typography>
            <Stack justifyContent='space-around' sx={{ width:'400px' , color:'#FFFFFF' , paddingLeft:'2rem' , marginTop:'2rem' }} alignItems='flex-start' gap={2} >
                <Stack direction='row' justifyContent='space-evenly' gap={1} >
                <CheckIcon sx={{ color:'#12C6B2' }}/>
                <Typography variant='p' >Watch all you want.Ad-free.</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-around' gap={1} >
                <CheckIcon sx={{ color:'#12C6B2' , }} />
                <Typography>Recommendations just for you.</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-around' gap={1} >
                <CheckIcon sx={{ color:'#12C6B2' }} />
                <Typography >Change or cancel your plan anytime.</Typography>
                    </Stack>
            </Stack>
          </TextContainer>
  
          <LargeButton link="/Chooseplan" text="Next" />
        </Stack>
      </Container>
  
    );
};

export default PlanDetails;