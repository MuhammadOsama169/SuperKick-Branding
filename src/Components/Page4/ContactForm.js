import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ThemeProvider, createTheme  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid

}  from '@material-ui/core';
import Textfield from './FormsUI/TextField';
import Button from './FormsUI/Button'


const theme = createTheme ({

  typography: {
     fontFamily: 'Bebas Neue',
     fontSize:24,
   },
   palette: {
    primary:{
      main:'#FFCD3D',
      
    }
    
  },
})

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
    
  },
  textBackground: {
    backgroundColor:'#eee',
  },
  

}));



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
    <ThemeProvider theme={theme} >
      <Grid container  >
        <Grid item md={12}>
          <Container maxWidth='md'>
            <div className={classes.formWrapper}  >

              <Formik
                initialValues={{
                  ...INITIAL_FORM_STATE
                }}
                validationSchema={VALIDATION}
                onSubmit={values => {
                  console.log(values);
                }}
              >
                <Form  >

                  <Grid container spacing={4}  >

                    <Grid item md={6} xs={12} >
                      <Textfield className={classes.textBackground}
                        name='name'
                        label='NAME'
                      />
                    </Grid>

                    <Grid item md={6}  xs={12}>
                      <Textfield className={classes.textBackground}
                        name='email'
                        label='EMAIL ADDRESS'
                      />
                    </Grid>


                    <Grid item md={6}  xs={12} >
                      <Textfield className={classes.textBackground}
                        name='business'
                        label='BUSINESS ADDRESS'
                      />
                    </Grid>

                    <Grid item md={6}  xs={12} >
                      <Textfield className={classes.textBackground}
                        name='phone'
                        label='PHONE'
                      />
                    </Grid>


                    <Grid item md={12} xs={12}>
                      <Textfield className={classes.textBackground}
                        name='website'
                        label='WEBSITE'
                      />
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <Textfield className={classes.textBackground}
                        name='message'
                        label='MESSAGE'
                        multiline={true}
                        minRows={4}
                      />
                    </Grid>

                    <Grid item md={3} xs={12} >
{/* Button sizing in FormsUI/Button.js */}
                        <Button >
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
    </ThemeProvider>
  );
};

export default ContactForm