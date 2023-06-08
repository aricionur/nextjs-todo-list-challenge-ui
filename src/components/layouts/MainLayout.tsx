import * as React from "react"

import { Navbar } from "../core/Navbar"

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default MainLayout
