import { Box, Container } from "@mui/system";
import { Stack, Typography } from "@mui/material";
// import LargeButton from "../Components/UI/LargeButton";
import LinkButton from "../Components/UI/LinkButton";
import imgageLink from '../assets/Group.png';
const Payment = () => {
    return (
        <Container
        maxWidth="sm"
        sx={{ height: "80vh", boxSizing: "border-box", paddingTop: "5rem" , color:"#FFFFFF" ,  backgroundImage:'linear-gradient(to bottom, rgba(7, 9, 17, 0.9) 4.88%, rgba(7, 9, 17, 0.6) 34.09%, rgba(7, 9, 17, 0.5) 99.57%)' ,   paddingBottom:'1rem',
        marginBottom:'2rem'}}>
  
      <Stack justifyContent="space-around" alignItems="center" alignContent="center" gap={2}>
        <Box sx={{ width: "auto", height: "auto" }}>
          <img
            src={imgageLink}
            alt="checked"
            height="50px"
            width="62px"
          />
        </Box>

        <Typography Variant="p" sx={{ fontSize: "0.9rem" , color:'#C8CAD2' }}>STEP <strong>3</strong> OF <strong>3</strong></Typography>
        <Typography Variant="p" sx={{ fontSize: "2rem", fontWeight: "bolder" , textAlign:'center'}}>Set up your payment</Typography>
        <Typography variant="p" component='div' sx={{fontSize:'1rem' , color:'#C8CAD2' , textAlign:'center'}}>Your membership starts<br/>as soon as you set up payment.</Typography>
        <Typography variant="p" component='div' sx={{fontSize:'1.2rem'  , textAlign:'center' , fontWeight:'bold'}}>No commitments.<br/>Cancel online anytime.</Typography>


            <Box sx={{marginTop:'2rem'}}>
            {/* <LargeButton link='/' text='Next'  /> */}
            <LinkButton />
            </Box>
            
      </Stack>
    </Container>
    );
};

export default Payment;