import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN, LOGOUT, selectAuth } from '../LOGIN/LoginSlice';
import { Container, Box, Typography, CssBaseline, Avatar, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth === 'true') {
      dispatch(LOGIN({
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
      }));
    }
  }, [dispatch]);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.email === 'admin@123' && values.password === '1234567') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('email', values.email);
      localStorage.setItem('password', values.password);
      dispatch(LOGIN(values));
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
    setSubmitting(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isAuthenticated ? 'Welcome' : 'Sign in'}
        </Typography>
        <Box
          sx={{
            mt: 1,
            p: 3,
            border: '1px solid #ccc',
            borderRadius: 1,
            width: '100%',
          }}
        >
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form>
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  // required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={touched.email && !!errors.email}
                  helperText={touched.email && <ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  // required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={touched.password && !!errors.password}
                  helperText={touched.password && <ErrorMessage name="password" />}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;

