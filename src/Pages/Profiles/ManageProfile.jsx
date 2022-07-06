import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux'

import userImg from './images/avatar1.jpeg';
import ownerImg from './images/avatar3.jpeg';
import pic3 from './images/avatar2.jpeg'

import { Link } from "react-router-dom";
import Types from "prop-types"; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from "@emotion/styled";
import { Icon } from '@iconify/react';
 //import { Card, Col, ListGroup, Row, Table, Modal, Dropdown, DropdownButton } from 'react-bootstrap'
// import { BiDotsVerticalRounded } from 'react-icons/bi'
//import { Modal } from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

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
//import 'antd/dist/antd.css'
// import {Avatar} from 'antd'
// import { Modal } from 'antd';
const Languages = [
  {
    value: 'English',
    label: 'English',
  },
  {
    value: 'Arabic',
    label: 'Arabic',
  }
];
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
    backgroundColor: "#fff",
    fontWeight: "300px",
    fontSize: "24px",
    minHeight:  "64px" ,
    borderRadius: "4px",
    padding: "0.75rem 5px",
    Width: "5%" ,
    marginTop: "20px",
    marginLeft:"40rem",
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
  const Header = styled(Typography)(({ theme }) => ({
    fontSize: "35px",
  color: "#12C6B2"
  }));
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20%',
    height:'60vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    fontSize:'2rem' , fontWeight:'bold',
  };

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
  let token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : ''
  // console.log(JSON.stringify(token));
  //let checked = iskid === value ? "true" : "";

  console.log(token)
const ManageProfile=(props)=> {
  const account=JSON.parse(localStorage.getItem('user'))
  console.log(account.userName)
  const [users,setUsers]=useState([])
  const [user, setUser] = useState(null)
  const id = localStorage.getItem("id"); //user id
  const [userName,setName]= useState('')
  const [accountName,setNameAcc]= useState('')
  const [email,setEmail]= useState('')
  const [iskid,setIskid]= useState(false)
  const [idshow, setIdshow] = useState(""); //profile id
  const [idshowAcc, setIdshowAcc] = useState(""); //account id
  const [avatar,setAvatar] =useState('') 
  let history = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const imagesArray=[userImg,ownerImg,pic3];

  const handleAvatarChange =(event)=>{
    setAvatar(event.target.value)
  }
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };
  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const userdata=useSelector((state)=>{
    return state
   })
   const userData = localStorage.getItem("user");
   console.log("userdata",userData)
   
   const [language, setLanguage] = React.useState('English');

   const handleChange = (event) => {
    setLanguage(event.target.value);
   };
   // open for edit profile
   const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 
  const showing = (profileId) => {
    handleClickOpen()
    setIdshow(profileId)
  }


   // open for edit Account
   const [openAcc, setOpenAcc] = React.useState(false);
  const handleClickOpenAcc = () => {
    setOpenAcc(true);
  };
  const handleCloseACC = () => {
    setOpenAcc(false);
  };
  const showingAcc = (accountId) => {
    handleClickOpenAcc()
    setIdshow(accountId)
  }
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
    
    

    // }
  
    // //edit profile
    const handleEditProfile = (event) => {
      event.preventDefault()
      let profileId=idshow;
       axios.put(`http://localhost:3001/profile/${profileId}`,{userName,avatar},{
        headers:{
          Authorization: token
        }
      }).then((res) =>{
        console.log('reponse edit' ,res.data)
        // setUsers(res.data)
      })
      .catch((error) => console.log(error))
  
          handleClose();
         loadUsers()
    }
     
    //delete profile
    const deleteProfile =(profileId) =>{
     axios.delete(`http://localhost:3001/profile/${profileId}`)
      .then((res)=>{
        const newData = users.filter(user => user._id !== profileId)
        setUsers(newData)
      })
      .catch(error=>console.log(error))
    }
//get account
useEffect(()=>{
  loadAccount()
},[])

