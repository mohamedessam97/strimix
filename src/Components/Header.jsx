import { Typography , Stack , Box } from "@mui/material";
import BasicForm from "./UI/BasicForm";
import classes from '../Components/Styles/home.module.css';
import sliderimage from '../assets/image slider.png';

const Header = () => {
    return (
        <Stack justifyContent='space-around' alignItems='center' sx={{width:'100%'}} gap={2}>
        <Typography  color='#FFFFFF'  fontWeight='700' fontSize='50px' textAlign='center'>Unlimited movies, TV<br /> shows and more.</Typography>
        <Typography variant='p' color='#FFFFFF'  fontWeight='400px' fontSize='14px' textAlign='center'>Ready to watch? Enter your email to create or restart your membership.</Typography>
        <BasicForm />
        <Box sx={{width:{ xl:'1250px' ,  lg:'1350px' , md:'1000px' } , placeContent:'center'  }}>
        <img src={sliderimage}  className={classes.slider} alt='slider' />
        </Box>    
        </Stack>
    );
};

export default Header;