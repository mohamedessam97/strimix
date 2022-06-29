import React from 'react';
import { Container , Stack, Typography } from '@mui/material';
import RegisterForm from '../Components/RegisterForm';

const Register = () => {
    return (
        <Container
        maxWidth="sm"
        sx={{ height: "80vh", boxSizing: "border-box", paddingTop: "5rem" , textAlign:'left' ,  backgroundColor:'rgba(7, 9, 17, 0.7)', marginBottom:'3rem'}}>
            
            <Stack justifyContent='space-around' alignItems='flex-start' alignContent='flex-start'  gap={2} sx={{maxWidth:'450px' , marginLeft:'2rem' , color:'#FFFFFF'}}>
            <Typography  sx={{fontSize: "1rem" , textAlign:'left' , color:'rgb(255 255 255 / 85%)' }} >STEP 1 OF 3</Typography>
            <Typography  sx={{  fontWeight:'bold' , textAlign:'left'}}>Create a password to start <br/> your membership</Typography>
            <Typography  sx={{  fontSize:'1.2rem' , fontFamily:'sans-serif' , textAlign:'left' , color:'rgb(255 255 255 / 85%)'}} >Just a few more steps and you're done!<br/>We hate paperwork, too.</Typography>
            <RegisterForm />
            {}
            </Stack>
           
        </Container>
    );
};

export default Register;