import { Box, Stack, Typography } from '@mui/material';
import moana from '../assets/moana.png';
import pixlar from '../assets/pixlar.png';
import rectangle from '../assets/kids.png';
import babyboss from '../assets/bossbaby.png';
import cover from '../assets/2.png';



const KidsSection = () => {
    return (
        <Box  sx={{ color:'white' ,  height:'100vh' , width:'100%' }}>
            {/* main Stack container */}

            <Stack direction='row'  justifyContent='space-evenly' alignItems='center' sx={{width:'100%' , height:'100%'}} flexWrap='wrap'>
            {/* left box */}
            <Box >
            <Stack direction='row' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%' }}>
            <Box sx={{backgroundImage:`url(${rectangle})` , width:'240px' , height:'440px' , backgroundRepeat:'no-repeat' , backgroundSize:'contain' , borderRadius:'15px' , border:'1.6px solid rgba(18, 198, 178, 0.5)' }}></Box>
            </Stack>
            </Box>
            {/* right side */}
            <Box  sx={{ height:'100%' }} >
                {/* inner Stack of text and images */}
            <Stack sx={{width:'100%' , height:'100%'}}  justifyContent='space-evenly' alignItems='center' >
                <Box width='100%' >
                <Stack direction='row' justifyContent='flex-start' sx={{width:'100%'}}  gap={1}>
                <Typography component='p'  fontSize='1.5rem'>Create </Typography>
                <Typography component='p' sx={{display:'inline-block'}} fontSize='1.5rem' fontWeight='bold'> Profiles </Typography>
                <Typography component='p' sx={{display:'inline-block'}} fontSize='1.5rem' > For </Typography> 
                <Typography component='p' sx={{display:'inline-block'}} fontSize='1.5rem' fontWeight='bold'> Kids.</Typography> 
                </Stack>
                <Typography component='p' fontSize='1rem' fontWeight='500px'>Send kids on adventures with their favorite characters in a space made just for<br /> them—free with your membership.</Typography>  
                </Box>
                {/* images box container */}
                <Box sx={{width:'100%'}}>
                    {/*  images Stack*/}
                    <Stack sx={{width:'100%' , height:"100%"}} direction='row' justifyContent='flex-start' alignItems='center' gap={4} >
                        <Box sx={{backgroundImage:`url(${cover})` , width:'115px' , height:'200px' , backgroundRepeat:'no-repeat' , backgroundSize:'contain'}}></Box>
                        <Box sx={{backgroundImage:`url(${pixlar})` , width:'115px' , height:'200px' , backgroundRepeat:'no-repeat' , backgroundSize:'contain'}}></Box>
                        <Box sx={{backgroundImage:`url(${moana})` , width:'115px' , height:'200px' , backgroundRepeat:'no-repeat' , backgroundSize:'contain'}}></Box>
                        <Box sx={{backgroundImage:`url(${babyboss})` , width:'115px' , height:'200px' , backgroundRepeat:'no-repeat' , backgroundSize:'contain'}}></Box>
                    </Stack>
                </Box>
            </Stack>
       
            </Box>
            </Stack>
          
        </Box>
    );
};

export default KidsSection;