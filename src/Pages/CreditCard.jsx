import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Stack } from "@mui/material";
import CreditForm from "../Components/CreditForm";
import visaImage from '../assets/visa2.png';
import masterCard from '../assets/Group 51.png';


const CreditCard = () => {

 
    return (
        <Container
        maxWidth="sm"
        sx={{ boxSizing: "border-box", paddingTop: "5rem" , color:'white' , 
        textAlign:'center',
        backgroundImage:'linear-gradient(to bottom, rgba(7, 9, 17, 0.9) 5.88%, rgba(7, 9, 17, 0.8) 34.09%, rgba(7, 9, 17, 0.4) 99.57%);',
        width:{ lg:'600px' , md:'450px' , sm:'400px' , xs:'auto' } ,
        paddingBottom:'3rem',
        marginBottom:'2rem'
        }}>
  
      <Stack justifyContent="space-around" alignItems="center" alignContent="center" gap={2}>
       
        <Typography Variant="p" sx={{ fontSize: "0.9rem" , color:'rgb(255 255 255 / 85%)'}}>STEP <strong>3</strong> OF <strong>3</strong></Typography>
        <Typography Variant="p" component='div' sx={{ fontSize: "2rem", fontWeight: "bolder" , textAlign:'center' }}>STEP 3 OF 3 Set up your credit or debit card
        <Box Variant='span' component='span' sx={{marginLeft:'1rem' , marginRight:'1rem' , '& img':{marginLeft:'10px' , marginRight:'10px'}}}>
            <img src={visaImage} alt="visa" />
            <img src={masterCard}  alt='master' />
            </Box>
        </Typography>



            <Stack sx={{marginTop:'1rem' }} alignItems='center'>
            <CreditForm />
            </Stack>
            
      </Stack>
    </Container>
 
    );
};

export default CreditCard;