import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { styled } from '@mui/system';

const CustomTypography = styled(Typography)(({Theme}) => ({
    '&:hover':{
        color:'white'
    }
}))


const Footer = () => {
    return (
         <Box sx={{color:'rgba(117, 117, 117, 1);' , paddingTop:'1rem' , height:'220px' , borderTop:'8px solid #222222' , backgroundColor:'#0A0D18' , display:'relative' , bottom:'0px' , top:'100%' }}>
            <Stack direction='row' justifyContent='space-evenly' alignItems='center' gap={3} flexWrap='wrap'>
                {/* first stack of links */}
            <Stack justifyContent='space-around' gap={1}>
            <CustomTypography>FAQ</CustomTypography>
            <CustomTypography>Investor Relations</CustomTypography>
            <CustomTypography>Ways to Watch</CustomTypography>
            <CustomTypography>Corporate Information</CustomTypography>
            <CustomTypography>Only on Netflix</CustomTypography>
            </Stack>
            {/* second Stack */}
            <Stack justifyContent='space-around' gap={1}>
            <CustomTypography>Help Center</CustomTypography>
            <CustomTypography>Jobs</CustomTypography>
            <CustomTypography>Terms of Use</CustomTypography>
            <CustomTypography>Contact Us</CustomTypography>
            </Stack>

            {/* third stack */}
            <Stack justifyContent='space-around' gap={1}>
            <CustomTypography>Account</CustomTypography>
            <CustomTypography>Redeem Gift Cards</CustomTypography>
            <CustomTypography>Privacy</CustomTypography>
            <CustomTypography>Speed Test</CustomTypography>
            </Stack>

            {/* fourth Stack */}
            <Stack justifyContent='space-around' gap={1}>
            <CustomTypography>Media Center</CustomTypography>
            <CustomTypography>Buy Gift Cards</CustomTypography>
            <CustomTypography>Cookie Preferences</CustomTypography>
            <CustomTypography>Legal Notices</CustomTypography>
            </Stack>



            </Stack>
         </Box>
    );
};

export default Footer;