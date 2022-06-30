import { Box, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ImageLink from "../assets/images.png";
import backgroundimage from '../assets/Rectangle.png';
const Images = styled("img")({
  maxWidth: "100%",
  width: "90%",
  height: "90%",
  objectFit:'scale-down'
});

const CompatableSection = () => {
  return (
    <Box  component='div'  sx={{ fontFamily:'poppins' ,  color: "white", height: "100vh"  , maxwidth:'100%' , backgroundImage: 'linear-gradient(to left,rgba(10, 13, 24, 0.9) 40.88%,rgba(10, 13, 24, 0.6) 84.09%, rgba(10, 13, 24, 0.8) 99.57%)'  }}>
    <Stack direction='row' justifyContent="space-around" alignItems='center' flexWrap='wrap' sx={{width:'100%' , height:'100%' }} >
        {/* left side */}
    <Box component='div' sx={{ width:{xl:"50%" , lg:'50%' , md:'50%' , sm:'100%' , xs:'100%'} , height:{xl:"80%" , lg:'80%' , md:'80%' , sm:'50%' , xs:'50%'} , position:'relative' }}>
        {/* Stack of the right side */}
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
            {/* div which has a black background */}
    <Box
            component="div"
            sx={{
              backgroundColor: "black",
              border: "0.8px solid #12C6B2",
              height: { lg: "250px", md: "250px" , sm:'200px' ,  xs:'200px' },
              width: { lg: "350px", md: "350px" , sm:'200px' , xs:'200px' },
              padding: { lg: "1rem", md: "1rem" },
              position:'absolute',
              zIndex:'2',
              right:'0%',
              bottom:'35%'
            }}
          >
            <Images src={ImageLink} alt="devices"  />
          </Box>

          <Box
            component="div"
            sx={{
              backgroundColor: "black",
              border: "0.8px solid #12C6B2",
              height: { lg: "50%", md: "50%" ,sm:'200px' , xs:'200px'  },
              width: { lg: "550px", md: "550px" , sm:'200px' , xs:'200px' },
              padding: { lg: "1rem", md: "1rem" },
              position:'absolute',
                
              top:'18%',
              zIndex:'0',
              backgroundImage:`url(${backgroundimage})`,
              backgroundRepeat:'no-repeat',
              boxShadow:'inset 141px 94px 28px 0px rgb(10 13 24 / 60%), inset -83px -127px 36px 81px rgb(10 13 24 / 60%);',
              
            }}
          >

          </Box>
          </Stack>
    </Box>
    {/* right side */}
    <Box component='div' sx={{  width:{xl:"50%" , lg:'50%' , md:'50%' , sm:'100%' , xs:'100%'} , height:'auto'  }}>
        {/* text stack */}
        <Stack justifyContent='center' alignItems='center'  sx={{width:'100%' , height:"100%"}} >
        <Typography component='p' textAlign='start' color='white' fontSize='1rem'>Compatible devices</Typography>
        
        <Stack direction='row' justifyContent='space-between' alignItems='flex-start' gap={2}>
        <Typography component='p' color='white'  textAlign='start' fontSize='2rem' fontWeight='bold' >Watch</Typography>
        <Typography component='p' color='white'  textAlign='start' fontSize='2rem'  > everywhere.</Typography>  
        </Stack>
        <Typography component='p' color='white'  textAlign='start' fontSize='1rem'>Stream unlimited movies and TV shows<br /> on your phone, tablet, laptop, and TV<br /> without paying more.</Typography>
        </Stack>
    </Box>
    </Stack>
</Box>
  );
};

export default CompatableSection;


