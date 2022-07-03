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
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";
// import styled from "@emotion/styled";
// import LoadingButton from "@mui/lab/LoadingButton";

const ChangePassword = () => {
  const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  // const currentPass = "";
  const [currPass, setCurrPass] = useState({ password: "" });
  const [newPass, setNewPass] = useState({ password: "" });
  const [confirmPass, setConfirmPass] = useState({
    password: "",
  });
  const [confChange, setConfChange] = useState(false);
  let regxNewPass = PWD_REGEX.test(newPass.password);

  // Show and hide password handle
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  // handle input  change
  const handleCurrentPass = (e) => {
    const { name, value } = e.target;
    setCurrPass({ ...newPass, [name]: value });
    console.log(currPass);
  };
  const handleNewPass = (e) => {
    const { name, value } = e.target;
    setNewPass({ ...newPass, [name]: value });
    console.log(newPass);
  };
  const handleConfirmPass = (e) => {
    const { name, value } = e.target;
    setConfirmPass({ ...confirmPass, [name]: value });
    console.log(confirmPass);
  };

  // should use async await in case save new password in database
  const handleSubmitPass = async (e) => {
    e.preventDefault();
    //axios.patch("http://localhost:3001/user/changepassword");
    const res = await axios.put(
      "http://localhost:3001/user/changepassword",
      {
        Cpassword: currPass.password,
        password: newPass.password,
        ConfirmPassword: confirmPass.password,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(res);

    let confirm = window.confirm("Are you sure to change password !?");
    setConfChange(true);
    if (confirm) {
      setTimeout(() => {
        setConfChange(false);
      }, 3000);
    }
    console.log(newPass);
    console.log(confirmPass);
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
  const [userdata, setuserdata] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state?.password);

  const token = JSON.parse(`${localStorage.getItem("token")}`);
  const navigate = useNavigate();
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
      axios
        .get("http://localhost:3001/user/getuser", config)
        .then((response) => {
          console.log(response.data);
          dispatch({ type: "FetchSucceded", payload: response.data });
        })
        .catch((error) => {
          console.log({ error });
          dispatch({ type: "FetchFailed" });
        });
    };
    getuser();
  }, []);

  return (
    <form>
      {/*Current Password section */}
      <Box
        noValidate
        autoComplete="off"
        sx={{ "& > :not(style)": { m: 1, width: "50ch" }, marginTop: "10px" }}
      >
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            sx={{
              color: "white!important",
            }}
          >
            Current Password
          </InputLabel>

          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            name="password"
            onChange={handleCurrentPass}
            sx={{
              width: { lg: "450px", md: "300px", sm: "auto", xs: "auto" },
              backgroundColor: "#252830e6!important",
              color: "white!important",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Current Password"
          />
        </FormControl>

        <FormHelperText
          sx={{ cursor: "pointer", color: "#12C6B2" }}
          onClick={() => console.log("clicked")}
          id="my-helper-text"
        >
          Forget Password ?
        </FormHelperText>

        <Alert
          sx={{
            visibility: currPass.password !== "" ? "hidden" : "visiable",
          }}
          severity="error"
        >
          Current password shouldn't be empty
        </Alert>
      </Box>

      {/*New Password section */}
      <Box
        noValidate
        autoComplete="off"
        sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}
      >
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            sx={{
              color: "white!important",
            }}
          >
            New Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-newPassword"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleNewPass}
            sx={{
              width: { lg: "450px", md: "300px", sm: "auto", xs: "auto" },
              backgroundColor: "#252830e6!important",
              color: "white!important",
            }}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="New Password"
          />
        </FormControl>

        <Alert
          sx={{
            visibility:
              (newPass.password !== currPass.password &&
                regxNewPass === true) ||
              newPass.password === ""
                ? "hidden"
                : "visible",
          }}
          severity="error"
        >
          {newPass.password !== currPass.password
            ? "Min 6 charachters and special characters not valid"
            : "New password should not equal current password"}
        </Alert>
      </Box>

      {/*Confirm Current Password section */}
      <Box
        noValidate
        autoComplete="off"
        sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}
      >
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-confirmPassword"
            sx={{
              color: "white!important",
            }}
          >
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleConfirmPass}
            sx={{
              width: { lg: "450px", md: "300px", sm: "auto", xs: "auto" },
              backgroundColor: "#252830e6!important",
              color: "white!important",
            }}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>

        <Alert
          sx={{
            color: "#12C6B2",
            visibility:
              confirmPass.password === newPass.password ||
              confirmPass.password === ""
                ? "hidden"
                : "visible",
          }}
          severity="error"
        >
          Confirm password is wrong
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
          onClick={handleSubmitPass}
          disabled={
            // currPass.password !== currentPass ||
            currPass === "" ||
            newPass === "" ||
            regxNewPass === false ||
            confirmPass === "" ||
            confirmPass.password !== newPass.password ||
            newPass.password === currPass.password
              ? true
              : false
          }
          sx={{
            maxWidth: "50px",
            padding: "10px 50px",
            color: "white!important",
            backgroundColor: "#444!important",

            "&:hover": {
              backgroundColor: "#12C6B2!important",
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
              backgroundColor: "red!important",
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
          Password has been changed successfully
        </Alert>
      }
    </form>
  );
};

export default ChangePassword;
