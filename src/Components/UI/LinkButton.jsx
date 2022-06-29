import { Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import masterCard from '../../assets/Group 51.png';
import visaImage from '../../assets/visa2.png';

const StyledButton = styled(Button)(({ theme }) => ({
  display:'flex',
  flexWrap:'wrap',
  border: "1px solid #333",
  color: "#FFFFFF",
  fontSize: "1rem",
  fontWeight: "900px",
  backgroundColor:'#252830',
}));

const StyledContainer = styled(Box)(({theme}) => ({
width:'auto' , 
height:'auto',
margin:'auto',
padding:'0px',


 '& img':{
     width:'60px',
     height:'40px'
 }
}))



const LinkStyle = { textDecoration: "none" };

const LinkButton = () => {
  return (
    <Link to="/creditcard" style={LinkStyle} >
      <StyledButton sx={{  padding: {lg:"1rem 2.5rem" , md:'10px 10px' , sm:'10px 5px' , sx:'10px 5px'}}}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center" 
          gap={5} sx={{ flexWrap : { xs:'wrap'} }}  >
         
          <Typography variant="p" component='div' textAlign='center' sx={{width:{xs:'200px'} , margin:{xs:'auto'}}}>Credit or Debit Card</Typography>
          <StyledContainer component='span' >
            <Stack direction='row' justifyContent='space-between' alignItems='center' gap={1}>
            <img src={visaImage} alt="visa" />
            <img src={masterCard}  alt='master' />
        <ArrowForwardIosIcon />
            </Stack>
            </StyledContainer>

        
         
         
        </Stack>
      </StyledButton>
    </Link>
  );
};

export default LinkButton;
