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
        value={values.name}
        onChange={handleChange} 
        id="name" 
        placeholder="Name" 
        onBlur={handleBlur}
        className={errors.name && touched ? "input-error" : ""}
        />
          {errors.name && touched && <p className='error'>{errors.name}</p>}

      </form>
    );
  };
  export default Form;
