import React, { useState } from "react"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"

import { State, useTodos } from "../context/TodosContext"

export const Footer = () => {
  const [value, setValue] = useState<State["showing"]>("all")
  const { onChange } = useTodos()

  const handleChange = (event: any, newValue: State["showing"]) => {
    setValue(newValue)
    onChange({ showing: newValue })
  }

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction label="All" value="all" />
        <BottomNavigationAction label="Completed" value="completed" />
        <BottomNavigationAction label="Incompleted" value="incompleted" />
      </BottomNavigation>
    </Box>
  )
}
