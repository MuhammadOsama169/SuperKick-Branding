import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../../schemas';
import './Form.css';


const Form = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email:"",
      name:"",
      business:"",
      phone:"",
      website:"",
      message:""
    },

    validationSchema:basicSchema
});

console.log(errors);

    return (
      <form onSubmit={handleSubmit} autoComplete="off">

        {/* <input
        value={values.name}
        onChange={handleChange} 
        id="name" 
        placeholder="Name" 
        onBlur={handleBlur}
        className={errors.name && touched ? "input-error" : ""}
        />
          {errors.name && touched && <p className='error'>{errors.name}</p>}

        <input
        value={values.email}
        onChange={handleChange} 
        id="email" 
        type="email" 
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched ? "input-error" : ""}
         />
          {errors.email && touched && <p className='error'>{errors.email}</p>}         */}


        <input
        value={values.business}
        onChange={handleChange} 
        id="business" 
        placeholder="Business Name" 
        onBlur={handleBlur}
        className={errors.business ? "input-error" : ""}
        />


        {/* <input
        value={values.phone}
        onChange={handleChange} 
        id="phone" 
        placeholder="Phone" 
        onBlur={handleBlur}
        className={errors.phone ? "input-error" : ""}
        />
          {errors.phone && touched && <p className='error'>{errors.phone}</p>}


        <input
        value={values.website}
        onChange={handleChange} 
        id="website" 
        placeholder="Website" 
        onBlur={handleBlur}
        />

        <input
        value={values.message}
        onChange={handleChange} 
        id="message" 
        placeholder="Message" 
        onBlur={handleBlur}
        />
        {errors.message && touched && <p className='error'>{errors.message}</p>}

        <button disabled={isSubmitting} type="submit">
        Submit
        </button> */}

      </form>
    );
  };
  export default Form;
