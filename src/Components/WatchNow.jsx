import { Box, Stack, Typography } from '@mui/material';
import tv from '../assets/Startwatchingimage.png';
import BasicForm from './UI/BasicForm';


const WatchNow = () => {
    return (
        <Box sx={{height:'100vh' , color:'white'}}>
            {/* inner Stack of text and image container */}
            <Stack justifyContent='center' alignItems='center' gap={2} sx={{width:'100%' , height:'100%'}}   >
                <Box sx={{ backgroundImage:`url(${tv})` , backgroundRepeat:'no-repeat' , backgroundSize:'contain' , width:'500px' , height:'390px'}}>
                   
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