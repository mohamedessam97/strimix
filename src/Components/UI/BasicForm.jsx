import { useFormik } from "formik";
import { useState } from "react";
import { Button, FormControl, Stack, TextField } from "@mui/material";
import { useDispatch  } from 'react-redux';
import AuthenticationSliceActions from '../../Redux/AuthenticationSlice';
import { useNavigate } from 'react-router-dom' ;




const BasicForm = () => {
    const [EmailIsValid, setEmailIsValid] = useState(false);
    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    
    const submitonHandler = () => {
        if(EmailIsValid){
            localStorage.setItem('initialEmail' , formik.values.Email)
            Dispatch(AuthenticationSliceActions.SignUp({Email : formik.values.Email}));
            Navigate('/setup');
        }      
    }

    const validate = (values) => {
        const errors = {
            Email: ""
         
        };
    
        if (!values.Email.trim()) {
          errors.Email = "Required";
          setEmailIsValid(false);
        } else if (!values.Email.includes("@")) {
          errors.Email = "Invalid email address";
          setEmailIsValid(false);
        } else if (!values.Email.includes(".com")) {
            errors.Email = "Invalid email address";
        }
         else {
          setEmailIsValid(true);
        }
    

    
        if (EmailIsValid ) {
          
        }
        return errors;
      };

    const formik = useFormik({
        initialValues: {
          Email: "",
        
        },
        validate,
        onSubmit: submitonHandler
      });
    
  return (
    <>
      <FormControl sx={{height:'7rem'}}>
        <Stack direction='row' alignItems='flex-start' justifyContent='center' flexWrap='wrap' sx={{ width:'100%' , }}>
        <TextField
          required
          id="Email"
          label="Email"
          color="secondary"
          placeholder="Enter Email Address"
          helperText={formik.errors.Email}
          variant="outlined"
          onChange={formik.handleChange}
          error={!!formik.errors.Email && formik.touched.Email}
          onBlur={formik.handleBlur}
        //   helperText="Enter a valid Email"
          InputLabelProps={{ style: { color: "whitesmoke" } }}
          FormHelperTextProps={{ style: { color: "whitesmoke" } }}
          sx={{
            background: "transparent",
            outlineWidth:'2px',
            borderRadius:'0px'
            ,
            width: { lg: "400px", md: "400px", sm: "350px", sx: "200px" },
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& > fieldset": { borderColor: "#12C6B2" },
            },
            outlineColor: "#12C6B2",
            outlineStyle: { color: "white" },

            "& .css-hjtp1-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#12C6B2",
                borderWidth:'2px',
                borderRadius:'0px'
              },
            "& .css-hjtp1-MuiInputBase-root-MuiOutlinedInput-root:focus .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#12C6B2",
                borderWidth:'2px',
                borderRadius:'0px'
              },

            "& .css-hjtp1-MuiInputBase-root-MuiOutlinedInput-root:focus-within .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#12C6B2",
                borderWidth:'2px',
                borderRadius:'0px'
              },
              "& .css-hjtp1-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
            {
                borderColor: "#12C6B2",
                borderWidth:'2px',
                borderRadius:'0px'
            }
          }}
        ></TextField>

        <Button size="large" sx={{padding:'0.96rem' , backgroundColor:'#12C6B2' , color:'white' , borderRadius:'0px' , '&:hover':{backgroundColor:'#12C6B2'} ,  marginTop:{xs:'0px' , sm:"0px" ,  md:'0px' , lg:'0px'} }} onClick={submitonHandler}>GET Started</Button>
        </Stack>
      </FormControl>
    </>
  );
};

export default BasicForm;
