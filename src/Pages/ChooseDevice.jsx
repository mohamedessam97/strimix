import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { setUserDevice } from '../Redux/middleware/UserDataActions';
import classes from "../Components/Styles/devices.module.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { useState } from "react";
import AuthenticationSliceActions from "../Redux/AuthenticationSlice";
import LoadingButton from '@mui/lab/LoadingButton';
import styled from "@emotion/styled";
import bg from '../assets/2022.png';


const LargeButton = styled(LoadingButton)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#12C6B2",
  fontWeight: "500px",
  fontSize: "24px",
  minHeight: "64px",
  borderRadius: "4px",
  padding: "0.75rem 25.333px",
  Width: "450px",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: "#12C6B2",
  },
}));



const ChooseDevice = () => {
  const [tvchosen , settvChosen] = useState(false)
  const [mobilechosen , setMobileChosen] = useState(false)
  const [laptopchosen , setlaptopChosen] = useState(false)
  const  Dispatch = useDispatch()
  const isLoading = useSelector( (state) => state.isLoading )
  const requestError = useSelector( (state) => state.error )
  const userDevice = useSelector( (state) => state.userDevice )
const Navigate = useNavigate()
  const tvDeviceHandler = () => {
    Dispatch(AuthenticationSliceActions.setUserDevice('Tv'))
    settvChosen(true)
    setlaptopChosen(false)
    setMobileChosen(false)
  }

  const laptopDeviceHandler = () => {
    Dispatch(AuthenticationSliceActions.setUserDevice('Laptop'))
    settvChosen(false)
    setMobileChosen(false)
    setlaptopChosen(true)
  }

  const mobileDeviceHandler = () => {
    Dispatch(AuthenticationSliceActions.setUserDevice('Mobile'))
    settvChosen(false)
    setlaptopChosen(false)
    setMobileChosen(true)
  }


  const setDeviceHandler = () => {
    Dispatch(AuthenticationSliceActions.setError(''))

    if(userDevice){
      Dispatch(setUserDevice({device: userDevice , Navigate}))
    }else{
      Dispatch(AuthenticationSliceActions.setError('You have to select a device'))
    }

  } 


  return (
    <Box sx={{ backgroundImage:`url(${bg})` , backgroundSize:'cover' , paddingTop:'3rem' ,  paddingBottom:'3rem'}}>

    <Container
      maxWidth="lg"
      sx={{
        color: "#FFFFFF",
        backgroundImage:
          "linear-gradient(to bottom, rgba(7, 9, 17, 0.9) 4.88%, rgba(7, 9, 17, 0.6) 34.09%, rgba(7, 9, 17, 0.5) 99.57%)",
        marginTop: "2rem",
        paddingBottom:'3rem',
        marginBottom:'2rem'
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} sx={{  marginTop: '2rem'}}>
          <Box>
            <Typography
              component='div'
              sx={{ fontSize: "0.9rem", color: "#C8CAD2" }}
            >
              STEP <strong>5</strong> OF <strong>5</strong>
            </Typography>
            <Typography
             
              component='div'
              sx={{ fontSize: "2rem", fontWeight: "bolder" }}
            >
              What devices will
              <br /> you be watching
              <br /> on?
            </Typography>
            <Typography
             
              component="div"
              sx={{ fontSize: "1rem", color: "#C8CAD2" }}
            >
              you can watch STRIMIX on any of these devices.
              <Typography
               
                component="div"
                sx={{ fontSize: "1rem", color: "#FFFFFF", fontWeight: "bold" }}
              >
                Select all that apply
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {/* nested grid */}

          <Grid container justifyContent='space-between' rowGap={2} alignItems="center" alignContent="center">
            <Grid item xs={12} md={3} lg={3} className={classes.device} sx={{borderColor: tvchosen ? ' #12C6B2 !important' : '' , height:'200px' , width:'200px'}} onClick={tvDeviceHandler}>
              <Stack justifyContent='space-around' alignItems='center' sx={{width:'100%' , height:'100%'}} >
                <LiveTvIcon sx={{ width:'50px' , height:'50px' , color : tvchosen ? ' #12C6B2' : '' }} />
                <Typography component='p'  color={tvchosen ? ' #12C6B2 !important' : ''}  sx={{fontSize:{lg:'16px' , md:'16px' }}}>TV</Typography>
                <Typography component="p" color={tvchosen ? ' #12C6B2' : ''} sx={{fontSize:{lg:'13px' , md:'13px' }}} textAlign='center' fontSize='1rem'>
                  Smart or internet connected TV's
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3} lg={3} className={classes.device} sx={{borderColor: laptopchosen ? ' #12C6B2 !important' : ''  , height:'200px' , width:'200px'}} onClick={laptopDeviceHandler}>
              <Stack justifyContent='space-around' alignItems='center' sx={{width:'100%' , height:'100%'}} >
                <LaptopMacIcon  sx={{ width:'50px' , height:'50px' , color: laptopchosen ? ' #12C6B2 !important' : ''  }}/>
                <Typography component='p'  color={laptopchosen ? ' #12C6B2 !important' : ''} sx={{fontSize:{lg:'16px' , md:'16px' }}} >Laptop</Typography>
                <Typography component="p" color={laptopchosen ? ' #12C6B2 !important' : ''} sx={{fontSize:{lg:'13px' , md:'13px' }}}  textAlign='center'>
                 Desktop or laptop
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3} lg={3} className={classes.device} sx={{borderColor: mobilechosen ? ' #12C6B2 !important' : ''  , height:'200px' , width:'200px'}}  onClick={mobileDeviceHandler}>
            <Stack justifyContent='space-around' alignItems='center' sx={{width:'100%' , height:'100%'}} >
                <DevicesOtherIcon  sx={{ width:'50px' , height:'50px' , color: mobilechosen ? ' #12C6B2 !important' : ''  }}/>
                <Typography component='p'  color={mobilechosen ? ' #12C6B2 !important' : ''} sx={{fontSize:{lg:'16px' , md:'16px' }}} >Phone or Tablet</Typography>
                <Typography component="p" color={mobilechosen ? ' #12C6B2 !important' : ''} sx={{fontSize:{lg:'13px' , md:'13px' }}}  textAlign='center'>
                  Download the STRIMIX app to enjoy
                </Typography>
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              lg={12}
              textAlign="center"
              sx={{ border: "solid 0.8px #FFFFFF", padding: "0.5rem" , borderRadius:'15px' }}
            >
              <Typography
               
                component="p"
                sx={{ fontSize: "1rem", color: "#FFFFFF" }}
              >
                Something Else
              </Typography>
              <Typography
               
                component="p"
                sx={{ fontSize: "1rem", color: "#C8CAD2" }}
              >
                Enjoy STRIMIX with other internet connection devices
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


      <Stack sx={{ width:'100%' , height:'150px'}} justifyContent='center' alignItems='center' >
      <LargeButton loading={isLoading} loadingIndicator='loading...'  type="submit" size="large" onClick={setDeviceHandler} sx={{  minWidth: {lg:'350px' ,md:'260px' , sm:'150px' , xs:'auto'} ,   height: { md:'64px' , sm:'40px' , sx:'auto'} ,  padding: { lg:"0.75rem 25.333px" , md:'0.5rem 20px' , sm:'0.3rem 15px' , sx:'0.1rem 5px' } }} >
          Next
      </LargeButton>
            { requestError &&<Typography component='p' color='#f50057'>{requestError}</Typography>}
        </Stack>

        
    </Container>
    </Box>
  );
};

export default ChooseDevice;
