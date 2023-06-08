import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Image from "next/image"

import checkIcon from "../../../../assets/png//group@2x.png"

export const Header = () => {
  return (
    <Box>
      <Box width="100%" m={2}>
        {/* <img src={checkIcon} width="40px" height="32px" margin="0 19px 25px 0" object-fit="contain" alt="" /> */}

        <Image priority src={checkIcon} height={32} width={40} alt="" />
      </Box>

      <Box width="100%" m={2}>
        <Typography variant="h4">Todo List</Typography>
      </Box>
    </Box>
  )
}
