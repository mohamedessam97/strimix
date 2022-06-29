import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { useDispatch } from "react-redux";
import  AuthenticationSliceActions  from "../../Redux/AuthenticationSlice";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const createData = (name, calories, fat, carbs) => {
  return { name, calories, fat, carbs };
};

const StyledDiv = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  height: "100px",
  backgroundColor: "#12C6B2",
  position: "relative",
  margin: "auto",
  "&::before": {
    content: "''",
    position: "absolute",
    borderColor: "#12C6B2 transparent transparent transparent",
    borderWidth: "10px",
    borderStyle: "solid",
    bottom: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

const TableComponent = () => {
  const Dispatch = useDispatch();
  const [SelectedBasic, setIsSelectedBasic] = useState(false);
  const [SelectedStandard, setIsSelectedStandard] = useState(false);
  const [SelectedPremium, setIsSelectedPremium] = useState(false);

  const SetBasicHandler = () => {
 
    setIsSelectedBasic(true);
    setIsSelectedStandard(false);
    setIsSelectedPremium(false);
    Dispatch(AuthenticationSliceActions.setUserPlan("Basic"));
  };

  const SetStandardHandler = () => {
 
    setIsSelectedStandard(true);
    setIsSelectedPremium(false);
    setIsSelectedBasic(false);
    Dispatch(AuthenticationSliceActions.setUserPlan("Standard"));
  };

  const SetPremiumHandler = () => {

    setIsSelectedPremium(true);
    setIsSelectedBasic(false);
    setIsSelectedStandard(false);
    Dispatch(AuthenticationSliceActions.setUserPlan("Premmium"));
  };

  const rows = [
    createData("Monthly price", "EGP120", "EGP165", "EGP200"),
    createData("Video quality", "Good", "Better", "Best"),
    createData("Resolution", "480p", "1080p", "4K+HDR"),
    createData(
      "Watch on your TV, computer, mobile phone and tablet",
      <CheckIcon sx={{ color: "#12C6B2" }} />,
      <CheckIcon sx={{ color: "#12C6B2" }} />,
      <CheckIcon sx={{ color: "#12C6B2" }} />
    ),
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "transparent",
        border: "none",
        width: {
          xs: "400px",
          lg: "800px",
          sm: "450px",
          md: "700px",
          xl: "100%",
        }
        
      }}
    >
      <Table
        sx={{
          width: {
            xs: "400px",
            lg: "800px",
            sm: "450px",
            md: "700px",
            xl: "100%",
          },
          textAlign: "left",
          border:'none',
          
        }}
        aria-label="caption table"
      >
        <Typography variant="caption" component="caption" sx={{color:'#FFFFFF !important'}}>
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
          to your internet service and device capabilities. Not all content is
          available in all resolutions. See our Terms of Use for more details.
        </Typography>
        <Typography variant="caption" component="caption" sx={{color:'#FFFFFF !important'}}>
          Only people who live with you may use your account. Watch on 4
          different devices at the same time with Premium, 2 with Standard and 1
          with Basic.
        </Typography>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{cursor:'pointer'}} onClick={SetBasicHandler} align="right">
              <StyledDiv>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "bold", margin: "0px" }}
                >
                  Basic
                </Typography>
              </StyledDiv>
            </TableCell>
            <TableCell sx={{cursor:'pointer'}} onClick={SetStandardHandler} align="right">
              <StyledDiv>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "bold", margin: "0px" }}
                >
                  Standard
                </Typography>
              </StyledDiv>
            </TableCell>
            <TableCell sx={{cursor:'pointer'}} onClick={SetPremiumHandler} align="right">
              <StyledDiv>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "bold", margin: "0px" }}
                >
                  Premium
                </Typography>
              </StyledDiv>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody  sx={{ color:'#FFFFFF !important'}}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 }  }}
            >
              <TableCell component="th" scope="row" sx={{ color:'rgba(255, 255, 255, 0.8)'}}>
                {row.name}
              </TableCell>
              <TableCell
                onClick={SetBasicHandler}
                align="center"
                sx={{
                  cursor:'pointer',
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  color: SelectedBasic ? "#12C6B2" : "rgba(255, 255, 255, 0.8)",
                }}
              >
                {row.calories}
              </TableCell>
              <TableCell
                onClick={SetStandardHandler}
                align="center"
                sx={{
                  cursor:'pointer',
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  color: SelectedStandard ? "#12C6B2" : "rgba(255, 255, 255, 0.8)",
                }}
              >
                {row.fat}
              </TableCell>
              <TableCell
                onClick={SetPremiumHandler}
                align="center"
                sx={{
                  cursor:'pointer',
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  color: SelectedPremium ? "#12C6B2" : "rgba(255, 255, 255, 0.8)",
                }}
              >
                {row.carbs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
