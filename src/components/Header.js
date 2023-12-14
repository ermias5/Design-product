import React from "react"
import { Toolbar, Typography, AppBar } from "@mui/material";
import styled from "@emotion/styled";

const StayledAppBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const HeaderAppBar = () => {

  return (
    <AppBar position="static">
      <StayledAppBar>
        <Typography variant="h6"> Web App </Typography>
      </StayledAppBar>
    </AppBar>
  )
};

export default HeaderAppBar;