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
import "./Account.css";
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

function UserInfo() {
  const [userdata, setuserdata] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  const storagePhoneNumber = JSON.parse(
    `${localStorage.getItem("userdata")}`
  ).phoneNumber;
  console.log(storagePhoneNumber);
  console.log(state);
  const token = JSON.parse(`${localStorage.getItem("token")}`);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = JSON.parse(`${localStorage.getItem("token")}`);
  //   console.log(token);
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `${token}`,
  //     },
  //   };
  // let storagePhoneNumber = JSON.parse(
  //   `${localStorage.getItem("userdata")}`
  // ).phoneNumber;

  useEffect(() => {
    const token = JSON.parse(`${localStorage.getItem("token")}`);
    console.log(token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    // const getuser = async () => {
    axios
      .get("http://localhost:3001/user/getuser", config)
      .then((response) => {
        console.log(response);
        dispatch({ type: "FetchSucceded", payload: response.data });
      })
      .catch((error) => {
        console.log({ error });
        dispatch({ type: "FetchFailed" });
      });
    // };
    // getuser();
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

        <hr></hr>
        <br></br>
        {/* First Section */}

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} md={3}>
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
                  {/* {state.data.phoneNumber} */}

                  {storagePhoneNumber}
                </span>
              )}

              {/* <br></br>
              <br></br> */}
              {/* {state.loading ? (
                "loading"
              ) : (
                <span
                  sx={{
                    display: "block",
                    textAlign: "justify",
                  }}
                >
                  {state.data.password}
                </span>
              )} */}
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

              <Link to="/ChangePassword">
                <Typography sx={{ color: "#12C6B2" }}>
                  Change password
                </Typography>
              </Link>
              <br></br>
              <Link to="/ChangeData">
                <Typography sx={{ color: "#12C6B2" }}>
                  Change Phone Number
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <hr></hr>

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
              {state.loading ? (
                "loading"
              ) : (
                <span>
                  <img src={masterCard} alt="master" />
                  **** **** **** 9014
                  {/* {state.data.body} */}
                </span>
              )}
              <br></br>
              <br></br>
              <span>Your next billing date is June 14, 2022.</span>
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
              <Link to="/myaccount">
                <Typography sx={{ color: "#12C6B2" }}>
                  Manage payment info
                </Typography>
              </Link>
              <br></br>
              <Link to="/myaccount">
                <Typography sx={{ color: "#12C6B2" }}>
                  Add backup payment method
                </Typography>
              </Link>
              <br></br>
              <Link to="/myaccount">
                <Typography sx={{ color: "#12C6B2" }}>
                  Billing details
                </Typography>
              </Link>
              <br></br>
              <Link to="/myaccount">
                <Typography sx={{ color: "#12C6B2" }}>
                  Change billing day
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <br></br>
        <hr></hr>
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
              <Link to="/myaccount">
                <Typography sx={{ color: "#12C6B2" }}>
                  Redeem gift card or promo code
                </Typography>
              </Link>
              <br></br>
              <Link to="/myaccount">
                <Typography sx={{ color: "#12C6B2" }}>
                  Where to buy gift cards
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <br></br>
        <hr></hr>
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
              <span>Premium </span>
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
        <br></br>
        <hr></hr>
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
                "& hr": {
                  color: "white",
                  backgroundColor: "white",
                },
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            >
              <h4>PROFILE & </h4> <h4>PARENTAL CONTROLS</h4>
            </Box>
          </Grid>
          <Grid item xs={4} md={4}>
            <Box
              sx={{
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "justify",
                  lineHeight: "2px",
                }}
              >
                <h6 className="bold">Mark</h6>
                <span>All Maturity Ratings</span>
              </Box>

              <br></br>
              <hr></hr>

              <Box
                sx={{
                  textAlign: "justify",
                  lineHeight: "2px",
                }}
              >
                <h6 className="bold">AAGOOGLE</h6>
                <span>All Maturity Ratings</span>
              </Box>
              <br></br>
              <hr></hr>

              <Box
                sx={{
                  textAlign: "justify",
                  lineHeight: "2px",
                }}
              >
                <h6 className="bold">Dodo</h6>
                <span>All Maturity Ratings</span>
              </Box>
              <br></br>
              <hr></hr>
              <Box
                sx={{
                  textAlign: "justify",
                  lineHeight: "2px",
                }}
              >
                <h6 className="bold">Waguih</h6>
                <span>All Maturity Ratings</span>
              </Box>
              <br></br>
              <hr></hr>
              <Box
                sx={{
                  textAlign: "justify",
                  lineHeight: "2px",
                }}
              >
                <h6 className="bold">Boudy</h6>
                <span>All Maturity Ratings</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} md={4}>
            {/* <div className="box box3">
      </div> */}
            <Box
              sx={{
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            ></Box>
          </Grid>
        </Grid>
        <br></br>
        <hr></hr>
        <br></br>
        {/* Six Section */}

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
              <Link to="/myaccount">
                <Typography sx={{ color: "#12C6B2" }}>
                  Test participation
                </Typography>
              </Link>
              <br></br>
              <Link to="/myaccount">
                <Typography sx={{ color: "#12C6B2" }}>
                  Manage download devices
                </Typography>
              </Link>
              <br></br>
              <Link to="/myaccount">
                <Typography sx={{ color: "#12C6B2" }}>
                  Recent device streaming activity
                </Typography>
              </Link>
              <br></br>
              <Link to="/myaccount">
                <Typography sx={{ color: "#12C6B2" }}>
                  Sign out of all devices
                </Typography>
              </Link>
              <br></br>
              <Link to="/myaccount">
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
export default UserInfo;
