import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux'
import './ProfilesCard.css'
//import './NewProfile.css'
import userImg from './images/girl.jpg';
import { Link } from "react-router-dom";
import Types from "prop-types"; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import styled from "@emotion/styled";
import { Icon } from '@iconify/react';
 import { Card, Col, ListGroup, Row, Table, Modal, Dropdown, DropdownButton } from 'react-bootstrap'
// import { BiDotsVerticalRounded } from 'react-icons/bi'
import { RiUserAddLine } from "react-icons/ri";
import * as IconName from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa"
import { useNavigate} from "react-router-dom";

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
    marginTop: "20px",
    marginLeft:"38rem",
    "&:hover": {
      backgroundColor: "#12C6B2",
      color:"white"
    },
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
  let token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).token : ''
  console.log(JSON.stringify(token));

let config = {
    headers:{
         Authorization: token ? token : ''  
    }
  };
  console.log(token)
const NewProfile=(props)=> {
  // const accountOwner=useSelector((state)=>{
  //   return state
  //  })]

  const [users,setUsers]=useState([])
  // const token = localStorage.getItem("token");
  const id = localStorage.getItem("id"); //user id
  const [userName,setName]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [idshow, setIdshow] = useState(""); //profile id

  let history = useNavigate();
    // const [user, setUser] = useState({
    //   name: "",
    //   email: "",  
    //  password:""
    // });
  
   // const { name, email,password} = user;
    
    // const onInputChange = e => {
    //   setUser({ ...user, [e.target.name]: e.target.value });
    // };
  
    // const onSubmit = async e => {
    //   e.preventDefault();
    //   await axios.post("http://localhost:3000/users", user);
    //   history.push("/");
    // };

    //edit profile
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    //modal add profile
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const showing = (profileId) => {
    handleShow()
    setIdshow(profileId)
  }
    useEffect(()=>{
       loadUsers()
    },[])

    async function loadUsers() {
      await fetch('http://localhost:3001/profile/one', {
        method:"get",
        headers: {
          "Authorization": token
        }
      })
        .then(resp => resp.json())
        .then(result => {
          setUsers(result.data)
          console.log(result)
        }
        )
  
    }
    // const loadUsers= async()=>{
    //     const result=await axios.get('http://localhost:3001/profile/one')
    //     console.log(result)
    //     setUsers(result.data)
    // }

    // const createProfile= ({userName , Navigate} )=>{
    //   e.preventDefault();
    //   await axios.post("http://localhost:3001/profile",{name: userName},config)
    //   .then( (response) => {
    //    localStorage.setItem("Authentication", JSON.stringify({userName:user.userName}))
    //     localStorage.setItem('token' , JSON.stringify(response.data.token))
    //    config.headers.Authorization = JSON.parse(localStorage.getItem('token'))})
    
    //           })
    //   }
    
    // }
    const createProfile=async (e)=>{
      let user={userName}

      e.preventDefault();
      
      console.warn("user", user)
      const res = await axios.post('http://localhost:3001/profile' , user,{
        headers:{
          Authorization: token
        }
      })
      console.log(res);
  
    //   fetch('http://localhost:3001/profile', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: token
    //   },
    //   body: JSON.stringify(user)
    // })
    //   .then((result => {
    //     console.warn(result)
    //     console.log(result.data)
    //     setUsers(users)
    //     loadUsers()
    //   }
    //   ))
      handleClose2()
  
    }
  
    // //edit profile
    const handleEditProfile = () => {
      let userId = idshow
      console.log(userId)
      let user = { userName }
      console.log(user)
  
      fetch(``,
        {
          method: "PUT",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "authorization": `${token}`
          },
          body: JSON.stringify(user)
        }).then(res => res.json())
        .then(result => {
          console.log(result)
  
          handleClose();
          loadUsers();
        })
    }
    //delete profile
    // const deleteUser =async id =>{
    //   await axios.delete(`http://localhost:3000/users/${id}`)
    //    loadUsers();
    // }
    const deleteProfile = () => {

        console.log('delete')
        //     fetch(``, {
        //   method: "delete",
        //   headers: {
        //     "authorization": `${token}`
        //   },
        // }).then(res => res.json())
        //   .then(result => {
        //     console.log(result)
        //     const newData = users.filter(item => item._id !== p)
        //     setUsers(newData)
        //   }).catch(err => console.log(err))
      }
      
    return (
        
        <>
        <section className="contain">
 <div className="main">
   <h3 className="heading">
     <span>Who's Watching?</span>
   </h3>
 
       <div className="container">
               { users ? (
                  users.map((user) => (
      <div className="card">
      <img src={userImg} />
        <div className="details">
          <h3>{user.name}</h3>
         
          
          <div className="social-links">
            <Link to={`/users/${user.id}`}>
             <Icon icon="carbon:view" color="green" inline={true} style={{fontSize:'2rem'}} />
            </Link>
            <Link to=''>
            <Icon icon="akar-icons:edit" color="lightblue" inline={true} style={{fontSize:'2rem'}} onClick={() => showing(user.id)}/>
            </Link>
            <Link to=''>
            <Icon icon="ant-design:delete-outlined" color="red" inline={true} style={{fontSize:'2rem'}}  onClick={() => {
                          if (window.confirm('Do you want to delete this user?')) {
                            deleteProfile(user.id)
                          }
                        }} />
            </Link>
          </div>
         
          {/* <Button  className='btn btn-outline-light' style={{ color: "#12C6B2", textDecoration: "none" ,fontSize:"100px", outline:"light" }} >
          <StyledLink to='/users/edit'>
              edit
          </StyledLink>
       
      </Button> */}
          {/* <Link className='btn btn-primary mr-2' >View</Link>
          <Link className='btn btn-outline-primary mr-2' >Edit</Link>
          <Link className='btn btn-danger' >Delete</Link> */}
          
       
          {/* {children} */}
      </div>
       </div>
                  ))
              ) : (
                  <div style={{color:"white"}}>Looooooooading...</div>
              )}
              <Button onClick={() => handleShow2()} className='btn btn-outline-light' style={{ color: "#12C6B2", textDecoration: "none" ,fontSize:"100px", outline:"light" }} >
          {/* <Link to='/users/add'> */}
              <Icon icon="carbon:add-alt" />
          {/* </Link> */}
       
      </Button>
      
                  
          </div>
          
          </div>
          {/* <LargeButton size="large"  sx={{  minWidth: {lg:'450px' ,md:'300px' , sm:'auto' , xs:'auto'} ,   height: { md:'64px' , sm:'40px' , sx:'auto'} ,  padding: { lg:"0.75rem 25.333px" , md:'0.5rem 20px' , sm:'0.3rem 15px' , sx:'0.1rem 5px' } }} >
      <StyledLink
        to="/ManageProfile"
        style={{ color: "#12C6B2", textDecoration: "none" }}
      >
       Manage Profiles
      </StyledLink>
    </LargeButton> */}
    
          </section>
          <Modal show={show2} onHide={handleClose2} animation={false}>
                    <Modal.Header closeButton className="modalheader">
                      <Modal.Title>Create Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
              {/* <form onSubmit={e => onSubmit(e)}>     */}
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={userName}
              //onChange={e => onInputChange(e)}
               onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          {/* <button className="primary">Add Profile</button> */}
       
  {/* </form> */}
                    </Modal.Body>
                    <Modal.Footer className="modalheader">
                      <Button variant="secondary" onClick={handleClose2}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={createProfile} >
                        Save Changes
                      </Button>
                    </Modal.Footer>
               
                  </Modal>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton className="modalheader">
                      <Modal.Title  > Edit User Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="form-group">
                        <label style={{ "color": "black" ,fontSize: "25px" }}>User Name</label>
                        <input type="text" className="form-control" value={userName}  onChange={(e) => setName(e.target.value)} name="teamName" />
                      </div>
                      <div className="form-group">
                        <label style={{ "color": "black" ,fontSize: "25px"}} >User Email</label>
                        <textarea rows="2" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} name="teamDescription"></textarea>
                      </div>
                    </Modal.Body>

                    <Modal.Footer className="modalheader">
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <button className="btn btn-primary btn-outline-light" onClick={() => handleEditProfile()}>
                        Save Changes
                      </button>
                    </Modal.Footer>
                  </Modal>
            </>
    );
}

