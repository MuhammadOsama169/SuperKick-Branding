import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../../schemas';
import './Form.css';


const Form = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name:"",
    },

    validationSchema:basicSchema
});

    return (
      <form onSubmit={handleSubmit} autoComplete="off">

        <input
        value={values.email}
        onChange={handleChange} 
        id="email" 
        type="email" 
        placeholder="Email"
        onBlur={handleBlur}
        className={errors.email && touched ? "input-error" : ""}
         />
          {errors.email && touched && <p className='error'>{errors.email}</p>}        

      </form>
    );
  };
  export default Form;
