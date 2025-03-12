import React, { useState } from "react"
import { useRouter } from "next/router"
import { TextField, Button, Container, Stack, Alert, Typography } from "@mui/material"

import { useAuth } from "../context/AuthContext"
import { useForm } from "../../../../hooks/useForm"

import { useMutationLoginUser } from "../../../../graphql/auth/useMutationLogin"

export const Login = () => {
  const { push } = useRouter()
  const [errors, setErrors] = useState([])
  const { login } = useAuth()
  const { loginUser } = useMutationLoginUser(setErrors, login, () => push("/"))
  const { onChange, onSubmit } = useForm(loginUser, { email: "", password: "" })

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Stack spacing={2}>
        <Typography variant="h4" sx={{ color: "text.primary" }}>
          Welcome Back!
        </Typography>
        <Typography variant="h5" sx={{ color: "text.disabled", marginBottom: 5 }}>
          Log in to continue
        </Typography>

        <TextField label="Email" name="email" onChange={onChange} />
        <TextField label="Password" name="password" onChange={onChange} />

        {errors.map((error: any) => (
          <Alert key={error.message} severity="error" sx={{ marginBottom: 2 }}>
            {error.message}
          </Alert>
        ))}
        <Button variant="contained" onClick={onSubmit}>
          Log In
        </Button>
      </Stack>
    </Container>
  )
}