export default NewProfile ;


// <section className="contain">
// <div className="main">
//   <h3 className="heading">
//     <span>Who's Watching?</span>
//   </h3>
 
//       <div className="container">
//               { users ? (
//                   users.map((user) => (
//       <div className="card">
//       <img src={userImg} />
//         <div className="details">
//           <h3>{user.name}</h3>
//           <p>
//           <Button  className='btn btn-outline-light' style={{ color: "#12C6B2", textDecoration: "none" ,fontSize:"100px", outline:"light" }} >
//           <StyledLink to='/users/edit'>
//               edit
//           </StyledLink>
       
//       </Button>
//           {/* <Link className='btn btn-primary mr-2' >View</Link>
//           <Link className='btn btn-outline-primary mr-2' >Edit</Link>
//           <Link className='btn btn-danger' >Delete</Link> */}
//           </p>
       
//           {/* {children} */}
//       </div>
//        </div>
//                   ))
//               ) : (
//                   <div>Looooooooading...</div>
//               )}
//               <Button  className='btn btn-outline-light' style={{ color: "#12C6B2", textDecoration: "none" ,fontSize:"100px", outline:"light" }} >
//           <Link to='/users/add'>
//               <Icon icon="carbon:add-alt" />
//           </Link>
       
//       </Button>
//           </div>
          
//           </div>
//           <LargeButton size="large"  sx={{  minWidth: {lg:'450px' ,md:'300px' , sm:'auto' , xs:'auto'} ,   height: { md:'64px' , sm:'40px' , sx:'auto'} ,  padding: { lg:"0.75rem 25.333px" , md:'0.5rem 20px' , sm:'0.3rem 15px' , sx:'0.1rem 5px' } }} >
//       <StyledLink
//         to="/ManageProfile"
//         style={{ color: "#12C6B2", textDecoration: "none" }}
//       >
//        Manage Profiles
//       </StyledLink>
//     </LargeButton>
    
//           </section>
          