function loadAccount() {
 axios.get('http://localhost:3001/user', {
   headers: {
     Authorization: token
   }
 })
   .then(result => {
     setUser([...result.data])
     console.log('check account' ,user)
   }
   )

}


  // //edit account
  const handleEditAccount = (event) => {
    event.preventDefault()
    let accountId=idshowAcc;
     axios.put(`http://localhost:3001/user/edit/${accountId}`,{accountName ,email},{
      headers:{
        Authorization: token
      }
    }).then((res) =>{
      console.log('reponse edit' ,res.data)
      // setUsers(res.data)
    })
    .catch((error) => console.log(error))

        handleCloseACC();
  } 
    return (
        
      <div style={{padding:'20px' }}>
        <Header component="div">
      <Box sx={{ textTransform: 'capitalize',mt:10 ,textAlign:'center'}}>Manage Profiles</Box>
    </Header>
    {/* <Avatar size={64} icon="user" src={avatar}/> */}
    {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
     <img src={avatar}/> */}
      {/* <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        { imagesArray.map((image,index)=>{
      return(
        <img src={image} onChange={()=>handleAvatarChange(image)} height='40px'/>
      )
    })  }
      </Modal> */}
       <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',padding:"5px",gap:2}}>
       <div>
      <Card   sx={{ width: '42vh' ,marginTop:'120px',marginBottom:'60px' ,position:"relative",opacity:'.7'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{height:'40vh' ,width:'42vh'}}
        image={ownerImg}
          alt="profile image"
        />
       <Button  sx={{position:"absolute" ,top:'100px',left:'90px',color:"#fff"}} >
             <Icon icon="akar-icons:edit"  inline={true} style={{fontSize:'8rem'}}  onClick={() => showingAcc(account._id)} />
         </Button>
          {/* <Typography variant="h3" sx={{position:"absolute" ,top:'110px',left:'40px',backgroundColor:'white'}}>Card Title</Typography> */}
        
      </CardActionArea>
      
    </Card>
    <Typography sx={{marginTop:"-20px" ,color:'#fff',textAlign:"center",gap:2}}>{account.userName}</Typography>
    </div>
      { users?.length !== 0 ? (
         users?.map((user) => (
           <div>
      <Card   sx={{ width: '42vh' ,marginTop:'120px',marginBottom:'30px' ,position:"relative",opacity:'.7'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{height:'40vh' ,width:'42vh'}}
        image={userImg}
          alt="profile Image"
        />
        <Button sx={{position:"absolute" ,top:'100px',left:'90px',color:"#fff"}} >
          {/* <StyledLink to={`/UpdateProfile${user._id}`} style={{color:"#fff",textDecoration: "none" }}> */}
          <Icon icon="akar-icons:edit"  onClick={() => showing(user._id)}  inline={true} style={{fontSize:'8rem'}}  />
          {/* </StyledLink> */}
         
         </Button>
      </CardActionArea>
      <div>
      {/* edit profile */}
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{textAlign:'center' ,fontWeight:'bold' ,backgroundColor:'#12C6B2', color:'#fff',marginBottom:'8px'}}>Edit User Data</DialogTitle>
        <DialogContent>
        
      
      <Grid container spacing={3}>
        <Grid item sx={{borderRight:'1px solid gray'}} >
          <ButtonBase sx={{ width: 128, height: 128 ,marginRight:'15px',marginTop:'10px' ,marginBottom:'10px'}}>
            <Img alt="complex" src={avatar} style={{position:"relative"}} />
            <Button  sx={{position:"absolute" ,top:'35px',left:'30px',color:"#fff"}} onClick={() => handleClickOpen3()}>
             <Icon icon="akar-icons:edit"  inline={true} style={{fontSize:'4rem'}}  />
         </Button>
          </ButtonBase>
          <Typography  sx={{marginLeft:'50px'}}>
               {user.userName}
              </Typography>
        </Grid>
        <Grid item xs={12} sm container>
          <div style={{
        display: 'flex',
        flexDirection: 'column',margin:'5px' ,padding:'10px',justifyContent:'space-around'
      }} >
       
          <Grid item xs container direction="column" spacing={2}  >
         
            <Grid item xs >
            
            <CssTextField label="User Name" id="custom-css-outlined-input"  sx={{marginBottom:"12px"}}
            name="name"
            value={userName}
             onChange={(e) => setName(e.target.value)}
             defaultValue={userName}
            />
           
          
            <TextField
          id="outlined-select-currency"
          select
          label="Select Language"
          value={language}
          onChange={handleChange}
          sx={{width:'206px',marginBottom:"12px"}}
        >
          {Languages.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormLabel sx={{color:'#000'}} component="legend">Autoplay Controls</FormLabel>
        <FormGroup >
      <FormControlLabel control={<Checkbox defaultChecked />} label="Autoplay next episode in a series on all devices" />
      <FormControlLabel control={<Checkbox />} label="Autoplay previews while browsing on all devices" />
    </FormGroup>
            
            </Grid>
           
          </Grid>
           
          </div>
        </Grid>
      </Grid>
       
    {/* </Paper> */}
        </DialogContent>
        <DialogActions sx={{backgroundColor:'#12C6B2', color:'#fff'}}>
         
          <Button onClick={(e)=>{handleEditProfile(e)}} sx={{border:"1px solid #fff" ,fontSize:"15px",color:"#fff"}}>Save Changes</Button>
          <Button onClick={handleClose} sx={{border:"1px solid #fff" ,fontSize:"15px",color:"#fff"}}>Cancel</Button>
          <Button onClick={() => {
                          if (window.confirm('Do you want to delete this user?')) {
                            deleteProfile(user._id)
                            handleClose()
                          }
                        }} sx={{border:"1px solid #fff" ,fontSize:"15px",color:"#fff"}}>Delete Profile</Button>
        </DialogActions>
      </Dialog>

    {/* dialog for avatar */}
    <Dialog open={open3} onClose={handleClose3} >
        <DialogTitle sx={{textAlign:'center' ,fontWeight:'bold' ,backgroundColor:'#12C6B2', color:'#fff',marginBottom:'8px'}}>Edit User Data</DialogTitle>
        <DialogContent>
        
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm container>
          <div style={{
        display: 'flex',
        flexDirection: 'column',margin:'5px' ,padding:'10px',justifyContent:'space-around'
      }} >
       
          <Grid item xs container direction="column" spacing={2}  >
         
            <Grid item xs >
            
            { imagesArray.map((image,index)=>{
      return(
        <img src={image} onChange={(e) => setAvatar(e.target.value)} height='40px' style={{cursor:'pointer',margin:'5px'}}/>
      )
    })  }
            
            </Grid>
           
          </Grid>
           
          </div>
        </Grid>
      </Grid>
       
    {/* </Paper> */}
        </DialogContent>
        <DialogActions sx={{backgroundColor:'#12C6B2', color:'#fff'}}>
         
          <Button onClick={handleClose3} sx={{border:"1px solid #fff" ,fontSize:"15px",color:"#fff"}}>Save Changes</Button>
          <Button onClick={handleClose3} sx={{border:"1px solid #fff" ,fontSize:"15px",color:"#fff"}}>Cancel</Button>
        </DialogActions>
      </Dialog>


      {/* edit account */}
      <Dialog open={openAcc} onClose={handleCloseACC} >
        <DialogTitle sx={{textAlign:'center' ,fontWeight:'bold' ,backgroundColor:'#12C6B2', color:'#fff',marginBottom:'8px'}}>Edit User Data</DialogTitle>
        <DialogContent>
        
      
      <Grid container spacing={3}>
        <Grid item sx={{borderRight:'1px solid gray'}} >
          <ButtonBase sx={{ width: 128, height: 128 ,marginRight:'15px',marginTop:'10px' ,marginBottom:'10px'}}>
            <Img alt="complex" src={ownerImg}/>
            
          </ButtonBase>
          <Typography  sx={{marginLeft:'50px'}}>
               {account.userName}
              </Typography>
        </Grid>
        <Grid item xs={12} sm container>
          <div style={{
        display: 'flex',
        flexDirection: 'column',margin:'5px' ,padding:'10px',justifyContent:'space-around'
      }} >
       
          <Grid item xs container direction="column" spacing={2}  >
         
            <Grid item xs >
            
            <CssTextField label="Account Name" id="custom-css-outlined-input"  sx={{marginBottom:"12px"}}
            name="name"
            value={account.userName}
             onChange={(e) => setNameAcc(e.target.value)}
             defaultValue={account.userName}
            />
           
           <CssTextField label="User Name" id="custom-css-outlined-input"  sx={{marginBottom:"12px"}}
            name="name"
            value={account.email}
             onChange={(e) => setEmail(e.target.value)}
             defaultValue={account.email}
            />
           
           
            
            </Grid>
           
          </Grid>
           
          </div>
        </Grid>
      </Grid>
       
    {/* </Paper> */}
        </DialogContent>
        <DialogActions sx={{backgroundColor:'#12C6B2', color:'#fff'}}>
         
          <Button onClick={(e)=>{handleEditAccount(e)}} sx={{border:"1px solid #fff" ,fontSize:"15px",color:"#fff"}}>Save Changes</Button>
          <Button onClick={handleCloseACC} sx={{border:"1px solid #fff" ,fontSize:"15px",color:"#fff"}}>Cancel</Button>
         
        </DialogActions>
      </Dialog>
    </div>
    </Card>
    <Typography sx={{padding:"10px" ,color:'#fff',textAlign:"center",gap:2}}>{user.userName}</Typography>
    </div>
    
     ))
     ) : (
         <div></div>
     )
     }
      </Box>
      <LargeButton size="small"  sx={{  minWidth: {lg:'250px' ,md:'150px' , sm:'auto' , xs:'auto'} ,   height: { md:'64px' , sm:'40px' , sx:'auto'} ,  padding: { lg:"0.75rem 25.333px" , md:'0.5rem 20px' , sm:'0.3rem 15px' , sx:'0.1rem 5px' } }} >
      <StyledLink to='/home' style={{color:'#12C6B2'}}>
      Done
        </StyledLink> 
    </LargeButton>
            </div>
    );
}

export default ManageProfile ;



// import React,{useEffect,useState} from 'react';
// import axios from 'axios';
// import {useSelector} from 'react-redux'
// import './ProfilesCard.css'
// import userImg from './images/avatar3.jpeg';
// import profileImg from './images/avatar1.jpeg';
// import { Link } from "react-router-dom";
// import Types from "prop-types"; 
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import styled from "@emotion/styled";
// import { Icon } from '@iconify/react';
//  import { Card, Col, ListGroup, Row, Table, Modal, Dropdown, DropdownButton } from 'react-bootstrap'
// // import { BiDotsVerticalRounded } from 'react-icons/bi'
// import { RiUserAddLine } from "react-icons/ri";
// import * as IconName from "react-icons/bs";
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import { HiOutlineMail } from "react-icons/hi";
// import { AiOutlinePhone } from "react-icons/ai";
// import { FaRegAddressCard } from "react-icons/fa"
// import { useNavigate} from "react-router-dom";

// const LargeButton = styled(Button)(({ theme }) => ({
//     color: "#12C6B2",
//     border: "2px solid #12C6B2",
//     backgroundColor: "#transparent",
//     fontWeight: "300px",
//     fontSize: "24px",
//     minHeight:  "64px" ,
//     borderRadius: "4px",
//     padding: "0.75rem 10px",
//     Width: "10%" ,
//     marginTop: "20px",
//     marginLeft:"38rem",
//   }));
  
//   const StyledLink = styled(Link)`
//     text-decoration: none;
//     &:focus,
//     &:hover,
//     &:visited,
//     &:link,
//     &:active {
//       text-decoration: none;
//     }
//   `;
//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '20%',
//     height:'60vh',
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//     fontSize:'2rem' , fontWeight:'bold',
//   };
//   let token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : ''
//   // console.log(JSON.stringify(token));
//   //let checked = iskid === value ? "true" : "";

//   console.log(token)
// const NewProfile=(props)=> {
//   const [users,setUsers]=useState([])
//   const id = localStorage.getItem("id"); //user id
//   const [userName,setName]= useState('')
//   const [email,setEmail]= useState('')
//   const [iskid,setIskid]= useState(false)
//   const [idshow, setIdshow] = useState(""); //profile id
//   const [avatar,setAvatar] =useState('') 
//   let history = useNavigate();
//   const userdata=useSelector((state)=>{
//     return state
//    }) 
//     //edit profile
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//     //modal add profile
//   const [show2, setShow2] = useState(false);
//   const handleClose2 = () => setShow2(false);
//   const handleShow2 = () => setShow2(true);

//   const showing = (profileId) => {
//     handleShow()
//     setIdshow(profileId)
//   }
//     useEffect(()=>{
//        loadUsers()
//     },[])

//     function loadUsers() {
//       axios.get('http://localhost:3001/profile/one', {
//         headers: {
//           Authorization: token
//         }
//       })
//         .then(result => {
//           setUsers([...result.data])
//           console.log('check users' ,users)
//         }
//         )
  
//     }
    
    

//     // }
  
//     // //edit profile
//     const handleEditProfile = (event) => {
//       event.preventDefault()
//       let profileId=idshow;
//        axios.put(`http://localhost:3001/profile/${profileId}`,{userName},{
//         headers:{
//           Authorization: token
//         }
//       }).then((res) =>{
//         console.log('reponse edit' ,res.data)
//         // setUsers(res.data)
//       })
//       .catch((error) => console.log(error))
  
//           handleClose();
//          loadUsers()
//     }
//     //delete profile
//     const deleteProfile =(profileId) =>{
//      axios.delete(`http://localhost:3001/profile/${profileId}`)
//       .then((res)=>{
//         const newData = users.filter(user => user._id !== profileId)
//         setUsers(newData)
//       })
//       .catch(error=>console.log(error))
//     }
   
      
//     return (
        
//         <>
//         <section className="contain">
//  <div className="main">
//    <h3 className="heading">
//      <span>Who's Watching?</span>
//    </h3>
 
//        <div className="container">
//        <div className="card" style={{opacity:".7"}} >
//       <img src={userImg}/>
     
//       {/* <Icon icon="akar-icons:edit"  inline={true} style={{fontSize:'2rem' ,position:'absolute'}} /> */}
     
//         <div className="details">
//           <h3>{userdata.FirstName}</h3>
         
//       </div>
//        </div>
//                { users?.length !== 0 ? (
//                   users?.map((user) => (
//       <div className="card" key={user._id}  style={{opacity:".7"}} >
//       <img src={profileImg} />
//         <div className="details">
//           <h3>{user.userName}</h3>
         
          
//           <div className="social-links">
//             {/* <Link to={`/users/${user._id}`}>
//              <Icon icon="carbon:view"  inline={true} style={{fontSize:'2rem', color:"green"}} />
//             </Link> */}
//             {/* <Link to={`/users/edit/${user._id}`}> */}
//             <Button onClick={() => showing(user._id)} style={{border:"1px solid #12C6B2" ,fontSize:"10px",color:"#12C6B2"}} className="btn btn-primary btn-outline-light mx-3">
//             <Icon icon="akar-icons:edit"  inline={true} style={{fontSize:'2rem'}}  />Edit
//             </Button>
//             <Button onClick={() => {
//                           if (window.confirm('Do you want to delete this user?')) {
//                             deleteProfile(user._id)
//                           }
//                         }} style={{border:"1px solid #12C6B2" ,fontSize:"10px",color:"#12C6B2"}}>
//           <Icon icon="ant-design:delete-outlined"  inline={true} style={{fontSize:'2rem'}}  />Delete User
//             </Button>
//           </div>
         
//           {/* <Button  className='btn btn-outline-light' style={{ color: "#12C6B2", textDecoration: "none" ,fontSize:"100px", outline:"light" }} >
//           <StyledLink to='/users/edit'>
//               edit
//           </StyledLink>
       
//       </Button> */}
//           {/* <Link className='btn btn-primary mr-2' >View</Link>
//           <Link className='btn btn-outline-primary mr-2' >Edit</Link>
//           <Link className='btn btn-danger' >Delete</Link> */}
          
       
//           {/* {children} */}
//           <Modal show={show} onHide={handleClose} animation={false} className="modal">
//                     <Modal.Header closeButton className="modalheader">
//                       <Modal.Title  > Edit your profile</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                       {/* <div className="form-group">
//                         <label style={{ "color": "black" ,fontSize: "25px" }}>User Name</label>
//                         <input type="text" className="form-control" value={userName}  onChange={(e) => setName(e.target.value)} name="userName" />
//                       </div> */}
//                       <div className="container border rounded bg-white">
//   <div className="row">
//   <div className="md-10 text-center border-right px-2">
  
//       <div className="d-flex flex-column align-items-center text-center  ">
//         <img
//           className="mt-5 mx-5"
//           src={profileImg}
//           width={90}
//         />
//         <span className="font-weight-bold">
//         {user.userName}
//         </span>
//         <span className="text-black-50">{userdata.Email}</span>
//       </div>
    
//         </div>
   
//     <div className="col-md-6 ">
//       <div className="p-3 py-5">
//         {/* <div className="d-flex justify-content-between align-items-center mb-3">
//           <h6 className="text-right">Edit your profile</h6>
//         </div> */}
//         <div className="row mt-2 ">
//           <div className="col-md-12">
//             <label className="labels">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="first name"
//               value={userName}
//               onChange={(e) => setName(e.target.value)} name="userName"
              
//             />
//           </div>
//           {/* <div className="col-md-6">
//             <label className="labels">Surname</label>
//             <input
//               type="text"
//               className="form-control"
//               defaultValue="Fdawy"
//               placeholder="Surname"
//             />
//           </div> */}
//         </div>
//         <div className=" mt-3 ">
//           <label>Language</label>
//         <div className="col-md-12">
//         <select className="selectpicker" data-width="fit">
//   <option data-content='<span class="flag-icon flag-icon-us"></span> English'>
//     English
//   </option>
//   <option data-content='<span class="flag-icon flag-icon-eg"></span> Arabic'>
//     Arabic
//   </option>
// </select>

//         </div>
//         </div>
       
        
//       </div>
//     </div>
//     <div className="row mt-6 mx-3">
          
//             <label className="labels">Autoplay Controls</label>
          
//   <div className="form-check">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       defaultValue=""
//       id="flexCheckDefault"
//     />
//     <label className="form-check-label" htmlFor="flexCheckDefault">
//     Autoplay next episode in a series on all devices
//     </label>
//   </div>
//   <div className="form-check">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       defaultValue=""
//       id="flexCheckChecked"
//       defaultChecked=""
//     />
//     <label className="form-check-label" htmlFor="flexCheckChecked">
//     Autoplay previews while browsing on all devices
//     </label>
//   </div>     
//         </div>
//   </div>
// </div>
//                     </Modal.Body>

//                     <Modal.Footer className="modalheader">
//                       <Button variant="secondary" className="btn btn-primary btn-outline-light mx-3" onClick={handleClose} style={{border:"1px solid #12C6B2" ,fontSize:"15px",color:"#12C6B2"}}>
//                         Close
//                       </Button>
//                       <Button className="btn btn-primary btn-outline-light" onClick={(e)=>handleEditProfile(e)} style={{border:"1px solid #12C6B2" ,fontSize:"15px",color:"#12C6B2"}}>
//                         Save Changes
//                       </Button>
//                     </Modal.Footer>
//                   </Modal>
//       </div>
//        </div>
//                   ))
//               ) : (
//                   <div></div>
//               )}
                  
//           </div>
          
//           </div>
    
//           </section>
                 
//             </>
//     );
// }

// export default NewProfile ;