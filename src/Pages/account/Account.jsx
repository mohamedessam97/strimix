import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { TextField } from "@mui/material";


export default function Account() {
  const token = localStorage.getItem('token')
  const use =JSON.parse(localStorage.getItem('user'))
  const [user, setUser] = useState(null)
  const { userId } = useParams()
  useEffect(()=>{
    const fetch =async ()=>{

      const res = await axios.get(`http://localhost:3001/user/${use._id}`);
      setUser(res.data)
    }
    fetch();
  })

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setUser({ ...user, [e.target.name]: value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:3001/user/${userId}`, user);
    console.log(res);

  };

  return (
    <Container maxWidth="md"

      sx={{
        backgroundColor:"#626262a8",
        "& .MuiFilledInput-root:active": {
          background: "red"
        }
        ,
        marginTop: "80px",
        color: "#FFFFFF",
        // backgroundImage:
          // "linear-gradient(to bottom, rgba(7, 9, 17, 0.9) 4.88%, rgba(7, 9, 17, 0.6) 34.09%, rgba(7, 9, 17, 0.5) 99.57%)",
        paddingBottom: '3rem',
        marginBottom: '2rem'
      }}>
      {user && <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Account</h1>
        </div>
        {user && <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">{user.userName}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Card Number :{user.cardNumber}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Plan : {user.plan}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+20{user.PhoneNumber}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{user.email}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <TextField
                    autoComplete="off"
                    id="text"
                    label="User Name"
                    color="primary"
                    type='text'
                    variant="filled"
                    InputLabelProps={{ style: { color: "white" } }}
                    sx={{
                      width: { lg: "350px", md: '300px', sm: 'auto', xs: 'auto' }, marginTop: "0.8rem",
                      border:"2px solid white" , borderRadius:"10px"
                    }}
                    onChange={handleChange}
                    value={user.userName}
                  />
                  <TextField
                    autoComplete="off"
                    id="text"
                    label="Email"
                    color="primary"
                    type='Email'
                    variant="filled"
                    InputLabelProps={{ style: { color: "white" } }}
                    sx={{
                      width: { lg: "350px", md: '300px', sm: 'auto', xs: 'auto' }, marginTop: "0.8rem",
                      border:"2px solid white" , borderRadius:"10px"
                    }}
                    onChange={handleChange}
                    value={user.email}
                  />
                  <TextField
                    autoComplete="off"
                    id="text"
                    label="Phone"
                    color="primary"
                    type='text'
                    variant="filled"
                    InputLabelProps={{ style: { color: "white" } }}
                    sx={{
                      width: { lg: "350px", md: '300px', sm: 'auto', xs: 'auto' }, marginTop: "0.8rem",
                      border:"2px solid white" , borderRadius:"10px"
                    }}
                    onChange={handleChange}
                    value={user.PhoneNumber}
                  />
                  <TextField
                    autoComplete="off"
                    id="text"
                    label="Card Number"
                    color="primary"
                    type='text'
                    variant="filled"
                    InputLabelProps={{ style: { color: "white" } }}
                    sx={{
                      width: { lg: "350px", md: '300px', sm: 'auto', xs: 'auto' }, marginTop: "0.8rem",
                      border:"2px solid white" , borderRadius:"10px"
                    }}
                    onChange={handleChange}
                    value={user.cardNumber}
                  />
                  <TextField
                    autoComplete="off"
                    id="text"
                    label="Security Code"
                    color="primary"
                    type='text'
                    variant="filled"
                    InputLabelProps={{ style: { color: "white" } }}
                    sx={{
                      width: { lg: "350px", md: '300px', sm: 'auto', xs: 'auto' }, marginTop: "0.8rem",
                      border:"2px solid white" , borderRadius:"10px"
                    }}
                    onChange={handleChange}
                    value={user.securityCode}
                  />
                  <TextField
                    autoComplete="off"
                    id="text"
                    label="Plan"
                    color="primary"
                    type='text'
                    variant="filled"
                    InputLabelProps={{ style: { color: "white" } }}
                    sx={{
                      width: { lg: "350px", md: '300px', sm: 'auto', xs: 'auto' }, marginTop: "0.8rem",
                      border:"2px solid white" , borderRadius:"10px"
                    }}
                    onChange={handleChange}
                    value={user.plan}
                  />
                </div>



              </div>
              <div className="userUpdateRight">
                <button className="userAddButton" onClick={handleSubmit}>Update</button>
              </div>
            </form>
          </div>
        </div>}
      </div>}
    </ Container>
  );
}
