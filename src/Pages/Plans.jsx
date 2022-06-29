import { Box, Container } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import LargeButton from "../Components/UI/LargeButton";

const Plans = () => {
  return (
    <Container
    maxWidth="sm"
    sx={{ height: "80vh", boxSizing: "border-box", paddingTop: "6rem" }}
  >
  
      <Stack justifyContent="space-around" alignItems="center" gap={2}>
        <Box sx={{ width: "auto", height: "auto" }}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png"
            alt="checked"
            height="50px"
            width="50px"
          />
        </Box>

        <Typography Variant="p" sx={{ fontSize: "0.9rem" }}>STEP 2 OF 3</Typography>
        <Typography Variant="p" sx={{ fontSize: "2rem", fontWeight: "bolder" }}>Choose your plan.</Typography>
     
            <Stack justifyContent='space-around' sx={{ width:'400px'}} alignItems='center' gap={3} >
                <Stack direction='row' justifyContent='space-evenly' gap={1} >
                <CheckIcon sx={{ color:'red' }}/>
                <Typography sx={{width:'220px' , fontWeight:'bold'}}>No commitments, cancel,<br/>anytime.</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-around' gap={1} >
                <CheckIcon sx={{ color:'red' , }} />
                <Typography sx={{fontWeight:'bold'}}>Everything on Netflix for one<br/>low price.</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-around' gap={1} >
                <CheckIcon sx={{ color:'red' }} />
                <Typography  sx={{fontWeight:'bold'}}>Unlimited viewing on all your<br/>devices.</Typography>
                    </Stack>
            </Stack>

            <Box sx={{marginTop:'2rem'}}>
            <LargeButton link='/' text='Next'  />
            </Box>
            
      </Stack>
    </Container>
  );
};

export default Plans;
