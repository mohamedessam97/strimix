import axios from 'axios';
import  AuthenticationSliceActions  from '../AuthenticationSlice';

let token = localStorage.getItem('token') !== 'undefined' ? JSON.parse(localStorage.getItem('token')) : ''
console.log( token)

let config = {
    headers:{
         Authorization: token ? token : ''  
    }
  };



export const UserRegisterHandler = (userData) => {

  
    return  (Dispatch) => {
        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setIsLoading(true))
         axios.post('http://localhost:3001/user/register',{email:userData.Email , password: userData.Password} ).then( (response) => {
            localStorage.setItem("Authentication", JSON.stringify({email:userData.Email , password: userData.Password}))
            Dispatch(AuthenticationSliceActions.setError(''))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
            Dispatch(AuthenticationSliceActions.SignUp({token:response.data.token ,Email:userData.Email , Password: userData.Password }))
            Dispatch(AuthenticationSliceActions.logIn({token:response.data.token}))
            localStorage.setItem('token' , JSON.stringify(response.data.token))
            config.headers.Authorization = JSON.parse(localStorage.getItem('token'))
            userData.Navigate('/plandetails')
        }).catch((err) => {
            console.log(err)
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
            Dispatch(AuthenticationSliceActions.setError(err.response.data.message? err.response.data.message : 'Something went wrong' )) })
     }
}

export const choosePlan = (userData) => {



    return  (Dispatch) => {
        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setIsLoading(true))
       let plan =  userData
         axios.put('http://localhost:3001/user/Plan', plan , config)
        .then( () =>  { 
        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setIsLoading(false))
        Dispatch(AuthenticationSliceActions.setUserPlan(userData.plan))
        userData.Navigate('/payment');
    })
        .catch( (error) => {
        Dispatch(AuthenticationSliceActions.setPlanError(true))   
        Dispatch(AuthenticationSliceActions.setIsLoading(false)) 

        Dispatch(AuthenticationSliceActions.setError( error.response.data.message?  error.response.data.message :  'Something went wrong'))})
    }
}

export const UserLoginHandler = ({userName , Password , Navigate} ) => {


    return  (Dispatch) => {
        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setIsLoading(true))
         axios.post('http://localhost:3001/user/login/',{email: userName , password: Password} )
        .then((response) =>{
            Dispatch(AuthenticationSliceActions.setError(''))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
            Dispatch(AuthenticationSliceActions.logIn({token: response.data}))
            console.log(response.data);
            localStorage.setItem('token' , JSON.stringify(response.data.token))
            localStorage.setItem('user' , JSON.stringify(response.data.user))
            Navigate('/')
        }).catch((error) => {
            Dispatch(AuthenticationSliceActions.setPlanError(true))    
            Dispatch(AuthenticationSliceActions.setError( error.response.data.message?  error.response.data.message :  'Something went wrong'))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))})
        
    }
}


export const creditCardHandler = (userData) => {
    


    return  (Dispatch) => {

        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setIsLoading(true))

        const data = {FirstName:userData.FirstName ,
        LastName: userData.LastName ,
        cardNumber: userData.CardNumber ,
        securityCode:userData.cvv ,
        PhoneNumber: userData.phoneNumber}

         axios.put('http://localhost:3001/user/payment' ,data , config)
        .then( () => { 
            Dispatch(AuthenticationSliceActions.setError(''))
            localStorage.setItem("userdata", JSON.stringify(data))
            Dispatch(AuthenticationSliceActions.SetUserData({FirstName: userData.FirstName , LastName: userData.LastName , CardNumber: userData.CardNumber , phoneNumber: userData.phoneNumber  }))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
            userData.Navigate('/choosedevice')} )
        .catch((error) => {   
            Dispatch(AuthenticationSliceActions.setError( error.response.data.message?  error.response.data.message :  'Something went wrong'))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
        })
    }
}

export const setUserDevice = (userDevice) => {


  console.log('test')

    const Navigate = userDevice.Navigate
    const data =  userDevice.device 
    return  (Dispatch) => {
        Dispatch(AuthenticationSliceActions.setIsLoading(true))
        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setUserDeviceError(''))
         axios.put('http://localhost:3001/user/device' , {device:data} , config)
        .then((res) => {
        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setUserDevice(data))
        Dispatch(AuthenticationSliceActions.setIsLoading(false))
        Navigate('/Home') 
        Dispatch(AuthenticationSliceActions.setUserDeviceError(''));
        }).catch((error) => {
         Dispatch(AuthenticationSliceActions.setIsLoading(false));
         console.log(error.data.message)
         console.log(error.response.data.message)
         console.log(error.data.message)
         Dispatch(AuthenticationSliceActions.setUserDeviceError( error.response.data.message?  error.response.data.message :  'Something went wrong'));
        })
    }
}


export const logOutHandler = (Navigate) => {
    return (Dispatch) => {
        Dispatch(AuthenticationSliceActions.logOut())
        Navigate('/home')
    }
}
// export const CreateProfile= (userData) => {
  
//     return async (Dispatch) => {
//         Dispatch(AuthenticationSliceActions.setError(''))
//         Dispatch(AuthenticationSliceActions.setIsLoading(true))
//         await axios.post('http://localhost:3001/user/register',{email:userData.Email , password: userData.Password} ).then( (response) => {
//             localStorage.setItem("Authentication", JSON.stringify({email:userData.Email , password: userData.Password}))
//             Dispatch(AuthenticationSliceActions.setError(''))
//             Dispatch(AuthenticationSliceActions.setIsLoading(false))
//             Dispatch(AuthenticationSliceActions.SignUp({token:response.data.token ,Email:userData.Email , Password: userData.Password }))
//             Dispatch(AuthenticationSliceActions.logIn({token:response.data.token}))
//             localStorage.setItem('token' , JSON.stringify(response.data.token))
//             config.headers.Authorization = JSON.parse(localStorage.getItem('token'))
//             userData.Navigate('/plandetails')
//         }).catch((err) => {
//             Dispatch(AuthenticationSliceActions.setIsLoading(false))
//             Dispatch(AuthenticationSliceActions.setError( err.response.data.message?  err.response.data.message :  'Something went wrong' )) })
//     }
// }