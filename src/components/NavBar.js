import React from "react";
import { Box, Drawer, Typography, Button } from "@mui/material"
import { useState } from "react";


const SideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleBar = (open) => (event) => {
    setIsDrawerOpen(open)
  }


  return (
    <Box flex={1} sx={{
      display: { xs: "none", sm: "block" }
    }}>
      <Button onClick={toggleBar(true)}> side bar </Button>
      <Drawer
        //variant="permanent"
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleBar(false)}
        elevation={20}
        PaperProps={{
          sx: {
            width: 250
          }
        }
        }


      >
        <Typography>
          home
        </Typography>

      </Drawer>
    </Box >
  )
};

export default SideBar;