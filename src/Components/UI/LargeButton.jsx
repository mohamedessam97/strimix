import { Button } from '@mui/material';
import { styled } from "@mui/material/styles";
import {Link} from 'react-router-dom';


const StyledLargeButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#12C6B2",
    fontWeight: "500px",
    fontSize: "24px",
    minHeight: "64px",
    borderRadius: "4px",
    padding: "0.75rem 25.333px",
    width: "350px",
  
    "&:hover": {
      backgroundColor: "#12C6B2",
    },
  }));
  
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

const LargeButton = ({link , text  , loadingstate}) => {

    return (
        <StyledLink to={link} >

        <StyledLargeButton size="large" sx={{  minWidth: {lg:'400px' ,md:'300px' , sm:'auto' , xs:'auto'} ,   height: { md:'64px' , sm:'40px' , sx:'auto'} ,  padding: { lg:"0.75rem 25.333px" , md:'0.5rem 20px' , sm:'0.3rem 15px' , sx:'0.1rem 5px' } }}>{text}</StyledLargeButton>
      </StyledLink>
    );
};

export default LargeButton;