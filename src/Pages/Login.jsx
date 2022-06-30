import { Box, Container , Stack, Typography } from '@mui/material';
import LoginForm from '../Components/LoginForm';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import bg from '../assets/2022.png';

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Login = () => {
    return (
      <Box sx={{ backgroundImage:`url(${bg})` , backgroundSize:'cover' , paddingTop:'3rem' ,  paddingBottom:'3rem'}}>
        <Container
        maxWidth="sm"
        sx={{ height: "80vh", boxSizing: "border-box", paddingTop: "5rem" , textAlign:'center  ' ,  backgroundColor:'rgba(7, 9, 17, 0.7)', paddingBottom:'3rem'}}>
            
            <Stack justifyContent='space-around' alignItems='center' alignContent='flex-start'  gap={2} sx={{maxWidth:'450px' , marginLeft:'2rem' , color:'#FFFFFF'}}>
            <Typography variant='h4' sx={{  fontWeight:'bold' , textAlign:'left'}}>Sign In</Typography>
            <LoginForm />
            <Stack direction='row' gap={1}>
            <Typography variant='p' sx={{  fontSize:'1.2rem' , fontFamily:'sans-serif' , textAlign:'left' , color:'#c4c4c4d9'}} >New to STRIMIX?</Typography>
            <Typography variant='p' sx={{  fontSize:'1.2rem' , fontFamily:'sans-serif' , textAlign:'left' , color:'#FFFFFF'}} ><StyledLink to='/setup' style={{ color: "white", textDecoration: "none" }}>Sign up now.</StyledLink></Typography>
            </Stack>
            </Stack>
           
        </Container>
        </Box>
    );
};

export default Login;