import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import ChangePassword from "../Components/ChangePassword";

const Password = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        margin: "90px auto",
        border: "-moz-initial",
        borderRadius: "3px",
        boxSizing: "border-box",
        padding: "20px",
        backgroundColor: "rgba(7, 9, 17, 0.7)",
        textAlign: "left",
      }}
    >
      <Stack
        justifyContent="space-around"
        alignItems="flex-start"
        alignContent="flex-start"
        gap={2}
        sx={{ maxWidth: "450px", marginLeft: "2rem", color: "#FFFFFF" }}
      >
        <Typography
          sx={{ fontSize: "30px", fontWeight: "bold", textAlign: "left" }}
        >
          Change Password
        </Typography>
        <ChangePassword />
        {}
      </Stack>
    </Container>
  );
};

export default Password;
