import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./Components/Loader";
import NavBar from "./Components/NavBar";
import NavBarA from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./styles/Theme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthenticationSliceActions from "./Redux/AuthenticationSlice";
import { Navigate } from "react-router-dom";
import "./app.css";

const Home = lazy(() => import("./Pages/Home"));

const HomeA =lazy(()=>import("./Pages/home/HomeA"))
const Movies =lazy(()=>import("./Pages/Movies/Movies"))
const MyList =lazy(()=>import('./Pages/myList/MyList'))
const Search =lazy(()=>import('./Pages/Search/Search'))
const Account =lazy(()=>import('./Pages/account/Account'))
const Watched = lazy(()=>import('./Pages/watchNow/WatchNow'))
const Watch =lazy(()=>import("./Pages/movie/Movie"))
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const Password = lazy(() => import("./Pages/Password"));
const Data = lazy(() => import("./Pages/Data"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Setup = lazy(() => import("./Pages/Setup"));
const Plans = lazy(() => import("./Pages/Plans"));
const ChoosePlan = lazy(() => import("./Pages/ChoosePlan"));
const Payment = lazy(() => import("./Pages/Payment"));
const CreditCard = lazy(() => import("./Pages/CreditCard"));
const PlanDetails = lazy(() => import("./Pages/PlanDetails"));
const Choosedevice = lazy(() => import("./Pages/ChooseDevice"));
const NewProfile = lazy(() => import("./Pages/NewProfile"));
const AddProfile = lazy(() => import("./Components/Users/AddProfile"));
const EditProfile = lazy(() => import("./Components/Users/EditProfile"));
const User = lazy(() => import("./Components/Users/User"));

const App = () => {
  // const device =JSON.parse(localStorage.getItem("user")).device
  var sUsrAg = navigator.userAgent;
  useEffect(() => {
    // if(sUsrAg.includes("Windows") && !device.includes("Laptop") ){
    // navigate("/account", { replace: true });
    // }
  }, []);
  const Dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.IsloggedIn);

  useEffect(() => {

    const token = localStorage.getItem('token') !== 'undefined' &&  localStorage.getItem('token') !== null ? JSON.parse(localStorage.getItem("token")) : ''
    // const user =localStorage.getItem("user")

    const authenticationData = localStorage.getItem('Authentication') !== 'undefined'&&  localStorage.getItem('Authentication') !== null  ? JSON.parse(localStorage.getItem('Authentication')) : '';
    const authData =  localStorage.getItem('userData')  !== 'undefined' ? JSON.parse(localStorage.getItem('userData')): "";
      console.log( authData)
    if (token !== '' && token !== null) {

      Dispatch(AuthenticationSliceActions.logIn({ token }));
      Dispatch(
        AuthenticationSliceActions.SetUserData({
          FirstName: authData !== '' && authData !== null? authData.FirstName : '',
          LastName: authData !== ''  && authData !== null ? authData.LastName : '',
          CardNumber:  authData !== ''  && authData !== null ? authData.cardNumber : '',
          phoneNumber:  authData !== ''  && authData !== null? authData.PhoneNumber: '',
        })
      );
      Dispatch(
        AuthenticationSliceActions.SignUp({
          Email: authenticationData.email,
          Password: authenticationData.password,
        })
      );
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={Theme}>
        {/* <CssBaseline /> */}
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            {isLoggedIn ? <NavBarA /> : <NavBar />}
            <Routes>

              <Route path="/" element={!isLoggedIn?<Home />:<Navigate to="/home" replace={true} />} />
              <Route path="/home" element={isLoggedIn?<HomeA /> :<Home />} />
              <Route path="/Movies" element={isLoggedIn?<Movies />:<Login />} />
              <Route path="/My%20List" element={isLoggedIn?<MyList />:<Login />} />
              <Route path="/Watched" element={isLoggedIn?<Watched />:<Login />} />
              <Route path="/watch/:id" element={isLoggedIn?<Watch />:<Login />} />
              <Route path="/Search/:q" element={isLoggedIn?<Search />:<Login />} />
              <Route path="/account" element={isLoggedIn?<Account />:<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/setup" element={<Setup />} />
              <Route path="/plandetails" element={<PlanDetails />} />
              <Route path="/changepassword" element={<Password />} />
              <Route path="/changedata" element={<Data />} />
              <Route path="/plan" element={<Plans />} />
              <Route path="/Chooseplan" element={<ChoosePlan />} />
              <Route path="/payment" element={<Payment />} />
              {/* <Route path="/creditCard" element={<CreditCard />} /> */}
              <Route path="/choosedevice" element={<Choosedevice />} />

              <Route path="/NewProfile" element={<NewProfile />} />
              <Route path="/users/add" element={<AddProfile />} />
              <Route path="/users/edit/:id" element={<EditProfile />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
