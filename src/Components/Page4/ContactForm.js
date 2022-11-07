import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid

}  from '@material-ui/core';
import Textfield from './FormsUI/TextField';
import Button from './FormsUI/Button'

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
  Text: {
    backgroundColor: '#eee',
    border: '1px solid #bbb',
  },
}));

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Bebas Neue',
      fontSize: 50,
      color: '#999',
    },
  },
});

const INITIAL_FORM_STATE = {
  email:'',
  name:'',
  business:'',
  phone:'',
  website:'',
  message:'',
};

const VALIDATION = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Required'),
  name: Yup.string().min(3, 'Username must be at least 3 characters long').required('Required'),
  business: Yup.string().min(3, 'Username must be at least 3 characters long'),
  phone: Yup.number()
  .typeError('Please enter a valid phone number')
  .required('Required'),
  website: Yup.string().min(3, 'Username must be at least 3 characters long'),
  message: Yup.string().min(3, 'Message must be at least 3 words long'),
});

const ContactForm = () => {
  const classes = useStyles();

  return (
    <Grid container theme={theme} >
      <Grid item xs={12}>
        <Container maxWidth='md'>
          <div className={classes.formWrapper} >

            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form>

                <Grid container spacing={2} >

                  <Grid item xs={6} >
                    <Textfield className={classes.Text && theme}
                      name='name'
                      label='NAME'
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield className={classes.Text}
                      name='email'
                      label='EMAIL ADDRESS'
                    />
                  </Grid>


                  <Grid item xs={6}>
                    <Textfield className={classes.Text }
                      name='business'
                      label='BUSINESS ADDRESS'
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield className={classes.Text}
                      name='phone'
                      label='PHONE'
                    />
                  </Grid>


                  <Grid item xs={12}>
                    <Textfield className={classes.Text}
                      name='website'
                      label='WEBSITE'
                    />
                  </Grid>

                  <Grid item xs={12} >
                    <Textfield className={classes.Text}
                      name='message'
                      label='MESSAGE'
                      multiline={true}
                      minRows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                      <Button>
                        SUBMIT
                      </Button>
                  </Grid>

                </Grid>

              </Form>
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default ContactForm