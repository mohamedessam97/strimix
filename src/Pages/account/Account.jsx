import { Container, Grid, Box, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import LoadingButton from '@mui/lab/LoadingButton';
import { useReducer } from "react";
import { useEffect } from "react";
import masterCard from "../../assets/Group 51.png";
import "./account.css";
import axios from "axios";

const initialState = {
  loading: true,
  data: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FetchSucceded":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FetchFailed":
      return {
        loading: false,
        data: "",
        error: "Data Loading Failed",
      };
    default:
      return state;
  }
};

function Account() {
  const [users, setUsers] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  const [userdata, setuserdata] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  let storagePhoneNumber = JSON.parse(
    `${localStorage.getItem("userdata")}`
  ).PhoneNumber;
  // console.log(JSON.parse(localStorage.getItem("userdata")).PhoneNumber);
  // let storageEmail = JSON.parse(
  //   `${localStorage.getItem("Authentication")}`
  // ).email;
  // let storageCardNumber = JSON.parse(
  //   `${localStorage.getItem("userdata")}`
  // ).cardNumber;
  // console.log(JSON.parse(localStorage.getItem("Authentication")).email);
  // let storageName = JSON.parse(`${localStorage.getItem("user")}`).userName;
  // console.log(JSON.parse(localStorage.getItem("user")).userName);
  // console.log(state);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = JSON.parse(`${localStorage.getItem("token")}`);
  // console.log(token);
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `${token}`,
  //     },
  //   };

  useEffect(() => {
    const token = JSON.parse(`${localStorage.getItem("token")}`);
    console.log(token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    const getuser = async () => {
      await axios
        .get("http://localhost:3001/user/getuser", config)
        .then((response) => {
          console.log(response);
          dispatch({ type: "FetchSucceded", payload: response.data });
        })
        .catch((error) => {
          console.log({ error });
          dispatch({ type: "FetchFailed" });
        });
    };
    getuser();
  }, []);

  useEffect(() => {
    const token = JSON.parse(`${localStorage.getItem("token")}`);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJcIjYyYzQ5ZGMyNTgzNGNhMDNjZGQyZjk1Y1wiIiwidXNlck5hbWUiOiJcImdmc1wiIiwiZW1haWwiOiJcImdmc0BnbWFpbC5jb21cIiIsImlzQWRtaW4iOiJmYWxzZSIsImlzQWN0aXZlIjoiW10iLCJpYXQiOjE2NTcwNTI2MTF9.zBZB3lA-iHiUMztA8-bYV7Mz-d5Q78ecNxrTVP8OwuY"}`,
      },
    };
    axios.get("http://localhost:3001/profile/one", config).then((result) => {
      setUsers(result.data);
      console.log(users);
      console.log(result.data);
    });
  }, []);

  return (
    <>
      <Container
        sx={{
          backgroundColor: "#333",
          color: "white",
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            "& h2": {
              marginTop: "20px",
              paddingTop: "20px",
            },

            backgroundColor: "transparent",
            marginLeft: "25px",
          }}
        >
          <h2>Account</h2>
        </Box>

        <Typography
          sx={{
            backgroundColor: "white",
          }}
        >
          {" "}
          <hr></hr>
        </Typography>
        <br></br>
        {/* First Section */}

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6} md={3}>
            <Box
              sx={{
                "& h4": {
                  marginTop: "0px",
                },
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            >
              <h4>MEMBERSHIP & BILLING</h4>
              <button type="submit">CANCEL MEMBERSHIP</button>
            </Box>
          </Grid>

          <Grid item xs={4} md={4}>
            <Box
              sx={{
                backgroundColor: "transparent",
                textAlign: "justify",
              }}
            >
              {state.loading ? (
                "loading"
              ) : (
                <span
                  sx={{
                    display: "block",
                    textAlign: "justify",
                  }}
                >
                  {/* {JSON.parse(localStorage.getItem("Authentication")).email} */}
                  {/* {storageEmail} */}
                  {state.data.email}
                </span>
              )}
              <br></br>
              <br></br>
              {state.loading ? (
                "loading"
              ) : (
                <span
                  sx={{
                    display: "block",
                    textAlign: "justify",
                  }}
                >
                  {storagePhoneNumber ? storagePhoneNumber : ""}
                </span>
              )}

              <br></br>
              <br></br>
              <span
                sx={{
                  display: "block",
                  textAlign: "justify",
                }}
              >
                {"***************"}
              </span>
              <br></br>
            </Box>
          </Grid>
          {/* <div className="box box3"> */}
          <Grid item xs={4} md={3}>
            <Box
              sx={{
                "& a": {
                  textDecoration: "none",
                },
                backgroundColor: "transparent",
                textAlign: "justify",
              }}
            >
              <Link to="/ChangeData">
                <Typography sx={{ color: "#12C6B2" }}>
                  Change account data
                </Typography>
              </Link>
              <br></br>
              <Link to="/ChangeData">
                <Typography sx={{ color: "#12C6B2" }}>
                  Change phone number
                </Typography>
              </Link>
              <br></br>
              <Link to="/ChangePassword">
                <Typography sx={{ color: "#12C6B2" }}>
                  Change password
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Typography
          sx={{
            backgroundColor: "white",
          }}
        >
          {" "}
          <hr></hr>
        </Typography>

        {/* Second Section */}

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} md={3}>
            <Box
              sx={{
                backgroundColor: "transparent",
                textAlign: "justify",
              }}
            ></Box>
          </Grid>

          <Grid item xs={4} md={4}>
            <Box
              sx={{
                backgroundColor: "transparent",
                textAlign: "justify",
              }}
            >
              {/* {state.loading ? (
                "loading"
              ) : ( */}
              <span>
                <img
                  src={masterCard}
                  alt="master"
                  style={{ marginRight: "10px" }}
                />
                {"*************"}
                {/* {storageCardNumber} */}
                {/* {state.data.body} */}
              </span>
              <br></br>
            </Box>
          </Grid>
          {/* <div className="box box3"> */}
          <Grid item xs={4} md={3}>
            <Box
              sx={{
                "& a": {
                  textDecoration: "none",
                },
                backgroundColor: "transparent",
                textAlign: "justify",
              }}
            >
              <Link to="account">
                <Typography sx={{ color: "#12C6B2" }}>
                  Manage payment info
                </Typography>
              </Link>
              <br></br>
              <Link to="account">
                <Typography sx={{ color: "#12C6B2" }}>
                  Add backup payment method
                </Typography>
              </Link>
              <br></br>
              <Link to="account">
                <Typography sx={{ color: "#12C6B2" }}>
                  Billing details
                </Typography>
              </Link>
              <br></br>
              <Link to="account">
                <Typography sx={{ color: "#12C6B2" }}>
                  Change billing day
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <br></br>
        <Typography
          sx={{
            backgroundColor: "white",
          }}
        >
          {" "}
          <hr></hr>
        </Typography>
        <br></br>

        {/* Third Section */}

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} md={4}>
            <Box
              sx={{
                backgroundColor: "transparent",
                textAlign: "justify",
              }}
            ></Box>
          </Grid>
          {/* <div className="box box2"></div> */}
          <Grid item xs={4} md={3}>
            <Box
              sx={{
                backgroundColor: "transparent",
                textAlign: "justify",
              }}
            ></Box>
          </Grid>
          <Grid item xs={4} md={3}>
            {/* <div className="box box3"> */}
            <Box
              sx={{
                "& a": {
                  textDecoration: "none",
                },
                backgroundColor: "transparent",
                textAlign: "justify",
              }}
            >
              <Link to="account">
                <Typography sx={{ color: "#12C6B2" }}>
                  Redeem gift card or promo code
                </Typography>
              </Link>
              <br></br>
              <Link to="account">
                <Typography sx={{ color: "#12C6B2" }}>
                  Where to buy gift cards
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <br></br>
        <Typography
          sx={{
            backgroundColor: "white",
          }}
        >
          {" "}
          <hr></hr>
        </Typography>
        <br></br>

        {/* Fourth Section */}

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} md={4}>
            <Box
              sx={{
                "& h4": {
                  marginTop: "0px",
                },
                backgroundColor: "transparent",
                textAlign: "center",
                direction: "row",
              }}
            >
              <h4>PLAN DETAILS</h4>
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box
              sx={{
                backgroundColor: "transparent",
                textAlign: "justify",
              }}
            >
              <span
                sx={{
                  marginBottom: "30px",
                }}
              >
                Premium{" "}
              </span>
              <button type="submit">ULTRA HD</button>
            </Box>
          </Grid>
          <Grid item xs={4} md={4}>
            {/* <div className="box box3"> */}
            <Box
              sx={{
                "& a": {
                  textDecoration: "none",
                },
                backgroundColor: "transparent",
                textAlign: "justify",
              }}
            >
              <Link to="/ChoosePlan">
                <Typography sx={{ color: "#12C6B2" }}>Change plan</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Typography
          sx={{
            backgroundColor: "white",
          }}
        >
          {" "}
          <hr></hr>
        </Typography>
        <br></br>

        {/* Fifth Section */}

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} md={4}>
            <Box
              sx={{
                "& h4": {
                  marginTop: "0px",
                },
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            >
              <h4>PROFILE & </h4> <h4>PARENTAL CONTROLS</h4>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box
              sx={{
                textAlign: "justify",
                lineHeight: "2px",
              }}
            >
              <Box style={{ marginBottom: "30px" }}>
                <img
                  src={state.data.avatar}
                  style={{ width: "50px", marginRight: "10px" }}
                />

                <span>{state.data?.userName}</span>
                <Typography
                  sx={{
                    backgroundColor: "white",
                  }}
                >
                  {" "}
                  <hr></hr>
                </Typography>
              </Box>
              {users?.map((user) => (
                <Box key={user._id} style={{ marginBottom: "30px" }}>
                  <img
                    src={user.avatar}
                    style={{ width: "50px", marginRight: "10px" }}
                  />

                  <span>{user.userName ? user.userName : "user"}</span>

                  <br />
                  <br />
                  <Typography
                    sx={{
                      backgroundColor: "white",
                    }}
                  >
                    {" "}
                    <hr></hr>
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        {/* Six Section */}
        <Typography
          sx={{
            backgroundColor: "white",
          }}
        >
          {" "}
          <hr></hr>
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} md={4}>
            <Box
              sx={{
                "& h4": {
                  marginTop: "0px",
                },
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            >
              <h4>SETTINGS</h4>
            </Box>
          </Grid>
          <Grid item xs={4} md={4}>
            <Box
              sx={{
                "& a": {
                  textDecoration: "none",
                },
                backgroundColor: "transparent",
                textAlign: "justify",
              }}
            >
              <Link to="account">
                <Typography sx={{ color: "#12C6B2" }}>
                  Test participation
                </Typography>
              </Link>
              <br></br>
              <Link to="account">
                <Typography sx={{ color: "#12C6B2" }}>
                  Manage download devices
                </Typography>
              </Link>
              <br></br>
              <Link to="account">
                <Typography sx={{ color: "#12C6B2" }}>
                  Recent device streaming activity
                </Typography>
              </Link>
              <br></br>
              <Link to="account">
                <Typography sx={{ color: "#12C6B2" }}>
                  Sign out of all devices
                </Typography>
              </Link>
              <br></br>
              <Link to="account">
                <Typography sx={{ color: "#12C6B2" }}>
                  Download your personal information
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={4} md={4}>
            {/* <div className="box box3"></div> */}
            <Box
              sx={{
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            ></Box>
          </Grid>
        </Grid>
        <br></br>
      </Container>
    </>
  );
}
export default Account;
