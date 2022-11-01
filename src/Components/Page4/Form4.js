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
        value={values.phone}
        onChange={handleChange} 
        id="phone" 
        placeholder="Phone" 
        onBlur={handleBlur}
        className={errors.phone ? "input-error" : ""}
        />
          {errors.phone && touched && <p className='error'>{errors.phone}</p>}

      </form>
    );
  };
  export default Form;
