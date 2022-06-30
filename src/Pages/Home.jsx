import React from "react";
import { Box } from "@mui/material";
import Header from "../Components/Header";
import CompatableSection from "../Components/CompatableSection";
import ImageContainer from "../Components/ImageContainer";
import KidsSection from "../Components/KidsSection";
import WatchNow from "../Components/WatchNow";
import bg from '../assets/2022.png';


const Home = () => {
  return (
    <Box component="section" sx={{ paddingTop: "2rem" , backgroundImage:`url(${bg})` , backgroundSize:'contain' , backgroundRepeat:'no-repeat'}}>
      <Header />
      <CompatableSection />
      <ImageContainer />
      <KidsSection />
      <WatchNow />
    </Box>
  );
};

export default Home;
