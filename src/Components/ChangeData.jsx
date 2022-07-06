import { Box, TextField, Typography } from "@mui/material";
import {
  FormHelperText,
  Button,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// import styled from "@emotion/styled";
// import LoadingButton from "@mui/lab/LoadingButton";

const ChangeData = () => {
  const Email_REGEX =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const Phone_REGEX = /^[0-9]\d{3}\d{3}\d{4}/;
  // let storageEmail = JSON.parse(
  //   `${localStorage.getItem("Authentication")}`
  // ).email;
  let storagePhoneNumber = JSON.parse(
    `${localStorage.getItem("userdata")}`
  ).phoneNumber;
  let storageData = JSON.parse(`${localStorage.getItem("userdata")}`);
  const [newEmail, setNewEmail] = useState({ email: "" });
  const [newPhone, setNewPhone] = useState({ phone: "" });
  const [confChange, setConfChange] = useState(false);

  let regxNewEmail = Email_REGEX.test(newEmail.email);
  let regxNewPhone = Phone_REGEX.test(newPhone.phone);
  // console.log(regxNewEmail);
  // console.log(regxNewPhone);

  const handleNewEmail = (e) => {
    const { name, value } = e.target;
    setNewEmail((newEmail) => ({ ...newEmail, [name]: value }));
    console.log(newEmail);
  };
  const handleNewPhone = (e) => {
    const { name, value } = e.target;
    setNewPhone({ ...newPhone, [name]: value });
    console.log(newPhone);
  };
  let storageAuth = JSON.parse(`${localStorage.getItem("Authentication")}`);

  const handleSubmitData = async (e) => {
    e.preventDefault();
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `${token}`,
    //   },}
    const res = await axios.put(
      "http://localhost:3001/user/edit",
      // config,

      {
        phoneNumber: +newPhone.phone,
        email: newEmail.email,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.log(res);
    let confirm = window.confirm("Are you sure to change your data !?");
    if (confirm) {
      localStorage.setItem(
        "Authentication",
        JSON.stringify({
          ...storageAuth,
          email: `${newEmail.email}`,
        })
      );
      localStorage.setItem(
        "userdata",
        JSON.stringify({
          ...storageData,
          PhoneNumber: `${newPhone.phone}`,
        })
      );
      setConfChange(true);
      setTimeout(() => {
        setConfChange(false);
      }, 3000);
    }
    console.log(newEmail);
    console.log(newPhone);
  };
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
  // const [userdata, setuserdata] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state?.password);

  const token = JSON.parse(`${localStorage.getItem("token")}`);
  // const token = JSON.parse(`${localStorage.getItem("Authentication")}`);

  console.log(token);
  console.log(localStorage.getItem("Authentication"));
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = JSON.parse(`${localStorage.getItem("token")}`);
  //   console.log(token);
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `${token}`,
  //     },
  //   };
  // const getuser = async () => {
  //   axios
  //     .get("http://localhost:3001/user/getuser", config)
  //     .then((response) => {
  //       console.log(response.data);
  //       dispatch({ type: "FetchSucceded", payload: response.data });
  //     })
  //     .catch((error) => {
  //       console.log({ error });
  //       dispatch({ type: "FetchFailed" });
  //     });
  // };
  // getuser();
  // }, []);

  return (
    <form>
      {/*New Email section */}
      <Box
        noValidate
        autoComplete="off"
        sx={{ "& > :not(style)": { m: 1, width: "50ch" }, marginTop: "10px" }}
      >
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-email"
            sx={{
              color: "white!important",
            }}
          >
            Your New Email
          </InputLabel>

          <OutlinedInput
            id="outlined-adornment-email"
            type="email"
            placeholder={"Write a valid email"}
            // value={values.email}
            name="email"
            required={false}
            // value={storageEmail}
            onChange={handleNewEmail}
            sx={{
              width: { lg: "450px", md: "300px", sm: "auto", xs: "auto" },
              backgroundColor: "#252830e6!important",
              color: "white!important",
            }}
            label="New Email"
          />
        </FormControl>
        <Alert
          sx={{
            visibility:
              newEmail.email === "" || regxNewEmail === false
                ? "visiable"
                : "hidden",
          }}
          severity="error"
        >
          Write a valid email
        </Alert>
      </Box>

      {/*New Phone Number section */}
      <Box
        noValidate
        autoComplete="off"
        sx={{ "& > :not(style)": { m: 1, width: "50ch" }, marginTop: "10px" }}
      >
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-phone"
            sx={{
              color: "white!important",
            }}
          >
            Your New Phone Number
          </InputLabel>

          <OutlinedInput
            id="outlined-adornment-phone"
            type="string"
            // value={values.email}
            name="phone"
            placeholder={storagePhoneNumber}
            onChange={handleNewPhone}
            sx={{
              width: { lg: "450px", md: "300px", sm: "auto", xs: "auto" },
              backgroundColor: "#252830e6!important",
              color: "white!important",
            }}
            label="New Phone Number"
          />
        </FormControl>
        <Alert
          sx={{
            visibility:
              newPhone.phone === "" || regxNewPhone === true
                ? //  ||
                  // newPhone.phone.length > 10
                  "hidden"
                : "visiable",
          }}
          severity="error"
        >
          Phone Number should be 11 numbers at least
        </Alert>
      </Box>
      {/*Buttons*/}
      <Box
        noValidate
        autoComplete="off"
        sx={{ display: "flex", marginTop: "20px", "& button": { m: 2 } }}
      >
        <Button
          variant="contained"
          onClick={handleSubmitData}
          disabled={
            (newEmail === "" && newPhone === "") ||
            regxNewEmail === false ||
            regxNewPhone === false
              ? true
              : false
          }
          sx={{
            maxWidth: "50px",
            padding: "10px 50px",
            color: "white!important",
            backgroundColor: "#444!important",
            "&:hover": {
              backgroundColor: "#12C6B2 !important",
            },
          }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          type="reset"
          sx={{
            maxWidth: "50px",
            padding: "10px 50px",
            backgroundColor: "#444",
            "&:hover": {
              backgroundColor: "red !important",
            },
          }}
        >
          Cancel
        </Button>
      </Box>
      {
        <Alert
          severity="success"
          sx={{ visibility: confChange ? "visiable" : "hidden" }}
        >
          Data has been changed successfully
        </Alert>
      }
    </form>
  );
};

export default ChangeData;
