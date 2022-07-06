import React from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import AuthenticationSliceActions from "../Redux/AuthenticationSlice";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
let storageData = JSON.parse(`${localStorage.getItem("userdata")}`);
const NavBar = () => {
  const IsloggedIn = useSelector((state) => state.IsloggedIn);
  const Dispatch = useDispatch();

  const logOutHandler = () => {
    Dispatch(AuthenticationSliceActions.logOut());
  };

  return (
    <Box
      variant="header"
      sx={{
        height: "5rem",
        marginLeft: "auto",
        marginRight: "auto",
        background: "transparent",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Box variant="div" sx={{ width: "100%", height: "100%" }}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              width: "100%",
              fontWeight: "bold",
              height: "100%",
              paddingLeft: "3rem",
              color: "red",
            }}
          >
            <Link to="/">
              <svg
                width="189"
                height="49"
                viewBox="0 0 189 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M62.8678 13.251C61.3978 9.43604 57.8278 8.63104 54.0128 8.63104C49.0778 8.66604 43.4428 10.941 43.4428 16.856C43.4428 21.231 47.4328 22.631 51.8778 23.156C54.8178 23.471 56.9528 24.416 56.9528 26.411C56.9528 29.351 54.0828 30.296 50.8978 30.296C48.6228 30.296 45.8578 29.806 44.1078 26.621L40.4678 28.581C42.0778 32.886 45.9278 34.531 50.4078 34.531C56.9878 34.531 61.7478 31.661 61.7478 25.921C61.7478 21.301 57.5128 19.586 52.9978 19.026C50.3028 18.676 48.0628 18.151 48.0628 16.296C48.0628 14.371 49.9528 12.656 53.7328 12.656C56.3928 12.656 58.3178 13.846 58.9128 15.246L62.8678 13.251ZM69.9416 34.006H74.5616L78.1316 13.706H85.9016L86.6366 9.50604C79.5316 9.50604 73.5466 9.50604 66.4766 9.50604L65.7416 13.706H73.5116L69.9416 34.006ZM107.546 33.691L101.596 25.361C107.406 24.206 109.261 19.831 109.261 16.401C109.261 12.726 106.811 9.50604 101.736 9.50604C97.8514 9.50604 94.0014 9.47104 90.1164 9.47104L85.7764 34.006H90.3964L91.8314 25.816H96.5214L102.191 34.006H107.476L107.546 33.691ZM101.001 13.636C103.521 13.636 104.571 15.421 104.571 17.101C104.571 19.236 102.961 21.651 99.6014 21.651H92.5664L93.9664 13.636H101.001ZM115.894 34.006L120.199 9.50604H115.614L111.309 34.006H115.894ZM143.049 34.041H147.669L151.974 9.54104H146.689L137.169 20.076L131.359 9.54104H126.039L121.734 34.041H126.354L129.504 16.226L135.419 26.901H136.329L146.199 16.261L143.049 34.041ZM158.141 34.006L162.446 9.50604H157.861L153.556 34.006H158.141ZM175.6 18.011L171.05 9.50604H166.08L166.045 9.71604L172.1 21.126L161.215 33.866L161.18 34.006H166.605L174.165 25.011L178.89 34.006H183.86L183.895 33.866L177.56 21.791L188.095 9.71604L188.13 9.50604H183.02L175.6 18.011Z"
                  fill="#12C6B2"
                />
                <path
                  d="M4.97313 23.4596C2.86335 22.3249 2.86895 19.297 4.98293 18.1701L29.3033 5.20617C31.3038 4.13982 33.7187 5.59218 33.7145 7.8591L33.6662 33.8772C33.662 36.1441 31.2417 37.5875 29.2452 36.5137L4.97313 23.4596Z"
                  fill="#12C6B2"
                />
              </svg>
            </Link>
          </Stack>
        </Box>
        {/* <Stack direction="row" justifyContent="flex-end"
            alignItems="center"
            sx={{
              paddingRight: "3rem"
            }}>
              <StyledLink to="/NewProfile">
                  Users
              </StyledLink>
     
    </Stack> */}
        <Box variant="div" sx={{ width: "100%", height: "100%" }}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              height: "100%",
              paddingRight: "3rem",
              textDecoration: "none !important",
            }}
          >
            {!IsloggedIn && (
              <StyledLink
                to="/Login"
                style={{ color: "#12C6B2", fontSize: "1rem" }}
              >
                Login
              </StyledLink>
            )}
            {IsloggedIn && (
              <StyledLink
                to="/home"
                onClick={logOutHandler}
                style={{ color: "#12C6B2", fontSize: "1rem" }}
              >
                log out
              </StyledLink>
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default NavBar;
