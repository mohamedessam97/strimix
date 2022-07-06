  import { Container } from "@mui/system";
  import React,{useEffect,useState} from 'react';
  import axios from 'axios';
  import {useSelector} from 'react-redux'
  import ownerImg from './images/avatar3.jpeg';
  import userImg from './images/avatar1.jpeg';
  import { Link } from "react-router-dom";
  import Types from "prop-types"; 
  import Box from '@mui/material/Box';
  import Button from '@mui/material/Button';
//import {makeStyles} from '@mui/styles'
  import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
  import TextField from '@mui/material/TextField';
  import styled from "@emotion/styled";
  import { Icon } from '@iconify/react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import PropTypes from 'prop-types';
import { useNavigate} from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#12C6B2',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#12C6B2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#12C6B2',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#12C6B2',
    },
  },
});
  const LargeButton = styled(Button)(({ theme }) => ({
      color: "#12C6B2",
      border: "2px solid #12C6B2",
      backgroundColor: "#transparent",
      fontWeight: "300px",
      fontSize: "24px",
      minHeight:  "64px" ,
      borderRadius: "4px",
      padding: "0.75rem 10px",
      Width: "10%" ,
      
      marginLeft:"38rem"
    }));
    const Header = styled(Typography)(({ theme }) => ({
      fontSize: "35px",
  	
    color: "#12C6B2",
      // "&::after": {
      //   content: "' '",
      //   position: "absolute",
      //   width: "60%",
      //   height: "3px",
      //   left: "50%",
      //   bottom: "-5px",
      //   backgroundColor: "#12C6B2"
      // },
    }));
    
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
    const StyledButton = styled(Button)`
    text-decoration: none;
    
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      border:none;
    }
  `;

  
    function Item(props) {
      const { sx, ...other } = props;
      return (
        <Box
          sx={{
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
            border: '1px solid',
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            p: 1,
            m: 1,
            fontSize: '0.875rem',
            fontWeight: '700',
            ...sx,
          }}
          {...other}
        />
      );
    }
    
    Item.propTypes = {
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
      ]),
    };
    
  export default function NewProfile() {
    const userdata=useSelector((state)=>{
      return state
     }) 
    const [users,setUsers]=useState([])
  const token =  JSON.parse(localStorage.getItem("token"));
  console.log(token) 
  const account=JSON.parse(localStorage.getItem('user'))
  console.log(account.userName)
  const id = localStorage.getItem("id"); //user id
  const [userName,setName]= useState('')
  const [isKid,setIskid]= useState('')
  const [avatar,setAvatar]= useState()
  const [idshow, setIdshow] = useState(""); //profile id
  const [open, setOpen] = React.useState(false);
//modal add profile
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  useEffect(()=>{
    loadUsers()
 },[])

 function loadUsers() {
   axios.get('http://localhost:3001/profile/one', {
     headers: {
       Authorization: token
     }
   })
     .then(result => {
       setUsers([...result.data])
       console.log('check users' ,users)
     }
     )

 }
  const createProfile=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/profile' ,{userName,avatar,isKid},
     { headers:
       {
           Authorization: token
    } }
       )
    .then(res => {
    console.log(res.data);
    // setUsers(res.data)
    loadUsers()
    })
   .catch((error) => {
console.log(error)
}
  );
  handleClose();
}
  
  
    return (
      <>
      
      <div style={{padding:'20px' }}>
      <Header component="div">
      <Box sx={{ textTransform: 'capitalize',mt:10 ,textAlign:'center'}}>Who's Watching?</Box>
    </Header>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',padding:"5px",gap:2}}>
      <div>
      <Card   sx={{ width: '42vh' ,marginTop:'120px',marginBottom:'60px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{height:'40vh' ,width:'42vh'}}
        image={ownerImg}
          alt="profile image"
        />
      </CardActionArea>
    </Card>
    <Typography sx={{marginTop:"-20px" ,color:'#fff',textAlign:"center",gap:2}}>{account.userName}</Typography>
    </div>
      { users?.length !== 0 ? (
         users?.map((user) => (
           <div>
      <Card  key={user._id} sx={{ width: '42vh' ,marginTop:'120px',marginBottom:'10px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{height:'40vh' ,width:'42vh'}}
        image={userImg}
          alt="profile image"
        />
      </CardActionArea>
    </Card>
    <Typography sx={{padding:"25px" ,color:'#fff',textAlign:"center",gap:2}}>{user.userName}</Typography>
    </div>
     ))
     ) : (
         <div></div>
     )
     }
     <StyledButton onClick={() => handleClickOpen()}  style={{ color: "#12C6B2", textDecoration: "none" ,fontSize:"100px"}} >
           {/* <Link to='/users/add'> */}
               <Icon icon="carbon:add-alt" sx={{border:'none'}} />
           {/* </Link> */}
       
       </StyledButton>
      </Box>
      <LargeButton size="large"  sx={{  minWidth: {lg:'450px' ,md:'300px' , sm:'auto' , xs:'auto'} ,   height: { md:'64px' , sm:'40px' , sx:'auto'} ,  padding: { lg:"0.75rem 25.333px" , md:'0.5rem 20px' , sm:'0.3rem 15px' , sx:'0.1rem 5px' } }} >
     <StyledLink
        to="/ManageProfile"
        style={{ color: "#12C6B2", textDecoration: "none" }}
      >
       Manage Profiles
      </StyledLink>
    </LargeButton>
                   
                   <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{textAlign:'center' ,fontWeight:'bold' ,backgroundColor:'#12C6B2', color:'#fff',marginBottom:'8px'}}>Create Profile</DialogTitle>
        <DialogContent>
         
      <Grid container spacing={3}>
        <Grid item xs={12} sm container>
          <div style={{
        display: 'flex',
        flexDirection: 'column',margin:'5px' ,padding:'10px',justifyContent:'space-around'
      }} >
       
          <Grid item xs container direction="column" spacing={2}  >
         
            <Grid item xs >
            <div style={{display:'flex',flexDirection:'column'}}>
            <CssTextField label="User Name" id="custom-css-outlined-input"  sx={{marginBottom:"12px"}}
            name="name"
            value={userName}
             onChange={(e) => setName(e.target.value)}
             defaultValue={userName}
            />
            <FormLabel sx={{color:'#000',marginTop:'5px'}} component="legend"> Choose Profile Avatar</FormLabel>
           <CssTextField  id="custom-css-outlined-input"  sx={{marginBottom:"12px"}}
            name="avatar"
            type='file'
             onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))}
            />
            </div>
        <FormLabel sx={{color:'#000',marginTop:'5px'}} component="legend"> If User age less than 18 please check..</FormLabel>
        <FormGroup >
      <FormControlLabel control={<Checkbox/>} label="Is Kid?" />
    </FormGroup>
            
            </Grid>
           
          </Grid>
           
          </div>
        </Grid>
      </Grid>
         
        </DialogContent>
        <DialogActions  sx={{backgroundColor:'#12C6B2', color:'#fff'}}>
          <Button onClick={handleClose} sx={{border:"1px solid #fff" ,fontSize:"15px",color:"#fff"}}>Cancel</Button>
          <Button onClick={createProfile} sx={{border:"1px solid #fff" ,fontSize:"15px",color:"#fff"}}>Create Profile</Button>
        </DialogActions>
      </Dialog>
    </div>
        </>

    );
  }
  