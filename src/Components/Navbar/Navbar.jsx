
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import InputBase from '@mui/material/InputBase';
import useScrollTrigger from "@mui/material/useScrollTrigger"
import {Link} from "react-router-dom"
import img1 from '../../assets/Polygon 1.png'
import img2 from '../../assets/STRIMIX.png'
import axios from 'axios';
import { useDispatch  , useSelector} from 'react-redux';
import AuthenticationSliceActions from '../../Redux/AuthenticationSlice';
import './Navbar.css'
    


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const Menu2 = styled(Menu)(({ theme }) => ({
    
    "& .MuiList-root" : {
        backgroundColor: "#0A0D18",

    }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function AppBarS({ children }) {
  const trigger = useScrollTrigger();


// const useStyles = makeStyles((theme) => ({
//     menuPaper: {
//       backgroundColor: "lightblue"
//     }
//   }));


function AppBarS({children}){
    const trigger =useScrollTrigger();
    
    return (
            <AppBar sx={{
                backgroundColor: trigger? "#0A0D18":'transparent'
            }}>
                {children}
            </AppBar>
    )
}

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const isLoggedIn =useSelector((state)=>state.IsLogged)
    const Dispatch = useDispatch()
    let navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleChange=  (e) =>{
        let q = e.target.value
        if(q==""){
            console.log("here");
            window.location.assign("/Home")
        }else{

            navigate(`/Search/${q}`);       
        }
        
//         setTimeout(async ()=>{
//             try{

//                 const res = await axios.post(`http://localhost:3001/movie/search` , {q})
//                 console.log(res.data);
//                 Dispatch(AuthenticationSliceActions.AddMovie(res.data))
//             }catch(err){
//                 console.log(err);
//             }
// //   
// //     })
        

//         },1000)
    }

  const token = localStorage.getItem("token");

  const logOutHandler = async () => {
    const res = await axios.put(
      `http://localhost:3001/user/logout`,
      {},
      {
        headers: {
          authorization: JSON.parse(token),
        },
      }

    //   const classes = useStyles();
    return (
        <AppBarS position="fixed"  >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'red   ',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu2
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseUserMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link to={`/${page}`}>
                                    <Typography textAlign="center" >{page}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu2>
                    </Box>
                                
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={`${page}`} key={page}>
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                {page}
                            </Button>
                                </Link>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 , marginRight:2}}   >
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleChange}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu2
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/* const settings = ['Profiles', 'Manage Profiles', 'Exit Profile', 'Account', 'Sign out']; */}
                                <Link to="">
                                <MenuItem  onClick={handleCloseUserMenu} >
                                    <Typography textAlign="center" color={'white'}>Profiles</Typography>
                                </MenuItem>
                                </Link>
                                <Link to="">
                                <MenuItem  onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" color={'white'}>Manage Profiles</Typography>
                                </MenuItem>
                                </Link>
                                <Link to="">
                                <MenuItem  onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" color={'white'}>Exit Profile</Typography>
                                </MenuItem>
                                </Link>
                                <Link to="/account" onClick={handleCloseUserMenu}>
                                <MenuItem >
                                    <Typography textAlign="center" color={'white'}>Account</Typography>
                                </MenuItem>
                                </Link>
                                <Link to="" onClick={logOutHandler}>
                                <MenuItem  onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" color={'white'}>Sign out</Typography>
                                </MenuItem>
                                </Link>
                            
                        </Menu2>
                    </Box>
                </Toolbar>
            </Container>
        </AppBarS>
    );
    Dispatch(AuthenticationSliceActions.logOut());
  };
  return (
    <AppBarS position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red   ",
              textDecoration: "none",
            }}
          >
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page}`}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={`${page}`} key={page}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, marginRight: 2 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* const settings = ['Profiles', 'Manage Profiles', 'Exit Profile', 'Account', 'Sign out']; */}
              <Link to="">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profiles</Typography>
                </MenuItem>
              </Link>
              <Link to="">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Manage Profiles</Typography>
                </MenuItem>
              </Link>
              <Link to="">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Exit Profile</Typography>
                </MenuItem>
              </Link>
              <Link to="/account" onClick={handleCloseUserMenu}>
                <MenuItem>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
              </Link>
              <Link to="" onClick={logOutHandler}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Sign out</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBarS>
  );
};
export default Navbar;
