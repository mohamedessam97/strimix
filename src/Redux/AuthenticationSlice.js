import { createSlice } from "@reduxjs/toolkit";

const initialState = { IsloggedIn: false, Email: localStorage.getItem('initialEmail') !== 'undifined' ? localStorage.getItem('initialEmail') : "", Password: "", token: "" , FirstName:"" , LastName:"" , CardNumber:"" , phoneNumber:'' , userPlan: '' , planChosen: false , error : '' , isLoading :false , planRequestError : false , userDevice : '' , movies:[]};

 export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    SignUp: (state,  {payload} ) => {
      if (payload) {
        state.Email = payload.Email;
        state.Password = payload.Password;
        state.token = payload.token
      }
    },
    logIn: (state, { payload }) => {
      if (payload) {
        state.IsloggedIn = true;
        if ( !payload.token || payload.token === '' ){
          return
        }else{
          state.token = payload.token;
        }

      }
    },
    SetUserData : ( state , { payload } ) => {
      if(payload){
        state.FirstName = payload.FirstName
        state.LastName = payload.LastName
        state.CardNumber = payload.CardNumber
        state.phoneNumber = payload.phoneNumber
      }
    }
    ,
    logOut: (state) => {
      state.IsloggedIn = false;
      state.error = ''
      state.token = "";
      localStorage.setItem('token' , '');
      localStorage.clear()
    },
    setUserPlan: (state , {payload}) => {
      if(payload) {
        state.userPlan = payload
        state.planChosen = true
       
      }},
    setError : (state , {payload}) => {
        state.error = payload;
      },
    setIsLoading: (state , {payload}) => {
        state.isLoading = payload
      },
    setPlanError : (state , {payload}) => {
        state.planRequestError = payload
      },
    setUserDevice : (state , {payload}) => {
      state.userDevice = payload
    },
    AddMovie: (state, { payload }) => {
      if (payload) {
          state.movies = payload
      }
  }

    }
  },
);


const  AuthenticationSliceActions = AuthenticationSlice.actions;
export default   AuthenticationSliceActions 

