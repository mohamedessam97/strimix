import React from "react";
import { Box } from "@mui/material";
import Header from "../Components/Header";
import CompatableSection from "../Components/CompatableSection";
import ImageContainer from "../Components/ImageContainer";
import KidsSection from "../Components/KidsSection";
import WatchNow from "../Components/WatchNow";

const Home = () => {
  return (
    <Box component="section" sx={{ marginTop: "2rem" }}>
      <Header />
      <CompatableSection />
      <ImageContainer />
      <KidsSection />
      <WatchNow />
    </Box>
  );
};

export default Home;
