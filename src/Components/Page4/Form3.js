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
        value={values.business}
        onChange={handleChange} 
        id="business" 
        placeholder="Business Name" 
        onBlur={handleBlur}
        className={errors.business ? "input-error" : ""}
        />

      </form>
    );
  };
  export default Form;
