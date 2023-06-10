import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material"
import styled from "@emotion/styled"

import Link from "next/link"
import { useRouter } from "next/router"

import { useAuth } from "../subjectRelated/auth/context/AuthContext"

export const Navbar = () => {
  const { user, logout } = useAuth()
  const { push } = useRouter()

  const onLogout = () => {
    logout()
    push("/register")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <Typography variant="h5" component="div">
            <Link href={`/`}>TodoList</Link>
          </Typography> */}
          <Button
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "10px",
            }}
            onClick={() => push("/")}
          >
            Todo List
          </Button>

          <Box alignItems="right" sx={{ flexGrow: 1, textAlign: "right" }}>
            {user ? (
              <Button
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "10px",
                }}
                onClick={onLogout}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginRight: "10px",
                  }}
                  onClick={() => push("/login")}
                >
                  Login
                </Button>
                <Button
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginRight: "10px",
                  }}
                  onClick={() => push("/register")}
                >
                  Register
                </Button>

                {/* <Link href={`/login`} passHref>
                  <StyledLink>Login</StyledLink>
                </Link> */}
                {/* <Link href={`/login`}>Login</Link> */}
                {/* <Link href={`/register`}>Register</Link> */}
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

// styled components gives hydration error,
// now using buttons
// but later solve this hydration problem
const StyledLink = styled.a`
  color: white;
  background: red;
`
// textDecoration: "none", color: "white", marginRight: "10px"
