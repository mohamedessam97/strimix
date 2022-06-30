import { Box, Stack, Typography } from '@mui/material';
import tv from '../assets/Startwatchingimage.png';
import BasicForm from './UI/BasicForm';


const WatchNow = () => {
    return (
        <Box sx={{height:{xl:'100vh' , lg:'100vh' , md:'100vh' , sm:'auto' , xs:'auto'} , color:'white'}}>
            {/* inner Stack of text and image container */}
            <Stack justifyContent='center' alignItems='center' gap={2} sx={{width:'100%' , height:'auto'}}   >
                <Box sx={{ backgroundImage:`url(${tv})` , backgroundRepeat:'no-repeat' , backgroundSize:'contain' , width:{xl:'500px' , lg:'500px' , md:'500px' , sm:'80%' , xs:'80%'} , height:{xl:'390px' , lg:'390px' , md:'390px' , sm:'200px' , xs:'200px'}}}>
                   
                </Box>
                {/* text Stack */}
                <Stack direction='row' justifyContent='space-evenly' alignItems='center' gap={1}>
                <Typography fontSize='2rem' fontWeight='500px'>Start</Typography>
                <Typography fontSize='2rem' fontWeight='bold' >Watching Now</Typography>
                </Stack>
                <Typography fontSize='1rem' fontWeight='500px'>Ready to watch? Enter your email to create or restart your membership.</Typography>
                <BasicForm />
            </Stack>
        </Box>
    );
};

export default WatchNow;