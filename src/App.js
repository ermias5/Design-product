import React from "react";
import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import SideBar from "./components/NavBar";
import HeaderAppBar from "./components/Header";


const App = () => {


  return (
    <Box>
      <HeaderAppBar />
      <Stack direction="row" spacing={2}>
        <SideBar />
        <Feed />
      </Stack>
    </Box>
  )
};

export default App;